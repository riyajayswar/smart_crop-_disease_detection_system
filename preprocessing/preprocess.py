import os
import cv2
import numpy as np

IMG_SIZE = 224

def load_data(data_dir):
    images = []
    labels = []
    class_names = sorted(os.listdir(data_dir))

    for label, class_name in enumerate(class_names):
        class_path = os.path.join(data_dir, class_name)

        if not os.path.isdir(class_path):
            continue

        for img_name in os.listdir(class_path):
            img_path = os.path.join(class_path, img_name)

            try:
                img = cv2.imread(img_path)

                if img is None:
                    continue

                img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
                img = img / 255.0

                images.append(img)
                labels.append(label)

            except Exception as e:
                print(f"Error loading {img_path}: {e}")

    return np.array(images), np.array(labels), class_names


if __name__ == "__main__":
    data_dir = "../dataset/train"

    X, y, classes = load_data(data_dir)

    print("✅ Data Loaded Successfully")
    print("X shape:", X.shape)
    print("y shape:", y.shape)
    print("Classes:", classes)