function Tile(pos, size, blocking, img, tele, itemId)
{
  this.pos = pos;
  this.size = size;
  this.isBlocking = blocking;
  this.img = img;
  this.image = new Image();
  if(this.img == 1)
    this.image.src = "./fence_d.png";
  if(this.img == 2)
    this.image.src = "./fence_r.png";
  if(this.img == 3)
    this.image.src = "./fence_t.png";
  if(this.img == 4)
    this.image.src = "./fence_l.png";
  if(this.img == 5)
    this.image.src = "./fence_br.png";
  if(this.img == 6)
    this.image.src = "./fence_tl.png";
  if(this.img == 7)
    this.image.src = "./fence_tr.png";
  if(this.img == 8)
    this.image.src = "./fence_bl.png";
  
  this.itemId = itemId;
  this.pickedUp = false;
    
  if(tele)
  {
    this.teleport = true;
    this.teleportMap = tele[0];
    this.teleportPos = tele[1];
  }
}

Tile.prototype.draw = function()
{
  if(this.itemId > -1)
  {
    if(!this.pickedUp)
      drawRect(this.pos, this.size, whiteFill);
    return;
  }
  if(this.img == 0)
  {
    var fill = this.isBlocking ? redFill : greenFill;
    drawRect(this.pos, this.size, fill);
  }
  else
  {  
    context.drawImage(this.image, this.pos.x, this.pos.y);
  }
};