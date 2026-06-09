import os
import shutil
import random

def split_dataset(source_dir, train_dir, test_dir, split_ratio=0.8):
    classes = os.listdir(source_dir)

    for class_name in classes:
        class_path = os.path.join(source_dir, class_name)

        if not os.path.isdir(class_path):
            continue

        images = os.listdir(class_path)
        random.shuffle(images)

        split_index = int(len(images) * split_ratio)

        train_images = images[:split_index]
        test_images = images[split_index:]

        # create folders
        os.makedirs(os.path.join(train_dir, class_name), exist_ok=True)
        os.makedirs(os.path.join(test_dir, class_name), exist_ok=True)

        # copy train images
        for img in train_images:
            src = os.path.join(class_path, img)
            dst = os.path.join(train_dir, class_name, img)
            shutil.copy(src, dst)

        # copy test images
        for img in test_images:
            src = os.path.join(class_path, img)
            dst = os.path.join(test_dir, class_name, img)
            shutil.copy(src, dst)

        print(f"{class_name} split done")

if __name__ == "__main__":
    source_dir = "dataset/raw"      # your extracted dataset
    train_dir = "dataset/train"
    test_dir = "dataset/test"

    split_dataset(source_dir, train_dir, test_dir)