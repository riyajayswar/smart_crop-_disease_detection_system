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

    crop = "Tomato"
    disease = "Early Blight"
    confidence = 96.4
    severity = "Moderate"

    return jsonify({

        "crop": crop,
        "disease": disease,
        "confidence": confidence,
        "severity": severity

    })

if __name__ == "__main__":
    app.run(debug=True)