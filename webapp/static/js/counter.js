document.querySelectorAll(".counter").forEach(counter => {

    const target =
    +counter.getAttribute("data-target");

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if(count < target){

            counter.innerText =
            Math.floor(count).toLocaleString();

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            target.toLocaleString();
        }
    };

    update();
});