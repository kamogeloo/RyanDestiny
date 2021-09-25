const card = document.querySelector('.Character');
const container = document.querySelector('.Person');



container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /15;
    let yAxis = (window.innerHeight/ 2 - e.pageY) /15;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in

container.addEventListener("mouseenter", (e)=>{
    card.style.transition = 'all 0.75s ease';
    

    //popout effect

    container.style.filter = "drop-shadow(1px 2px 10px red)";
    container.style.transform = "translateZ(120px)";

});


//animate out
container.addEventListener("mouseleave", (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform= `rotateY(0deg) rotateX(0deg)`;
    //pop back
    container.style.transform = "translateZ(0px)";
    container.style.filter = 'none';
   

    
});