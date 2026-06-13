// ===============================
// SMART CROP DISEASE DASHBOARD JS
// ===============================

// 🌐 Live Date & Time Widget
function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const timeString = now.toLocaleDateString("en-US", options);

    const dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        dateTimeElement.innerText = timeString;
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();


// ===============================
// 🌿 DASHBOARD INITIAL ANIMATION
// ===============================
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// ===============================
// 🌙 DARK MODE TOGGLE (optional feature)
// ===============================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // save preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}


// ===============================
// 📊 FAKE ANALYTICS (for UI demo)
// ===============================
function loadDashboardStats() {
    const stats = {
        cropsAnalyzed: 1284,
        diseasesDetected: 312,
        accuracy: 95,
        activeUsers: 48
    };

    const elements = {
        crops: document.getElementById("cropsAnalyzed"),
        diseases: document.getElementById("diseasesDetected"),
        accuracy: document.getElementById("accuracy"),
        users: document.getElementById("activeUsers")
    };

    if (elements.crops) elements.crops.innerText = stats.cropsAnalyzed;
    if (elements.diseases) elements.diseases.innerText = stats.diseases;
    if (elements.accuracy) elements.accuracy.innerText = stats.accuracy + "%";
    if (elements.users) elements.users.innerText = stats.activeUsers;
}

loadDashboardStats();


// ===============================
// 🌿 IMAGE UPLOAD PREVIEW (dashboard usage)
// ===============================
const uploadInput = document.getElementById("uploadInput");
const uploadPreview = document.getElementById("uploadPreview");

if (uploadInput) {
    uploadInput.addEventListener("change", function () {
        const file = this.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file only.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            if (uploadPreview) {
                uploadPreview.src = e.target.result;
                uploadPreview.style.display = "block";
            }
        };

        reader.readAsDataURL(file);
    });
}


// ===============================
// 🤖 AI PREDICTION LOADING SIMULATION
// ===============================
function simulatePrediction() {
    const resultBox = document.getElementById("resultBox");

    if (!resultBox) return;

    resultBox.innerHTML = "Analyzing crop image... 🌿";

    setTimeout(() => {
        const diseases = [
            "Leaf Blight Detected",
            "Healthy Crop 🌱",
            "Rust Disease Detected",
            "Nutrient Deficiency",
            "Fungal Infection Detected"
        ];

        const randomResult = diseases[Math.floor(Math.random() * diseases.length)];

        resultBox.innerHTML = `
            <h3>Prediction Result</h3>
            <p>${randomResult}</p>
            <span>Confidence: ${Math.floor(Math.random() * 10 + 90)}%</span>
        `;
    }, 2000);
}


// ===============================
// 🔔 SIMPLE TOAST NOTIFICATION SYSTEM
// ===============================
function showToast(message, type = "success") {
    const toast = document.createElement("div");

    toast.className = `toast ${type}`;
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Example usage:
// showToast("Login Successful", "success");
// showToast("Invalid Credentials", "error");


// ===============================
// 🌾 OPTIONAL: NAVIGATION HANDLER
// ===============================
function goToDashboard() {
    window.location.href = "/dashboard";
}

function logout() {
    localStorage.clear();
    window.location.href = "/login";
}
