function Inventory()
{	
  this.items = [];
}

Inventory.prototype.add = function(item)
{
  this.items.push(item);
};

Inventory.prototype.draw = function(pos, size)
{
  var startPt = new Vector(10, height+15);
  
  for(i in this.items)
  {
    var item = this.items[i];
    var pos = new Vector((item.size.x + 5) * parseInt(i), 5);
    var pos1 = startPt.add(pos);
    item.draw(pos1);
  }
};