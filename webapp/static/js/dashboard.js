const ctx =
document.getElementById(
"diseaseChart"
);

new Chart(ctx, {

    type:"line",

    data:{

        labels:[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets:[{

            label:
            "Disease Cases",

            data:[
                30,
                45,
                25,
                60,
                80,
                50
            ],

            borderColor:
            "#10b981",

            tension:.4

        }]
    }

});
const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener(
"click",
()=>{

    document.body.classList.toggle(
        "dark-mode"
    );

});