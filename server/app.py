from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# load the model
model = joblib.load("model.joblib")

@app.route("/")
def home():
    return "server is running!"


@app.route("/api/predict", methods=["POST"])
def predict():
    # get the json data
    data = request.get_json()

    # get the feature names and values, and then create a data frame
    feature_names = list(data.keys())
    feature_values = list(data.values())
    input_data = pd.DataFrame([feature_values], columns=feature_names)

    # predict using the input data
    prediction = model.predict(input_data)

    return jsonify({"prediction": float(prediction[0])})