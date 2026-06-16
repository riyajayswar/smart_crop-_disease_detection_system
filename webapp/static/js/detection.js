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

    const file = imageInput.files[0];

    if(!file){

        alert("Please upload an image first");

        return;
    }

    const formData = new FormData();

    formData.append("image", file);

    try{

        const response =
        await fetch("/predict", {

            method: "POST",

            body: formData

        });

        const data =
        await response.json();

        document.getElementById("cropName")
        .innerText = data.crop;

        document.getElementById("diseaseName")
        .innerText = data.disease;

        document.getElementById("confidence")
        .innerText = data.confidence + "%";

        document.getElementById("severity")
        .innerText = data.severity;

    }

    catch(error){

        console.error(error);

        alert("Prediction Failed");

    }

});
