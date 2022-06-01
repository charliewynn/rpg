function keydown(e)
{	
  if(e.keyCode ==  37)
		leftArrowPressed = true;
	if(e.keyCode ==  38)
		upArrowPressed = true;
	if(e.keyCode ==  39)
		rightArrowPressed = true;
	if(e.keyCode ==  40)
		downArrowPressed = true;
}

function keyup(e)
{
	if(e.keyCode ==  37)
		leftArrowPressed = false;
	if(e.keyCode ==  38)
		upArrowPressed = false;
	if(e.keyCode ==  39)
		rightArrowPressed = false;
	if(e.keyCode ==  40)
		downArrowPressed = false;
}



function didload()
{			
	canvas = document.getElementById("theCanvas");
	context = canvas.getContext("2d");
	document.onkeydown = keydown;
	document.onkeyup = keyup;
  
  player = new Player(new Vector(100,200));
  map = new Map();
  loadMap(1);
  
  
	updateGame();
};

//this is called for every frame to update the location of the objects in the game
function updateGame()
{
	player.update();
  
  
  redraw();
  
	setTimeout( function(){	updateGame(); }, 1);
};