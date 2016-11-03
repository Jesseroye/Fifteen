var empty=15;
var piecelist=[];
var size=4;
window.onload = function(){
	start();
	var randomup=$("shufflebutton");
	randomup.onclick=randomtile;
};

function start(){
empty=15;
piecelist=[];
size=4;
  var stage = $("puzzlearea");
  var stage_elements = stage.getElementsByTagName("div");
for (var i=0;i<15;i++){
	stage_elements[i].className = "puzzlepiece";
	position(stage_elements[i],i);
	imageposition(stage_elements[i],i);
	setid(stage_elements[i],i);
	piecelist[i] = i;
	stage_elements[i].onmouseover= hover;
	stage_elements[i].onmouseout=notselected;
	stage_elements[i].addEventListener('click',Shift);
    }
	piecelist[15]=15;
	var btn = document.createElement("BUTTON"); 
    var t = document.createTextNode("Finished");
    btn.appendChild(t);
	var fin = document.getElementById("controls").appendChild(btn);
	fin.addEventListener('click',Finished);
}
function setid(element,x){
  element.id = x;
}
function getid(element){
  return parseInt(element.id);
}
function Shiftable(x){
    if (x-1==empty){
	    return x-1;
	}
	else
	{
		 if (x+1==empty){   
		    return x+1;
		 }
		 else{
			if (x+4==empty){
				return x+4;
			}
			else{
				if (x-4==empty){
					return x-4;
				}
			}
			 
		 }
	}
  return false;
}


function Shift(){
  var m = piecelist[getid(this)];
  var nextmove= Shiftable(m);
  if (nextmove){
      empty = m;
      piecelist[getid(this)] = nextmove;
      position(this,nextmove);
  }
}

function hover(){
   if (Shiftable(piecelist[getid(this)])){
      this.addClassName("movablepiece");  
   }
}
function notselected(){
    this.removeClassName("movablepiece");
}

function position(element,x){
  var i=Math.floor(x/4),a=Math.floor(x%4);
  var x=i*(100),y=a*(100);
  element.style.top=x+"px";
  element.style.left=y+"px";

}
function imageposition(element,x){
  var i=Math.floor(x/4),a=Math.floor(x%4);
  var x=-i*(100)+"px",y=-a*(100)+"px";
  element.style.backgroundPosition=y+" "+x;
}
function randomtile(){
	var stage = $("puzzlearea");
    var stage_elements = stage.getElementsByTagName("div");
	for (var i=0;i<130;i++){
		for( var o=0;i<stage_elements.length;o++){
			var piecenum=piecelist[getid(stage_elements[o])];
			var piece = Shiftable(piecenum);
			if (piece && empty!=1){
				position(stage_elements[o],piece);
				empty= piecelist[getid(stage_elements[o])];
				piecelist[getid(stage_elements[o])]= piece;
			}
		}
		
		
		
	}

	
}

function Finished(){
	document.body.style.background = "#f3f3f3 url('http://previews.123rf.com/images/lightwise/lightwise1201/lightwise120100160/12082766-Winning-success-gold-cup-award-in-a-dynamic-forced-perspective-camera-angle-and-a-golden-star-burst--Stock-Photo.jpg') no-repeat";
	
}
