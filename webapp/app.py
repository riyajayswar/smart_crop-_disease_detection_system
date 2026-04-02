from flask import Flask, render_template, request
import os

app = Flask(__name__)

UPLOAD_FOLDER = os.path.join(app.root_path, 'static', 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/', methods=['GET', 'POST'])
def home():
    prediction = None
    image_path = None

    if request.method == 'POST':
        print("POST received")

        if 'file' not in request.files:
            print("No file part")
            return render_template('index.html')

        file = request.files['file']

        if file.filename == "":
            print("No selected file")
            return render_template('index.html')

        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)

        # IMPORTANT FIX
        image_path = "static/uploads/" + file.filename

        prediction = "Healthy Leaf (Demo Result)"

        print("Saved:", filepath)

    return render_template('index.html', prediction=prediction, image_path=image_path)

if __name__ == '__main__':
    app.run(debug=True)