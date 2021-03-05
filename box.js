class box{

    constructor(x,y){

        this.options = {

            isStatic: false

        }

        this.body = Bodies.rectangle(x,y,50,50, this.options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill("green");
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0,0,50,50);
        pop();


    }


}