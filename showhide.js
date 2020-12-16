let obj = document.getElementsByClassName("trip_hidden")[0];
let showBtn = document.getElementsByClassName("show_btn")[0];
let hideBtn = document.getElementsByClassName("hide_btn")[0];

function showMore() {
    obj.style.display = "flex";
    // obj.style.animation = "show 1s linear 0s";
    // obj.style.opacity = 1
    // obj.style.visibility = "visible";

    // obj.style.transition = "all 0.8s";
    showBtn.style.display = "none";
    // showBtn.style.transitionDuration = "0.8s";
    hideBtn.style.display = "block";
    // hideBtn.style.transitionDuration = "0.8s";
    // $('div').removeClass('trip_hidden');
    
}

function showLess() {
    obj.style.display = "none";
    // obj.style.opacity = 0;
    // obj.style.visibility = "hidden";

    // obj.style.transitionDuration = "0.8s";
    showBtn.style.display = "block";
    // showBtn.style.transitionDuration = "0.8s";
    hideBtn.style.display = "none"
    // hideBtn.style.transitionDuration = "0.8s";
    // $('div').addClass('trip_hidden');

}