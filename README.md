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

## 📂 Project Structure

```plaintext
smart_crop_disease_detection_system/
│
├── dataset/
│   ├── raw/
│   ├── train/
│   └── test/
│
├── model/
│   ├── batch_test.py
│   ├── classes.npy
│   ├── cnn_model.h5
│   ├── __init__.py
│   ├── model_architecture.py
│   ├── predict.py
│   └── train_model.py
│
├── preprocessing/
│   ├── data_loader.py
│   ├── __init__.py
│   ├── preprocess.py
│   └── split_dataset.py
│
├── webapp/
│   ├── static/
│   │   ├── images/
│   │   └── uploads/
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   └── app.py
│
├── notebooks/
│
├── .gitignore
├── config.py
├── README.md
└── requirements.txt
```
## 📁 Folder Description

| Folder/File | Description |
|------------|-------------|
| dataset/ | Contains raw, training, and testing image datasets |
| preprocessing/ | Data preprocessing, loading, and train-test splitting |
| model/ | CNN architecture, training, prediction, and evaluation scripts |
| webapp/ | Flask web application for disease prediction |
| notebooks/ | Jupyter notebooks used for experimentation |
| config.py | Project configuration settings |
| requirements.txt | Project dependencies |
| README.md | Project documentation |

## Model Files

The trained model files (`cnn_model.h5` and `classes.npy`) are shared separately due to GitHub file size limitations.

---


## ⚙️ Installation & Setup
```plaintext
1️⃣ Clone the repository
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
```


```plaintext
📊 Model Performance
Training Accuracy: ~77%
Test Accuracy: 73.13%
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
```