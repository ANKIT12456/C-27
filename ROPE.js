class ROPE{

    constructor(bodyA,bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:5,
            stiffness:0.1
        }

        this.body=Constraint.create(options);
        World.add(world,this.body);

        
    }

    display(){
        var posa=this.body.bodyA.position;
        var posb=this.body.bodyB.position;

        strokeWeight(2);
        line (posa.x,posa.y,posb.x,posb.y);
    }
}