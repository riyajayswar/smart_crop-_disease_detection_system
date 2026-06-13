from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def login():
    return render_template("login.html")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/predict")
def predict():
    return render_template("predict.html")

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/reports")
def reports():
    return render_template("reports.html")

if __name__ == "__main__":
    app.run(debug=True)