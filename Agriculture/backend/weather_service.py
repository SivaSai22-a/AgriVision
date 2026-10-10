
import requests

API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"


def get_weather(city):
    url = "https://api.openweathermap.org/data/2.5/weather"

    params = {
        "q": city.strip(),
        "appid": API_KEY,
        "units": "metric"
    }

    try:
        response = requests.get(url, params=params, timeout=10)

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

    except requests.RequestException as error:
        print("Weather API error:", error)
        return None
