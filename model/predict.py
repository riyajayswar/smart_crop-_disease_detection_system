import numpy as np
import cv2
from tensorflow.keras.models import load_model

# Load trained model
model = load_model("model/cnn_model.h5")

# Image size (same as training)
IMG_SIZE = 224

# Class labels (same order as training)
classes = ['Tomato___Early_blight', 'Tomato___healthy']

def preprocess_image(img_path):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)
    return img

def predict_image(img_path):
    img = preprocess_image(img_path)
    prediction = model.predict(img)
    class_index = np.argmax(prediction)
    
    print("Prediction Probabilities:", prediction)
    print("Predicted Class:", classes[class_index])

# TEST YOUR MODEL HERE
if __name__ == "__main__":
    img_path = "dataset/train/Tomato___Early_blight/0a2726e0-3358-4a46-b6dc-563a5a9f2bdf___RS_Erly.B 7860.JPG"  # change image path
    predict_image(img_path)