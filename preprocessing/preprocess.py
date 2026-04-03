from data_loader import load_data

if __name__ == "__main__":
    data_dir = "dataset/train"

    X, y, classes = load_data(data_dir)

    print("✅ Data Loaded Successfully")
    print("X shape:", X.shape)
    print("y shape:", y.shape)
    print("Classes:", classes)