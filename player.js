function Player(pos)
{
  this.pos = pos;
  this.size = new Vector(20, 20);
  this.moveAmt = 2;
  this.isAnimating = false;
  this.moveTo = new Vector(0,0);
  
  this.inventory = new Inventory();
  
  this.inventory.add(new Item(1));
}

Player.prototype.update = function()
{
  if(this.isAnimating)
  {
    if(this.pos.dist(this.moveTo) <= this.moveAmt)
    {
      this.pos = this.moveTo;
      this.isAnimating = false;
      return;
    }
    
    var dir = this.moveTo.vecTo(this.pos);
    var unitDir = dir.scale(1/dir.dist(new Vector(0,0)));
    var move = unitDir.scale(this.moveAmt);
    var newPos = this.pos.add(move);
    this.pos = newPos;
    //this.pos = scale(1/(this.pos.dist(this.moveTo))).scale(this.moveAmt);
      
  }
  else
  {
    var xAmt = 0;
    var yAmt = 0;
      
    if(leftArrowPressed) xAmt -= this.moveAmt;
    if(rightArrowPressed) xAmt += this.moveAmt;
    if(upArrowPressed) yAmt -= this.moveAmt;
    if(downArrowPressed) yAmt += this.moveAmt;
    
    if(xAmt != 0 && yAmt != 0) { xAmt*=.7; yAmt*=.7 }
    
    this.move(new Vector(xAmt, 0));
    this.move(new Vector(0, yAmt));
  }
};

Player.prototype.move = function(dir)
{
  var nextPos = this.pos.add(dir);
  var futurePlayer = {pos:nextPos, size:player.size};
  
  if(futurePlayer.pos.x < 0 || futurePlayer.pos.x + futurePlayer.size.x > width || futurePlayer.pos.y < 0 || futurePlayer.pos.y + futurePlayer.size.y > height)
    return;
  for(t in map.tiles)
  {
    var tile = map.tiles[t];
    var ic = areIntersecting(futurePlayer, tile);
    
    if(ic)
    {
      if(tile.isBlocking)
      {
        if((ic == 1 && (rightArrowPressed || downArrowPressed) && !(leftArrowPressed || upArrowPressed)) ||
          (ic == 2 && (leftArrowPressed || downArrowPressed) && !(rightArrowPressed || upArrowPressed)) ||
          (ic == 3 && (rightArrowPressed || upArrowPressed) && !(leftArrowPressed || downArrowPressed)) ||
          (ic == 4 && (leftArrowPressed || upArrowPressed)  && !(rightArrowPressed || downArrowPressed)))
          {
          }
        else
        {
          return;
        }
      }
      else if(tile.teleport)
      {
        if(tile.teleportMap == map.level)
        {
          this.isAnimating = true;
          this.moveTo = tile.teleportPos;
        }
        else
        {
          loadMap(tile.teleportMap);
          player.pos = tile.teleportPos;
        }
        return;
      }
      else if(tile.itemId != -1 && !tile.pickedUp)
      {
        this.inventory.add(new Item(tile.itemId));
        tile.pickedUp = true;
      }
      
    }
    
  }
  
  this.pos = nextPos;
  
}

Player.prototype.draw = function()
{
  drawRect(this.pos, this.size, blueFill);
};