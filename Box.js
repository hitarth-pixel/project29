class Box {
  constructor(x, y, width, height,color) {
    var options = {
        
        density:1.5,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color=color;
    
    World.add(world, this.body);
  }
  display(){
    var p=this.body.position ;
    
    rectMode(CENTER);
    fill (this.color)
    rect(p.x,p.y,  this.width, this.height);
    
  }

};
