function Item(id)
{
  this.size = new Vector(20, 20);
  this.id = id;
}

Item.prototype.draw = function(pos)
{
  drawRect(pos, this.size, redFill);
  drawText(pos.add(this.size).add(new Vector(-this.size.x, 0)), this.id, whiteFill);
};

