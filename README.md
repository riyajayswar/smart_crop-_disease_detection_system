# 🌱 smart_crop _disease_detection_system

## 📌 Overview
Smart Crop Disease Detection is an AI-based project that identifies plant diseases from leaf images.  
The goal is to help farmers detect diseases early and take preventive actions.

---

## 🎯 Features
- Upload crop leaf image
- Detect disease using machine learning
- Simple and user-friendly interface (future scope)
- Fast and accurate predictions (planned)

---

## 🛠️ Tech Stack
- Python 🐍
- Machine Learning / Deep Learning
- OpenCV (for image processing)
- NumPy, Pandas
- (Future) Flask / Web Interface

---

## 📁 Project Structure

```plaintext
smart_crop_disease_detection_system/
│
├── dataset/
│   ├── raw/
│   ├── train/
│   └── test/
│
├── model/
│   ├── train_model.py
│   ├── predict.py
│   └── cnn_model.h5
│
├── preprocessing/
│   ├── split_dataset.py
│   └── data_loader.py
│
├── webapp/
│   ├── app.py
│   └── templates/
│
├── notebooks/
├── config.py
├── requirements.txt
└── README.md
```


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/smart_crop_disease_detection_system.git
cd smart_crop_disease_detection_system

2️⃣ Install dependencies
pip install -r requirements.txt

3️⃣ Prepare dataset
Place PlantVillage dataset inside:
dataset/raw/
Then run:
python -m preprocessing.split_dataset

4️⃣ Train model
python -m model.batch_test

6️⃣ Predict single image
python model/predict.py


📊 Model Performance
Training Accuracy: ~77%
Test Accuracy: ~75–80%
Model Type: CNN (Convolutional Neural Network)


🧠 Technologies Used
Python 🐍
TensorFlow / Keras
OpenCV
NumPy
Scikit-learn
Flask (for web app - future integration)


📌 Key Learning Outcomes
Image classification using CNN
Dataset preprocessing and augmentation
Train-test splitting strategy (80/20)
Model evaluation techniques
End-to-end ML pipeline development


🌐 Future Improvements
Improve accuracy using MobileNetV2
Add data augmentation
Deploy web app using Flask/Django
Mobile app integration
Real-time camera detection


👨‍💻 Contributors
ML Model & Pipeline: Riya Jayswar
Web App Integration: Niharika Saroj


⭐ If you like this project

Give a ⭐ on the repository and share it!