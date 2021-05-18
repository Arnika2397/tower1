class Block{
    constructor(x, y, width, height) {
        var options = {
         restitution:0.4,
         friction:0, 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var poo= this.body.position;
        rectMode(CENTER);
        rect(poo.x,poo.y,this.width, this.height);
      }
}
