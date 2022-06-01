//Colors
var redFill = "rgba(255,0,0,1)";
var greenFill = "rgba(34,139,34,1)";
var blueFill = "rgba(0,0,255,1)";
var blackFill = "rgba(0,0,0,1)";
var whiteFill = "rgba(255,255,255,1)";

//draws text to screen, font is optional
function drawText(pos, text, color, font)
{
	context.fillStyle = color;
	context.font = typeof font == 'undefined' ? 'italic bold 15px sans-serif' : font;
	context.textBaseline = 'bottom';
	context.fillText(text, pos.x, pos.y);
}

function strokeText(x, y, text, color, font)
{
	context.strokeStyle = color;
	context.font = typeof font == 'undefined' ? 'bold 15px sans-serif' : font;
	context.lineWidth = 9;
	context.textBaseline = 'bottom';

	context.fillStyle = whiteFill;
	context.lineWidth = 3;
	context.fillText(text, x, y);
	
	context.strokeText(text, x, y);
	
}

function redraw()
{

  drawRect(new Vector(0,0), new Vector(width, height), blackFill);
  
  drawRect(new Vector(0, height+5), new Vector(width, 200), blackFill);
  
  
	map.draw();
  player.draw();
  
  player.inventory.draw();
}

//generic draw rectangle function

function drawRect(pos,size,color)
{
	context.beginPath();
	context.fillStyle = color;
	context.fillRect(pos.x, pos.y, size.x, size.y);
	context.closePath();
	context.fill();
}

//only used for boss health outline
function drawBox(x1,y1,x2,y2,color)
{
	context.beginPath();
	context.fillStyle = color;
	context.strokeRect(x1,y1,x2,y2);
	context.closePath();
	context.fill();
}

//only used for drawing the weapon type
function drawCircle(x,y,radius,color)
{
	context.beginPath();
	context.fillStyle = color;
	context.arc(x, y, radius, 0, Math.PI*2,false);
	context.closePath();	
	context.fill();
}