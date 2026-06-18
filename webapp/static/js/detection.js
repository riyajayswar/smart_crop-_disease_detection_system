console.log("Detection JS Loaded");
const browseBtn =
document.getElementById("browseBtn");

const imageInput =
document.getElementById("imageInput");

const previewImage =
document.getElementById("previewImage");

browseBtn.addEventListener("click", () => {

    imageInput.click();

});

imageInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        previewImage.src =
        URL.createObjectURL(file);

    }

});

const analyzeBtn =
document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {

    console.log("STEP 1");

    const file = imageInput.files[0];

    const status =
    document.getElementById("aiStatus");

    const progressFill =
    document.getElementById("progressFill");

    const progressValue =
    document.getElementById("progressValue");

    if(!file){

        alert("No file selected");

        return;
    }

    console.log("STEP 2");

    const formData = new FormData();

    formData.append("image", file);

    status.innerText =
    "Initializing AI Engine...";

    let progress = 0;

    const messages = [

        "Scanning Crop Image...",

        "Detecting Disease Patterns...",

        "Running CNN Model...",

        "Calculating Confidence...",

        "Generating Recommendations..."

    ];

    let index = 0;

    const loader = setInterval(() => {

        progress += 20;

        progressFill.style.width =
        progress + "%";

        progressValue.innerText =
        progress + "%";

        if(index < messages.length){

            status.innerText =
            messages[index];

            index++;

        }

        if(progress >= 100){

            clearInterval(loader);

        }

    }, 500);

    const response =
    await fetch("/predict", {

        method:"POST",

        body:formData

    });

    console.log("STEP 3");

    const data =
    await response.json();

    const severityFill =
    document.getElementById(
        "severityFill"
    );

    console.log(severityFill);

    if(data.severity === "Low"){

        severityFill.style.width =
        "30%";

    }

    else if(
        data.severity === "Moderate"
    ){

        severityFill.style.width =
        "65%";

    }

    else{

        severityFill.style.width =
        "100%";

    }

    status.innerText =
    "Diagnosis Completed Successfully";

    document.getElementById("cropName").innerText =
    data.crop;

    document.getElementById("diseaseName").innerText =
    data.disease;

    document.getElementById("confidence").innerText =
    data.confidence + "%";

    document.getElementById("severity").innerText =
    data.severity;

    const historyBody =
    document.getElementById("historyBody");

    const today =
    new Date().toLocaleString();

    const record = {

        date: today,

        crop: data.crop,

        disease: data.disease,

        confidence: data.confidence,

        severity: data.severity

    };

    let history =

    JSON.parse(
        localStorage.getItem(
            "detectionHistory"
        )
    ) || [];

    history.unshift(record);

    localStorage.setItem(

        "detectionHistory",

        JSON.stringify(history)

    );

    renderHistory();

    const assessmentFill =
    document.getElementById(
        "assessmentFill"
    );

    const severityLabel =
    document.getElementById("severityLabel");

    if(assessmentFill){

        if(data.severity === "Low"){

            assessmentFill.style.width = "30%";
            assessmentFill.style.background = "#10b981";

            severityLabel.innerText =
            "Low Severity (30%)";

        }

        else if(data.severity === "Moderate"){

            assessmentFill.style.width = "65%";
            assessmentFill.style.background = "#facc15";

            severityLabel.innerText =
            "Moderate Severity (65%)";

        }

        else{

            assessmentFill.style.width = "100%";
            assessmentFill.style.background = "#ef4444";

            severityLabel.innerText =
            "High Severity (100%)";

        }

    }

    /* AI Confidence Gauge */

    const gauge =
    document.querySelector(
        ".outer-circle"
    );

    const gaugeText =
    document.getElementById(
        "confidenceGauge"
    );

    if(gauge && gaugeText){

        let value =
        data.confidence;

        gaugeText.innerText =
        value + "%";

        gauge.style.background =
        `conic-gradient(
            #10b981 ${value * 3.6}deg,
            #e5e7eb 0deg
        )`;

    }

    const reportBtn =
    document.getElementById(
        "downloadReportBtn"
    );

    reportBtn.addEventListener(
        "click",
        () => {

            window.location.href =
            "/download-report";

        }
    );
function renderHistory(){

    const historyBody =
    document.getElementById(
        "historyBody"
    );

    let history =

    JSON.parse(
        localStorage.getItem(
            "detectionHistory"
        )
    ) || [];

    historyBody.innerHTML = "";

    history.forEach(record => {

        historyBody.innerHTML += `

        <tr>

            <td>${record.date}</td>

            <td>${record.crop}</td>

            <td>${record.disease}</td>

            <td>${record.confidence}%</td>

            <td>${record.severity}</td>

        </tr>

        `;

    });

}
renderHistory();
});
