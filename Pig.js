class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.b=255
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed<2.2){
      super.display()
      
    }
    else{
      World.remove(world,this.body)
      this.b=this.b-5;
      push()
      tint(255,this.b)
   image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
  }

  }
};