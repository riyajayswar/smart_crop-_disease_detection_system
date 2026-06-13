from preprocessing.data_loader import load_data
from model.model_architecture import create_model
import os
import numpy as np

def train():
    # 1. Load dataset
    X, y, classes = load_data("dataset/train")

    print("\n✅ Data loaded successfully")
    print("Classes:", classes)
    print("Number of classes:", len(classes))
    print("X shape:", X.shape)
    print("y shape:", y.shape)

    # 2. Create model
    model = create_model(num_classes=len(classes))

    # 3. Train model
    history = model.fit(
        X,
        y,
        epochs=10,              # increased for better learning
        batch_size=16,
        validation_split=0.2,
        shuffle=True
    )

    # 4. Save model + classes (IMPORTANT FIX)
    model.save("model/cnn_model.h5")

    # Save class labels (VERY IMPORTANT for prediction consistency)
    np.save("model/classes.npy", classes)

    print("\n🎉 Model training complete and saved successfully!")

if __name__ == "__main__":
    train()