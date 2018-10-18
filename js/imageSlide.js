
var image = document.querySelector("img");

var rightButton = document.getElementById("right");
var leftButton = document.getElementById("left");

var imageId = 0;
$("#0").show('fade');
activeToggle(0);

function slideImageRight(){

    $("#"+imageId).hide('slide');
    console.log(imageId);
    if (imageId == $(".image-container img").length - 1){
        imageId = 0;
    }
    else{
        imageId = imageId + 1;
    }
    $("#"+imageId).show('slide');
    activeToggle(imageId);
    console.log(imageId);
}

function slideImageLeft(){

    $("#"+imageId).hide('slide');
    console.log(imageId);
    if (imageId == 0){
        imageId = $(".image-container img").length - 1;
    }
    else{
        imageId = imageId - 1;
    }
    $("#"+imageId).show('slide');
    activeToggle(imageId);
    console.log(imageId);
}

function activeToggle(x){
    for (var i = 0; i < $('.jump-image').length; i++) {
        $('#jump-' + i).removeClass('active');
    }
    $('#jump-' + x).addClass('active');

    $("#" + x).show('slide');
    imageId = x;
}
function showImageAt(x){

    if(x != imageId){
        $(".image-container img").hide('slide');

        activeToggle(x);

        console.log(x + " " + imageId);
    }
}

setInterval(slideImageRight, 6000);

rightButton.addEventListener('click', slideImageRight);
leftButton.addEventListener('click', slideImageLeft);
