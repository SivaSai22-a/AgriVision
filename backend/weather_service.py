import requests


API_KEY = "0844c184e5627d1232fa590a0b034b98"


def get_weather(city):

    url = (
        "https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={API_KEY}&units=metric"
    )


    response = requests.get(url)


    print("STATUS:", response.status_code)

    print("DATA:", response.text)



    if response.status_code != 200:

        return None



    data = response.json()


    return {

        "temperature": data["main"]["temp"],

        "humidity": data["main"]["humidity"],

        "rainfall": data.get("rain", {}).get("1h", 0)

    }