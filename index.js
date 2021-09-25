const card = document.querySelector('.Character');
const container = document.querySelector('.Person');
const heading = document.querySelector('.heading');
const hairstyle = document.querySelector('.hairstyle');
const hair = document.querySelector('.hair');
const hair1 = document.querySelector('.hair1');
const head = document.querySelector('.head');
const head1 = document.querySelector('.head1');
const neck = document.querySelector('.neck');
const leftshoulder = document.querySelector('.left-shoulder');
const rightshoulder = document.querySelector('.right-shoulder');
const middleboob = document.querySelector('.middleboob');
const upper = document.querySelector('.upper');
const upperright = document.querySelector('.upper-right');
const middleupper = document.querySelector('.middleupper');
const lefthip = document.querySelector('.left-hip');
const leftthigh = document.querySelector('.left-thigh');
const leftthighBtm = document.querySelector('.left-thigh-btm');
const leftcalve = document.querySelector('.left-calve');
const leftboot = document.querySelector('.leftboot');
const leftheel = document.querySelector('.leftheel');
const leftboottop = document.querySelector('.leftbootop');
const leftboottop1 = document.querySelector('.leftbootop1');
const leftstilleto = document.querySelector('.leftstilleto');
const heelthing = document.querySelector('.heelthing');
const heelthing1 = document.querySelector('.heelthing1');
const cover = document.querySelector('.cover');
const rightpelvis = document.querySelector('.right-pelvis');
const rightthigh = document.querySelector('.right-thigh');
const rightknee = document.querySelector('.right-knee');
const rightcalve = document.querySelector('.right-calve');
const rightboot = document.querySelector('.rightboot');
const serethe = document.querySelector('.serethe');
const rightheel = document.querySelector('.right-heel');
const rightheelthing = document.querySelector('.right-heelthing');
const rightbootop = document.querySelector('.right-bootop');
const rightbootop1 = document.querySelector('.right-bootop1');
const rightbootop2 = document.querySelector('.right-bootop2');
const rightbootop3 = document.querySelector('.right-bootop3');
const crotch = document.querySelector('.crotch');
const crotch1 = document.querySelector('.crotch1');
const leftupperarm = document.querySelector('.leftupperarm');
const leftupperarm1 = document.querySelector('.leftupperarm1');
const leftlowerarm = document.querySelector('.leftlowerarm');
const leftlowerarmside = document.querySelector('.leftlowerarmside');
const lefthand = document.querySelector('.left-hand');
const leftfinger = document.querySelector('.leftfinger');
const leftfinger1 = document.querySelector('.leftfinger1');
const leftfinger2 = document.querySelector('.leftfinger2');
const leftfinger3 = document.querySelector('.leftfinger3');
const leftfinger4 = document.querySelector('.leftfinger4');
const leftfinger5 = document.querySelector('.leftfinger5');
const rightupperarm = document.querySelector('.rightupperarm');
const rightupperarm1 = document.querySelector('.rightupperarm1');
const rightlowerarm = document.querySelector('.rightlowerarm');
const rightlowerarm1 = document.querySelector('.rightlowerarm1');
const righthand = document.querySelector('.right-hand');
const rightfinger = document.querySelector('.rightfinger');
const rightfinger1 = document.querySelector('.rightfinger1');
const rightfinger2 = document.querySelector('.rightfinger2');
const rightupperarmcancel = document.querySelector('.rightupperarmcancel');
const rightlegcancel = document.querySelector('.rightlegcancel');
const rightarminnercancel = document.querySelector('.rightarminnercancel');
const rightarminnercancel1 = document.querySelector('.rightarminnercancel1');
const rightthighinnercancel = document.querySelector('.rightthighinnercancel');
const rightbootcancel = document.querySelector('.rightbootcancel');
const rightbootcancel1 = document.querySelector('.rightbootcancel1');
const rightbootcancel2 = document.querySelector('.rightbootcancel2');
const rightbootcancel3 = document.querySelector('.rightbootcancel3');
const rightbootcancel4 = document.querySelector('.rightbootcancel4');
const leftbootcancel = document.querySelector('.leftbootcancel');
const leftcalvecancel = document.querySelector('.leftcalvecancel');
const leftthighcancel = document.querySelector('.leftthighcancel');
const leftthighcancel1 = document.querySelector('.leftthighcancel1');
const leftthighcancel2 = document.querySelector('.leftthighcancel2');
const rightinnerthighcancel = document.querySelector('.rightinnerthighcancel');
const rightarmcancel2 = document.querySelector('.rightarmcancel2');
const finalhair = document.querySelector('.finalhair');
const finalhaircancel = document.querySelector('.finalhaircancel');
const eyelash = document.querySelector('.eyelash');
const rightunderarm = document.querySelector('.rightunderarm');


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
    container.style.transform = "translateZ(180px)";
//   heading.style.transform = "translateZ(250px)";
//   hairstyle.style.transform = "translateZ(20px)";
//   hair.style.transform = "translateZ(20px)";
//   hair1.style.transform = "translateZ(20px)";
//   head.style.transform = "translateZ(20px)";
//   head1.style.transform = "translateZ(20px)";
//   neck.style.transform = "translateZ(20px)";
//   leftshoulder.style.transform = "translateZ(20px)";
//   rightshoulder.style.transform = "translateZ(20px)";
//   middleboob.style.transform = "translateZ(20px)";
//   upper.style.transform = "translateZ(20px)";
//   upperright.style.transform = "translateZ(20px)";
//   middleupper.style.transform = "translateZ(20px)";
//   lefthip.style.transform = "translateZ(20px)";
//   leftthigh.style.transform = "translateZ(20px)";
//   leftthighBtm.style.transform = "translateZ(20px)";
//   leftcalve.style.transform = "translateZ(20px)";
//   leftboot.style.transform = "translateZ(20px)";
//   leftboottop.style.transform = "translateZ(20px)";
//   leftboottop1.style.transform = "translateZ(20px)";
//   leftstilleto.style.transform = "translateZ(20px)";
//   heelthing.style.transform = "translateZ(20px)";
//   heelthing1.style.transform = "translateZ(20px)";
//   cover.style.transform = "translateZ(20px)";
//   rightpelvis.style.transform = "translateZ(20px)";
//   rightthigh.style.transform = "translateZ(20px)";
//   rightknee.style.transform = "translateZ(20px)"; 
//   rightcalve.style.transform = "translateZ(20px)"; 
//   rightboot.style.transform = "translateZ(20px)"; 
//   serethe.style.transform = "translateZ(20px)"; 
//   rightheel.style.transform = "translateZ(20px)"; 
//   rightheelthing.style.transform = "translateZ(20px)"; 
//   rightbootop.style.transform = "translateZ(20px)";
//   rightbootop1.style.transform = "translateZ(20px)"; 
//   rightbootop2.style.transform = "translateZ(20px)";
//   rightbootop3.style.transform = "translateZ(20px)"; 
//   crotch.style.transform = "translateZ(20px)"; 
//   crotch1.style.transform = "translateZ(20px)"; 
//   leftupperarm.style.transform = "translateZ(20px)"; 
//   leftupperarm1.style.transform = "translateZ(20px)"; 
//   leftlowerarm.style.transform = "translateZ(20px)"; 
//   leftlowerarmside.style.transform = "translateZ(20px)"; 
//   lefthand.style.transform = "translateZ(20px)"; 
//   leftfinger.style.transform = "translateZ(20px)"; 
//   leftfinger1.style.transform = "translateZ(20px)"; 
//   leftfinger2.style.transform = "translateZ(20px)"; 
//   leftfinger3.style.transform = "translateZ(20px)"; 
//   leftfinger4.style.transform = "translateZ(20px)";
//   leftfinger5.style.transform = "translateZ(20px)"; 
//   rightupperarm.style.transform = "translateZ(20px)"; 
//   rightupperarm1.style.transform = "translateZ(20px)";
//   rightlowerarm.style.transform = "translateZ(20px)";
//   rightlowerarm1.style.transform = "translateZ(20px)"; 
//   righthand.style.transform = "translateZ(20px)";
//   rightfinger.style.transform = "translateZ(20px)"; 
//   rightfinger1.style.transform = "translateZ(20px)"; 
//   rightfinger2.style.transform = "translateZ(20px)";
//   rightupperarmcancel.style.transform = "translateZ(20px)"; 
//   rightlegcancel.style.transform = "translateZ(20px)"; 
//   rightarminnercancel.style.transform = "translateZ(20px)"; 
//   rightarminnercancel1.style.transform = "translateZ(20px)"; 
//   rightthighinnercancel.style.transform = "translateZ(20px)";
//   rightbootcancel.style.transform = "translateZ(20px)"; 
//   rightbootcancel1.style.transform = "translateZ(20px)"; 
//   rightbootcancel2.style.transform = "translateZ(20px)"; 
//   rightbootcancel3.style.transform = "translateZ(20px)";
//   rightbootcancel4.style.transform = "translateZ(20px)";
//   leftbootcancel.style.transform = "translateZ(20px)"; 
//   leftcalvecancel.style.transform = "translateZ(20px)"; 
//   leftthighcancel.style.transform = "translateZ(20px)";
//   leftthighcancel.style.transform = "translateZ(20px)";
//   leftthighcancel2.style.transform = "translateZ(20px)";
//   rightinnerthighcancel.style.transform = "translateZ(20px)"; 
//   rightarmcancel2 .style.transform = "translateZ(20px)";
//   finalhair.style.transform = "translateZ(20px)"; 
//   finalhaircancel.style.transform = "translateZ(20px)";
//   eyelash.style.transform = "translateZ(20px)"; 
//   rightunderarm.style.transform = "translateZ(20px)";
});


//animate out
container.addEventListener("mouseleave", (e) =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform= `rotateY(0deg) rotateX(0deg)`;
    //pop back
    container.style.transform = "translateZ(0px)";
    container.style.filter = 'none';
   
//     hairstyle.style.transform = "translateZ(0px)";
//     hair.style.transform = "translateZ(0px)";
//     hair1.style.transform = "translateZ(0px)";
//     head.style.transform = "translateZ(0px)";
//     head1.style.transform = "translateZ(0px)";
//     neck.style.transform = "translateZ(0px)";
//     leftshoulder.style.transform = "translateZ(0px)";
//     rightshoulder.style.transform = "translateZ(0px)";
//     middleboob.style.transform = "translateZ(0px)";
//     upper.style.transform = "translateZ(0px)";
//     upperright.style.transform = "translateZ(0px)";
//     middleupper.style.transform = "translateZ(0px)";
//     lefthip.style.transform = "translateZ(0px)";
//     leftthigh.style.transform = "translateZ(0px)";
//     leftthighBtm.style.transform = "translateZ(0px)";
//     leftcalve.style.transform = "translateZ(0px)";
//     leftboot.style.transform = "translateZ(0px)";
//     leftboottop.style.transform = "translateZ(0px)";
//     leftboottop1.style.transform = "translateZ(0px)";
//     leftstilleto.style.transform = "translateZ(0px)";
//     heelthing.style.transform = "translateZ(0px)";
//     heelthing1.style.transform = "translateZ(0px)";
//     cover.style.transform = "translateZ(0px)";
//     rightpelvis.style.transform = "translateZ(0px)";
//   rightthigh.style.transform = "translateZ(0px)";
//   rightknee.style.transform = "translateZ(0px)"; 
//   rightcalve.style.transform = "translateZ(0px)"; 
//   rightboot.style.transform = "translateZ(0px)"; 
//   serethe.style.transform = "translateZ(0px)"; 
//   rightheel.style.transform = "translateZ(0px)"; 
//   rightheelthing.style.transform = "translateZ(0px)"; 
//   rightbootop.style.transform = "translateZ(0px)";
//   rightbootop1.style.transform = "translateZ(0px)"; 
//   rightbootop2.style.transform = "translateZ(0px)";
//   rightbootop3.style.transform = "translateZ(0px)"; 
//   crotch.style.transform = "translateZ(0px)"; 
//   crotch1.style.transform = "translateZ(0px)"; 
//   leftupperarm.style.transform = "translateZ(0px)"; 
//   leftupperarm1.style.transform = "translateZ(0px)"; 
//   leftlowerarm.style.transform = "translateZ(0px)"; 
//   leftlowerarmside.style.transform = "translateZ(0px)"; 
//   lefthand.style.transform = "translateZ(0px)"; 
//   leftfinger.style.transform = "translateZ(0px)"; 
//   leftfinger1.style.transform = "translateZ(0px)"; 
//   leftfinger2.style.transform = "translateZ(0px)"; 
//   leftfinger3.style.transform = "translateZ(0px)"; 
//   leftfinger4.style.transform = "translateZ(0px)";
//   leftfinger5.style.transform = "translateZ(0px)"; 
//   rightupperarm.style.transform = "translateZ(0px)"; 
//   rightupperarm1.style.transform = "translateZ(0px)";
//   rightlowerarm.style.transform = "translateZ(0px)";
//   rightlowerarm1.style.transform = "translateZ(0px)"; 
//   righthand.style.transform = "translateZ(0px)";
//   rightfinger.style.transform = "translateZ(0px)"; 
//   rightfinger1.style.transform = "translateZ(0px)"; 
//   rightfinger2.style.transform = "translateZ(0px)";
//   rightupperarmcancel.style.transform = "translateZ(0px)"; 
//   rightlegcancel.style.transform = "translateZ(0px)"; 
//   rightarminnercancel.style.transform = "translateZ(0px)"; 
//   rightarminnercancel1.style.transform = "translateZ(0px)"; 
//   rightthighinnercancel.style.transform = "translateZ(0px)";
//   rightbootcancel.style.transform = "translateZ(0px)"; 
//   rightbootcancel1.style.transform = "translateZ(0px)"; 
//   rightbootcancel2.style.transform = "translateZ(0px)"; 
//   rightbootcancel3.style.transform = "translateZ(0px)";
//   rightbootcancel4.style.transform = "translateZ(0px)";
//   leftbootcancel.style.transform = "translateZ(0px)"; 
//   leftcalvecancel.style.transform = "translateZ(0px)"; 
//   leftthighcancel.style.transform = "translateZ(0px)";
//   leftthighcancel.style.transform = "translateZ(0px)";
//   leftthighcancel2.style.transform = "translateZ(0px)";
//   rightinnerthighcancel.style.transform = "translateZ(0px)"; 
//   rightarmcancel2 .style.transform = "translateZ(0px)";
//   finalhair.style.transform = "translateZ(0px)"; 
//   finalhaircancel.style.transform = "translateZ(0px)";
//   eyelash.style.transform = "translateZ(0px)"; 
//   rightunderarm.style.transform = "translateZ(0px)";
    
});