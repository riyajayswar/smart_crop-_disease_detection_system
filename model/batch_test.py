import os
import numpy as np
from model.predict import preprocess_image, model, classes

def batch_test(folder_path):
    correct = 0
    total = 0

    for class_name in os.listdir(folder_path):
        class_path = os.path.join(folder_path, class_name)

        if not os.path.isdir(class_path):
            continue

        for img_name in os.listdir(class_path):
            img_path = os.path.join(class_path, img_name)

            try:
                img = preprocess_image(img_path)
                prediction = model.predict(img)
                pred_class = classes[np.argmax(prediction)]

                total += 1

                if pred_class == class_name:
                    correct += 1

                print(f"Image: {img_name} | Predicted: {pred_class} | Actual: {class_name}")

            except Exception as e:
                print("Error:", e)

    accuracy = (correct / total) * 100
    print("\n======================")
    print("Batch Test Accuracy:", accuracy)
    print("======================")

if __name__ == "__main__":
    test_folder = "dataset/test"
    batch_test(test_folder)