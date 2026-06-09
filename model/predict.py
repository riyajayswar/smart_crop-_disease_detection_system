import numpy as np
import cv2
from tensorflow.keras.models import load_model

# Load model
model = load_model("model/cnn_model.h5")

# Load classes (CRITICAL FIX)
classes = np.load("model/classes.npy", allow_pickle=True)

# Preprocess image
def preprocess_image(img_path):
    img = cv2.imread(img_path)
    img = cv2.resize(img, (224, 224))
    img = img / 255.0
    img = np.expand_dims(img, axis=0)
    return img

# Predict function
def predict_image(img_path):
    img = preprocess_image(img_path)

    prediction = model.predict(img)
    class_index = np.argmax(prediction)

    predicted_class = classes[class_index]

    print("\n🔍 Prediction Result:")
    print("Class:", predicted_class)
    print("Confidence:", np.max(prediction))

    return predicted_class

if __name__ == "__main__":
    img_path = input("Enter image path: ")
    predict_image(img_path)