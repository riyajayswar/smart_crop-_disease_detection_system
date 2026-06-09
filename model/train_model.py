from preprocessing.data_loader import load_data
from model.model_architecture import create_model
import numpy as np

def train():
    # 1. Load dataset
    X, y, classes = load_data("dataset/train")

    print("✅ Data loaded")
    print("Classes:", classes)
    print("X shape:", X.shape)
    print("y shape:", y.shape)

    # 2. Create model
    model = create_model(num_classes=len(classes))

    # 3. Train model
    history = model.fit(
        X,
        y,
        epochs=3,              # start small (important)
        batch_size=16,
        validation_split=0.2
    )

    # 4. Save model
    model.save("model/cnn_model.h5")

    print("🎉 Model training complete and saved!")

if __name__ == "__main__":
    train()