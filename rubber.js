class Rubber{
    constructor(x,y,r){
       var options={
'restitution':0.8,
'friction':0.9,
'density':10,

       }
      this.r=r;
      this.x=x;
      this.y=y;
       this.body=Bodies.circle(this.x,this.y,this.r/2,options);

World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y)
    rotate(angle);
    fill("blue")
    
   ellipse(0,0,this.r,this.r);
pop();
}
}