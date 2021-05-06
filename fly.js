class Fly{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness:1.2,
            length: 150
        }
        this.pointB = PointB;
        this.flying = Constraint.create(options);
        World.add(world, this.flying);
    }

    fly(){
        this.flying.bodyA = null;
    }

    display(){
 
        if(this.flying.bodyA){
            var pointA = this.flying.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(2);
            stroke(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
        
    }
    
}