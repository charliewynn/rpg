//My collision only check for collision between two rectangles
  //it checks the each corner of rectangle A to see if it is within rectangle B
  //this is a problem if B is entirely inside A...
    //for instance if a bullet goes from not colliding to inside the rectangle of an enemy inbetween frames
	
  //I could remedy this by also checking each corner of B, if it is inside A
  //but as long as I put the smaller object first then it should always work
  //since I know before hand the size of my objects that are intersecting it's not a problem to just put the smaller one first, less computation that way

function areIntersecting(objA, objB)
{
	if(pointInsideObj(objA.pos.x, objA.pos.y, objB)) //top Left Corner
		return 1;
	if(pointInsideObj(objA.pos.x + objA.size.x, objA.pos.y, objB)) // top Right Corner
		return 2;
	if(pointInsideObj(objA.pos.x, objA.pos.y + objA.size.y, objB)) //bottom left corner
		return 3;
	if(pointInsideObj(objA.pos.x + objA.size.x, objA.pos.y + objA.size.y, objB)) // bottom right corner
		return 4;
  return 0;
};

//tells if a point x,y is inside the hitbox for an object obj
function pointInsideObj(x, y, obj)
{
	//compares a point with an objects rectangle, obj.x1 <= x <= obj.x2 and some thing with y's
	if(x >= obj.pos.x && x <= obj.pos.x + obj.size.x && y <= obj.pos.y + obj.size.y && y >= obj.pos.y)
		return true;
};