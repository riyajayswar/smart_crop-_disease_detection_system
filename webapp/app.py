from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def landing():
    return render_template("landing.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/detect")
def detect():
    return render_template("detection.html")

from flask import jsonify

@app.route("/predict", methods=["POST"])
def predict():

    image = request.files["image"]

    return jsonify({

        
        "crop": "Potato",

        "disease": "Late Blight",

        "confidence": 88.7,

        "severity": "High"

    })

if __name__ == "__main__":
    app.run(debug=True)