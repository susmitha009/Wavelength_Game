var circle = new Audio("music/ES_Whoosh Metallic 5 - SFX Producer.mp3");
var card = new Audio("music/mixkit-short-transition-sweep-175.wav");
var inside = new Audio("music/ES_Hit Reverse Swipe - SFX Producer.mp3");
var click = new Audio("music/ES_Baseball Bat Hit Ball 1 - SFX Producer.mp3");
var to_peek = new Audio("music/13290__schademans__pipe9.wav");
function heightResize(){
  if(window.innerHeight<500){
    window.innerHeight;
    var e=.001351351*window.innerHeight;
    document.getElementById("mainWheel").style.transform="scale("+e+")"
  }
  500<window.innerHeight&&(document.getElementById("size").style.transform="scale(1)")
}

function spinWheel(){
  var e=Math.floor(-179*Math.random())+90;
  document.getElementById("wheelMarker").style.transform="rotate("+e+"deg)"
  inside.play();
}

function peek(){
  document.getElementById("semicircle_view").classList.add("wheelPeek")
  to_peek.play();
}

function hide(){
  document.getElementById("semicircle_view").classList.remove("wheelPeek")
}

function newCard(){
  var e=Math.floor(-250*Math.random())+251,t=document.getElementById("semicircle_view");
  document.getElementById("leftCard").textContent=cards[e][0],document.getElementById("rightCard").textContent=cards[e][1],t.classList.contains("revealed")&&(t.classList.add("closed"),t.classList.remove("revealed"))
  card.play();
}

window.addEventListener("resize",heightResize);

var degrees=0;

function incrementUp1(){
  degrees+=1,document.getElementById("pointer").style.transform="rotate("+degrees+"deg)"
  click.play();
}

function incrementDown1(){
  --degrees,document.getElementById("pointer").style.transform="rotate("+degrees+"deg)"
  click.play();
}

function incrementUp10(){
  degrees+=10,document.getElementById("pointer").style.transform="rotate("+degrees+"deg)"
  click.play();
}

function incrementDown10(){
  degrees-=10,document.getElementById("pointer").style.transform="rotate("+degrees+"deg)"
  click.play();
}

function centerDial(){
  degrees=0,document.getElementById("pointer").style.transform="rotate(0deg)"
  click.play();
}

function reveal(){
  var e=document.getElementById("semicircle_view");
  e.classList.contains("closed")&&(e.classList.add("revealed"),e.classList.remove("closed"))
  circle.play();
}

function incrementScoreLeftUp(){
  document.getElementById("leftScore").textContent++
  click.play();
}

function incrementScoreLeftDown(){
  document.getElementById("leftScore").textContent--
  click.play();
}

function incrementScoreRightUp(){
  document.getElementById("rightScore").textContent++
  click.play();
}

function incrementScoreRightDown(){
  document.getElementById("rightScore").textContent--
  click.play();
}
