from flask import Flask, request, jsonify
from flask_cors import CORS

import pickle
import mysql.connector

from flask_bcrypt import Bcrypt

from weather_service import get_weather
from recommendation import generate_recommendation



app = Flask(__name__)

CORS(app)

bcrypt = Bcrypt(app)





# =================================
# LOAD MACHINE LEARNING MODEL
# =================================


try:

    model_data = pickle.load(
        open("model.pkl","rb")
    )


    model = model_data["model"]

    encoders = model_data["encoders"]


    print("✅ Model Loaded Successfully")



except Exception as e:


    print("❌ Model Loading Error:",e)


    model = None

    encoders = {}









# =================================
# MYSQL CONNECTION
# =================================


def get_db():

    try:


        connection = mysql.connector.connect(

            host="localhost",

            user="root",

            password="24030-CM-014",

            database="agriculture"

        )


        return connection



    except Exception as e:


        print("Database Error:",e)


        return None









# =================================
# SAFE ENCODER
# =================================


def safe_encode(value,encoder):

    try:


        if value in encoder.classes_:


            return encoder.transform([value])[0]


        return 0



    except:


        return 0









# =================================
# HOME API
# =================================


@app.route("/")


def home():


    return jsonify({

        "message":

        "Agriculture ML API Running ✅"

    })











# =================================
# REGISTER API
# =================================


@app.route("/register", methods=["POST"])

def register():


    try:


        data = request.get_json()


        name = data["name"]

        email = data["email"]

        password = data["password"]



        hashed_password = bcrypt.generate_password_hash(

            password

        ).decode("utf-8")



        db = get_db()


        cursor = db.cursor()



        cursor.execute(

            """

            INSERT INTO users

            (

            name,

            email,

            password

            )


            VALUES

            (%s,%s,%s)

            """,

            (

            name,

            email,

            hashed_password

            )

        )



        db.commit()



        cursor.close()

        db.close()



        return jsonify({

            "message":

            "User registered successfully"

        })




    except Exception as e:


        return jsonify({

            "error":str(e)

        }),500










# =================================
# LOGIN API
# =================================


@app.route("/login", methods=["POST"])

def login():


    try:


        data=request.get_json()


        email=data["email"]

        password=data["password"]



        db=get_db()


        cursor=db.cursor(dictionary=True)



        cursor.execute(

            """

            SELECT *

            FROM users

            WHERE email=%s

            """,

            (email,)

        )



        user=cursor.fetchone()



        cursor.close()

        db.close()





        if user is None:


            return jsonify({

                "error":

                "User not found"

            }),404






        if bcrypt.check_password_hash(

            user["password"],

            password

        ):



            return jsonify({

                "message":

                "Login successful",


                "user_id":

                user["id"],


                "name":

                user["name"],


                "email":

                user["email"]

            })



        else:


            return jsonify({

                "error":

                "Invalid password"

            }),401





    except Exception as e:


        return jsonify({

            "error":str(e)

        }),500
        # =================================
# WEATHER API
# =================================


@app.route("/weather",methods=["POST"])

def weather():

    try:


        data=request.get_json()


        city=data["city"]



        result=get_weather(city)



        if result is None:


            return jsonify({

                "error":

                "Weather data not found"

            }),404




        return jsonify(result)



    except Exception as e:


        return jsonify({

            "error":str(e)

        }),500







# =================================
# OPTIONS API
# =================================


@app.route("/options")

def options():


    return jsonify({


        "crops":

        list(encoders["crop"].classes_),



        "soil_types":

        list(encoders["soil_type"].classes_),



        "fertilizers":

        list(encoders["fertilizer"].classes_)


    })









# =================================
# PREDICTION API
# =================================


@app.route("/predict",methods=["POST"])

def predict():


    try:



        data=request.get_json()



        required=[


            "rainfall",

            "temperature",

            "soil_quality",

            "humidity",

            "crop",

            "soil_type",

            "fertilizer",

            "user_id"


        ]




        for field in required:


            if field not in data or data[field]=="":


                return jsonify({

                    "error":

                    f"Missing field: {field}"

                }),400







        rainfall=float(data["rainfall"])

        temperature=float(data["temperature"])

        soil_quality=float(data["soil_quality"])

        humidity=float(data["humidity"])



        crop=data["crop"]

        soil_type=data["soil_type"]

        fertilizer=data["fertilizer"]


        user_id=data["user_id"]







        crop_encoded=safe_encode(

            crop,

            encoders["crop"]

        )



        soil_encoded=safe_encode(

            soil_type,

            encoders["soil_type"]

        )



        fertilizer_encoded=safe_encode(

            fertilizer,

            encoders["fertilizer"]

        )








        if model is None:


            return jsonify({

                "error":

                "Model not loaded"

            }),500







        prediction=model.predict([


            [


            rainfall,

            temperature,

            soil_quality,

            humidity,

            crop_encoded,

            soil_encoded,

            fertilizer_encoded


            ]


        ])[0]



        prediction=float(prediction)









        recommendation=generate_recommendation(


            crop,

            soil_type,

            temperature,

            humidity,

            rainfall,

            fertilizer,

            prediction


        )











        # ==========================
        # SAVE PREDICTION DATABASE
        # ==========================


        db=get_db()



        if db:


            cursor=db.cursor()



            cursor.execute(

            """

            INSERT INTO crop_data

            (

            rainfall,

            temperature,

            soil_quality,

            humidity,

            crop,

            soil_type,

            fertilizer,

            predicted_yield,

            user_id

            )


            VALUES

            (%s,%s,%s,%s,%s,%s,%s,%s,%s)

            """,


            (

            rainfall,

            temperature,

            soil_quality,

            humidity,

            crop,

            soil_type,

            fertilizer,

            prediction,

            user_id

            )


            )



            db.commit()



            cursor.close()

            db.close()







        return jsonify({



            "prediction":

            round(prediction,2),




            "recommendation":

            recommendation



        })







    except Exception as e:



        print("Prediction Error:",e)



        return jsonify({

            "error":str(e)

        }),500
        # =================================
# HISTORY API
# =================================


@app.route("/history", methods=["GET"])

def history():


    try:


        user_id = request.args.get("user_id")



        db = get_db()



        if not db:


            return jsonify({

                "error":

                "Database not connected"

            }),500





        cursor = db.cursor(dictionary=True)



        if user_id:


            cursor.execute(

                """

                SELECT *

                FROM crop_data

                WHERE user_id=%s

                ORDER BY id DESC

                """,

                (user_id,)

            )


        else:


            cursor.execute(

                """

                SELECT *

                FROM crop_data

                ORDER BY id DESC

                """

            )





        result = cursor.fetchall()



        cursor.close()

        db.close()



        return jsonify(result)




    except Exception as e:


        return jsonify({

            "error":str(e)

        }),500







# =================================
# RUN SERVER
# =================================


if __name__=="__main__":


    app.run(

        debug=True

    )