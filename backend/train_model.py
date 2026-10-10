import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor
import pickle

data = {
    "rainfall": [100,120,80,90,110,150,70,130,95,85],
    "temperature": [30,32,28,29,31,33,27,34,30,28],
    "soil_quality": [8,7,6,7,8,9,5,8,7,6],
    "humidity": [60,65,55,58,70,75,50,68,62,57],

    "crop": ["Rice","Wheat","Corn","Rice","Wheat","Corn","Rice","Sugarcane","Cotton","Barley"],

    "soil_type": ["Clay","Loamy","Sandy","Clay","Loamy","Sandy","Clay","Black","Red","Alluvial"],

    "fertilizer": ["Urea","DAP","Organic","Urea","DAP","Organic","Urea","NPK","Compost","Ammonium Sulphate"],

    "yield": [60,65,50,58,70,75,55,80,68,62]
}

df = pd.DataFrame(data)

encoders = {}

for col in ["crop", "soil_type", "fertilizer"]:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le

X = df.drop("yield", axis=1)
y = df["yield"]

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X, y)

pickle.dump({
    "model": model,
    "encoders": encoders
}, open("model.pkl", "wb"))

print("✅ New model created successfully")