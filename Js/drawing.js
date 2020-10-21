let slideList = document.querySelector('carousel-slide');
let slideContent = document.getElementsByClassName("slides");
let nButton = document.getElementById("next");
let pButton = document.getElementById("prev");
let slideLen = slideContent.length;
let curIndex = 0;

nButton.addEventListener('click', function() {
    slideContent[curIndex%slideLen].classList.remove("showing");
    curIndex++;
    slideContent[curIndex%slideLen].classList.add("showing");
});
pButton.addEventListener('click', function() {
    slideContent[curIndex%slideLen].classList.remove("showing");
    curIndex--;
    if(curIndex<0){
        curIndex=slideLen;
    }else{
        slideContent[curIndex%slideLen].classList.add("showing");
    }
});