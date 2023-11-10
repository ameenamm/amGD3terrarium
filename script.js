console.log("I'm working teehee");

var fruit = "apples are wonderful";
console.log(fruit);

var year = 2023;
console.log(year);


window.onload = function(){
    $(".title").css("color", "red");  


$(".green-box").click(changeColor);

$(".rock").click(openDialog);
$(".dialog").click(closeDialog);
$(".seed").hover(seedGrow, seedShrink);
$(".rock").draggable();x


// start counting from zero.. so keep going until < is false, 

for (var i=0; i < 100; i++) {
   
    var worm= $('<img class="worm" src="images/worm.gif">');


    var randTop= Math.random() * window.innerHeight;
    var randLeft= Math.random() * window.innerWidth;


    $(worm).css("top", randTop + "px");
    $(worm).css("left", randLeft + "px");

    $("body").append(worm);
}

setInterval(wormMove, 5000);

function wormMove(){
    $(".worm").each = function(){

        var randTop= Math.random() * window.innerHeight;
        var randLeft= Math.random() * window.innerWidth;
     
        $(this).css("top", randTop + "px");
        $(this).css("left", randLeft + "px");
    
    }
}
function changeColor(){
    $(".green-box").css("height", "500px");
    $(".green-box").css("width", "500px");
    $(".green-box").css("background", "purple");
}

function openDialog(){
$(".dialog").css("display", "block");

}

function closeDialog(){
    $(".dialog").css("display", "none");
}

function seedGrow(){
    $(".seed").attr("src", "images/seedling.png");
    $(".seed").css("width", "150px");
    
}

function seedShrink(){
    $(".seed").attr("src", "images/seed.png");
    $(".seed").css("width", "150px");
}


}