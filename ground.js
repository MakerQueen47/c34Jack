class ground{
    constructor(width){

        this.options = {

            isStatic: true

        }

        this.body = Bodies.rectangle(300,580,width,80, this.options);
        this.width = width;
        World.add(world,this.body);


    }

    display(){

        var pos = this.body.position;

        push();
        fill("brown");
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rect(0,0,this.width,80);
        pop();

    }


}