from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from flask import send_file
import io
from datetime import datetime

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

        "severity": "Moderate",

    })
    
@app.route("/download-report")
def download_report():

    buffer = io.BytesIO()

    pdf = SimpleDocTemplate(buffer)

    styles = getSampleStyleSheet()

    content = [

        Paragraph(
            "AgriVision AI Disease Report",
            styles['Title']
        ),

        Spacer(1,20),

        Paragraph(
            f"Generated: {datetime.now()}",
            styles['Normal']
        ),

        Spacer(1,20),

        Paragraph(
            "Crop: Tomato",
            styles['Heading2']
        ),

        Paragraph(
            "Disease: Early Blight",
            styles['Heading2']
        ),

        Paragraph(
            "Confidence: 96.4%",
            styles['Heading2']
        ),

        Paragraph(
            "Severity: High",
            styles['Heading2']
        ),

        Spacer(1,20),

        Paragraph(
            "Recommended Treatment",
            styles['Heading1']
        ),

        Paragraph(
            """
            Apply Copper Fungicide.
            Remove infected leaves.
            Improve airflow around crops.
            """,
            styles['BodyText']
        )

    ]

    pdf.build(content)

    buffer.seek(0)

    return send_file(

        buffer,

        as_attachment=True,

        download_name=
        "AgriVision_Report.pdf",

        mimetype=
        "application/pdf"

    )

if __name__ == "__main__":
    app.run(debug=True)

