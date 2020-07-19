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
var sda = serviceSliderImgs
for (let i = 1; i <= numberOfImgs - 2; i++) {
    console.log(sda[i])
    var miniImgSource = serviceSliderImgs[i].getAttribute("src");
    miniImgs += "<img class="+'"sliderImg"'+" src="+'"'+ miniImgSource +'"'+">";

}


console.log(miniImgs);
miniImgsContainer.innerHTML = miniImgs;
/*----------------------------HOME JS END-----------------------------*/
