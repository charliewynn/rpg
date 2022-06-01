function Map()
{
  this.tiles = [];
  this.level = 1;
}

Map.prototype.draw = function()
{
  for(i in this.tiles)
    this.tiles[i].draw();
};

function loadMap(id)
{
  map.tiles = [];
  
  if(id == 1)
  {
    var map1 = new Map();    
    
    map1.tiles.push(new Tile(new Vector(0,0), new Vector(30,30), true, 5, undefined, -1));
    
    for(var i=30; i<300; i+=30)
      map1.tiles.push(new Tile(new Vector(i,0), new Vector(30,30), true, 1, undefined, -1));

    map1.tiles.push(new Tile(new Vector(0,150), new Vector(30,30), true, 7, undefined, -1));

    for(var i=30; i<150; i+=30)
    map1.tiles.push(new Tile(new Vector(0,i), new Vector(30,30), true, 2, undefined, -1));

    map1.tiles.push(new Tile(new Vector(30,150), new Vector(30,30), true, 3, undefined, -1));
    map1.tiles.push(new Tile(new Vector(60,150), new Vector(30,30), true, 3, undefined, -1));
    map1.tiles.push(new Tile(new Vector(90,150), new Vector(30,30), true, 3, undefined, -1));
    map1.tiles.push(new Tile(new Vector(120,150), new Vector(30,30), false, 0, [2, new Vector(520,545)], -1));
    map1.tiles.push(new Tile(new Vector(150,150), new Vector(30,30), false, 0, [2, new Vector(600,545)], -1));
    map1.tiles.push(new Tile(new Vector(180,150), new Vector(30,30), false, 0, [2, new Vector(650,545)], -1));
    
    map1.tiles.push(new Tile(new Vector(210,150), new Vector(30,30), true, 3, undefined, -1));
    map1.tiles.push(new Tile(new Vector(240,150), new Vector(30,30), true, 3, undefined, -1));
    map1.tiles.push(new Tile(new Vector(270,150), new Vector(30,30), true, 3, undefined, -1));


    map1.tiles.push(new Tile(new Vector(300,150), new Vector(30,30), true, 6, undefined, -1));
    map1.tiles.push(new Tile(new Vector(300,120), new Vector(30,30), true, 4, undefined, -1));
    map1.tiles.push(new Tile(new Vector(300,90), new Vector(30,30), true, 4, undefined, -1));
    map1.tiles.push(new Tile(new Vector(300,60), new Vector(30,30), true, 4, undefined, -1));
    map1.tiles.push(new Tile(new Vector(300,30), new Vector(30,30), true, 4, undefined, -1));
    map1.tiles.push(new Tile(new Vector(300,0), new Vector(30,30), true, 8, undefined, -1));
    
    
    map1.tiles.push(new Tile(new Vector(300,300), new Vector(30,30), false, 0, [1, new Vector(650,545)], -1));
    map1.tiles.push(new Tile(new Vector(300,350), new Vector(30,30), false, 0, [1, new Vector(650,45)], -1));
    map1.tiles.push(new Tile(new Vector(690,545), new Vector(30,30), false, 0, [1, new Vector(350,300)], -1));
    
    map1.tiles.push(new Tile(new Vector(650,45), new Vector(30,30), false, 0, [1, new Vector(100,545)], -1));
    
    map1.tiles.push(new Tile(new Vector(650,85), new Vector(30,30), false, 0, undefined, 4));
  }
  if(id == 2)
  {
    var map1 = new Map();
    map1.tiles.push(new Tile(new Vector(0,0), new Vector(30,30), true, 5, undefined, -1));
    
    for(var i=30; i<1170; i+=30)
      map1.tiles.push(new Tile(new Vector(i,0), new Vector(30,30), true, 1, undefined, -1));

    map1.tiles.push(new Tile(new Vector(1170,0), new Vector(30,30), true, 8, undefined, -1));

    for(var i=30; i<570; i+=30)
    map1.tiles.push(new Tile(new Vector(1170,i), new Vector(30,30), true, 4, undefined, -1));
    
    map1.tiles.push(new Tile(new Vector(1170,570), new Vector(30,30), true, 6, undefined, -1));
    
    for(var i=30; i<510; i+=30)
    map1.tiles.push(new Tile(new Vector(i,570), new Vector(30,30), true, 3, undefined, -1));
    
    map1.tiles.push(new Tile(new Vector(510,570), new Vector(30,30), false, 0, [1, new Vector(130,185)], -1));
    map1.tiles.push(new Tile(new Vector(540,570), new Vector(30,30), false, 0, [1, new Vector(140,185)], -1));
    map1.tiles.push(new Tile(new Vector(570,570), new Vector(30,30), false, 0, [1, new Vector(150,185)], -1));
    map1.tiles.push(new Tile(new Vector(600,570), new Vector(30,30), false, 0, [1, new Vector(160,185)], -1));
    map1.tiles.push(new Tile(new Vector(630,570), new Vector(30,30), false, 0, [1, new Vector(170,185)], -1));
    map1.tiles.push(new Tile(new Vector(660,570), new Vector(30,30), false, 0, [1, new Vector(180,185)], -1));
    
    for(var i=690; i<1170; i+=30)
    map1.tiles.push(new Tile(new Vector(i,570), new Vector(30,30), true, 3, undefined, -1));
    map1.tiles.push(new Tile(new Vector(0,570), new Vector(30,30), true, 7, undefined, -1));
    
    for(var i=30; i<570; i+=30)
    map1.tiles.push(new Tile(new Vector(0,i), new Vector(30,30), true, 2, undefined, -1));
    
  }
  
  map = map1;
  map.level = id;
  
  
  for(i in map.tiles)
    for(j in player.inventory.items)
      if(map.tiles[i].itemId == player.inventory.items[j].id)
        map.tiles[i].pickedUp = true;
}