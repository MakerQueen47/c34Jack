class rope{

    constructor(bodyApassed, pointBpassed){

        this.options = {

            bodyA: bodyApassed,
            pointB:pointBpassed,
            stiffness: 0.2,
            length: 350

        }
        this.rope = Constraint.create(this.options);
        World.add(world, this.rope);

    }

    display(){

        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;

        push();
        strokeWeight(10);
        line(posA.x, posA.y, posB.x, posB.y);
        pop();



    }


}