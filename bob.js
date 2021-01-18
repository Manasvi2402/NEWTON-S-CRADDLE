class bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.9,
            'friction':0.5,
            'density':1.2,
        }
        
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var radius = this.body.radius;

        push()
        translate(pos.x,pos.y);
        
        ellipseMode(RADIUS);

        fill("blue");
        circle(0,0,this.radius);
        pop();
    }
}