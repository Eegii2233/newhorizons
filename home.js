/*----------------------------SWIPER JS-----------------------------*/

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*----------------------------SWIPER JS END-----------------------------*/

/*----------------------------HOME JS-----------------------------*/
var getServiceSliderImgs = document.getElementById("getPictures");
var serviceSliderImgs = getServiceSliderImgs.getElementsByClassName("get-photos");
var miniImgsContainer = document.getElementById("miniImgContainer");
var numberOfImgs = serviceSliderImgs.length;
var miniImgs = "";

for (let i = 1; i <= numberOfImgs - 2; i++) {
    var miniImgSource = serviceSliderImgs[i].getAttribute("src");
    miniImgs += "<img class="+'"sliderImg"'+" src="+'"'+ miniImgSource +'"'+">";

}
miniImgsContainer.innerHTML = miniImgs;

function clickEffect(e) {
    e.classList.toggle("clickedEffect");
}


var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 125}}); //Scroll magic library


var listOfFloor = document.getElementById("floorContainer").getElementsByTagName("li");
var unvisibleList = document.getElementById("unvisibleList");
var lengthOfFloorList = listOfFloor.length - 1; // Because selecting elements starts from index zero
var planPhotos = document.getElementById("planPhotosContainer").getElementsByTagName("img");
var lengthOfPlanPhotos = planPhotos.length - 1;

for (let i = 0; i <= lengthOfPlanPhotos; i++) {

    planPhotos[i].setAttribute("id", "planPhoto"+i+"");

}

for (let i = 0; i <= lengthOfFloorList; i++) {

    listOfFloor[i].setAttribute("id", "floorList"+i+"");

    /* Changes variable declaration unique,
    because we are using appendChild method */
    var noMeanThing;
    var divElements = noMeanThing + i; 
    
    divElements  = document.createElement("div");
    divElements.setAttribute("id", "selectFloorList"+i+"");
    // adding href attribute to li element for Onclick to scroll animation 
    listOfFloor[i].onclick = function clickToActive() {
        var getListOfUnvisible = document.getElementById("selectFloorList"+i+"");
        getListOfUnvisible.scrollIntoView(false);
        document.href = getListOfUnvisible;
        var html = document.documentElement;
        // zaasan id ruu scrolldoj bhad davhar scrolldohguin tuld setTimeout ashiglav
        setTimeout(function(){html.scrollTop += window.innerHeight / 2;}, 350);   
    }
    // listOfFloor[i].getElementsByTagName("a")[0].setAttribute("href", "#selectFloorList"+i+"");
    unvisibleList.appendChild(divElements);

/*----------------------------SCROLLMAGIC LIBRARY------LOOPING THROUGH LI AND ANCHOR TO GIVE IDS-----------------------*/

    new ScrollMagic.Scene({triggerElement: "#selectFloorList"+i+""})
                .setClassToggle("#floorList"+i+"", "active") // add class toggle
                .addTo(controller);
        

    new ScrollMagic.Scene({triggerElement: "#selectFloorList"+i+""})
                .setClassToggle("#planPhoto"+i+"", "showPlanImage")
                .addTo(controller);

 /*----------------------------SCROLLMAGIC LIBRARY END-----------------------------*/
}

/*----------------------------HOME JS END-----------------------------*/


