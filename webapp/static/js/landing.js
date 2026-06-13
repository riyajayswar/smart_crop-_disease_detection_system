const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.dataset.target;

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(
                current + increment
            );

            setTimeout(
                updateCounter,
                20
            );

        }else{

            counter.innerText =
            target;
        }
    };

    updateCounter();

});
const revealElements =
document.querySelectorAll(
".feature-card,.stat-card,.step,.testimonial-card"
);

window.addEventListener(
"scroll",
()=>{

    revealElements.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            el.style.opacity="1";

            el.style.transform=
            "translateY(0)";
        }

    });

});