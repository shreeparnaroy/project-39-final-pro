class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.chain =Matter.Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB
    }
    fly(){

     this.chain.bodyA=null


    
    }
    attach(body){
        this.chain.bodyA=body
    }
    display(){
    if(this.chain.bodyA){                      

        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}   
}