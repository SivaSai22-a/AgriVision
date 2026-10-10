# ==========================================
# AI FARMING RECOMMENDATION ENGINE
# ==========================================


def generate_recommendation(
    crop,
    soil_type,
    temperature,
    humidity,
    rainfall,
    fertilizer,
    prediction
):


    recommendations = []



    # ==========================
    # CROP ANALYSIS
    # ==========================

    crop = crop.lower()


    crop_advice = {


        "rice":
        "Rice grows well with sufficient water supply and proper irrigation management.",


        "wheat":
        "Wheat requires moderate temperature and balanced nutrient management.",


        "corn":
        "Corn performs better with good sunlight and nitrogen-rich soil.",


        "maize":
        "Maize requires proper moisture control and nutrient management.",


        "cotton":
        "Cotton prefers warm weather with controlled irrigation.",


        "sugarcane":
        "Sugarcane requires high water availability and fertile soil.",


        "barley":
        "Barley performs well in cooler climates with proper soil drainage."

    }



    if crop in crop_advice:

        recommendations.append(
            "🌾 Crop Advice: " + crop_advice[crop]
        )





    # ==========================
    # SOIL ANALYSIS
    # ==========================


    soil = soil_type.lower()



    soil_advice = {


        "clay":
        "Clay soil has good water retention. Avoid excessive watering.",


        "loamy":
        "Loamy soil is highly suitable because it balances nutrients and drainage.",


        "sandy":
        "Sandy soil needs additional organic matter to improve fertility.",


        "black":
        "Black soil is rich in nutrients and suitable for many crops.",


        "red":
        "Red soil may require additional fertilizers and organic compost.",


        "alluvial":
        "Alluvial soil is fertile and suitable for high productivity."

    }



    if soil in soil_advice:

        recommendations.append(
            "🌱 Soil Advice: " + soil_advice[soil]
        )





    # ==========================
    # WEATHER ANALYSIS
    # ==========================


    if temperature < 20:


        recommendations.append(
            "🌡 Temperature: Low temperature detected. Monitor crop growth carefully."
        )


    elif temperature > 35:


        recommendations.append(
            "🌡 Temperature: High temperature detected. Increase irrigation frequency."
        )


    else:


        recommendations.append(
            "🌡 Temperature: Temperature conditions are suitable for farming."
        )





    if humidity < 40:


        recommendations.append(
            "💧 Humidity: Low humidity detected. Consider additional watering."
        )


    elif humidity > 80:


        recommendations.append(
            "💧 Humidity: High humidity detected. Monitor fungal diseases."
        )


    else:


        recommendations.append(
            "💧 Humidity: Humidity level is suitable."
        )






    if rainfall < 50:


        recommendations.append(
            "🌧 Rainfall: Low rainfall. Additional irrigation may be required."
        )


    elif rainfall > 200:


        recommendations.append(
            "🌧 Rainfall: Heavy rainfall detected. Ensure proper drainage."
        )


    else:


        recommendations.append(
            "🌧 Rainfall: Rainfall condition is acceptable."
        )






    # ==========================
    # FERTILIZER ANALYSIS
    # ==========================


    fertilizer = fertilizer.lower()



    fertilizer_advice = {


        "urea":
        "Urea provides nitrogen support. Avoid over-application.",


        "dap":
        "DAP helps root development and improves crop growth.",


        "organic":
        "Organic fertilizer improves long-term soil health.",


        "npk":
        "NPK provides balanced nutrients for better productivity.",


        "compost":
        "Compost improves soil structure naturally."

    }



    if fertilizer in fertilizer_advice:


        recommendations.append(

            "🧪 Fertilizer Advice: "
            +
            fertilizer_advice[fertilizer]

        )






    # ==========================
    # YIELD ANALYSIS
    # ==========================


    if prediction >= 70:


        recommendations.append(

            "📈 Yield Prediction: Excellent expected yield. Maintain current farming practices."

        )


    elif prediction >= 50:


        recommendations.append(

            "📈 Yield Prediction: Good expected yield. Minor improvements can increase productivity."

        )


    else:


        recommendations.append(

            "📈 Yield Prediction: Low expected yield. Consider improving soil and farming conditions."

        )





    # ==========================
    # FINAL RESPONSE
    # ==========================


    return "\n\n".join(recommendations)