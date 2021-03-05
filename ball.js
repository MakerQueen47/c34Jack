class ball{

        constructor(x,y){

            this.options = {
    
                isStatic: false
    
            }
    
            this.body = Bodies.circle(x,y,50, this.options);
            World.add(world,this.body);
    
        }
    
        display(){
    
            var pos = this.body.position;
            var angle = this.body.angle;
    
            push();
            fill("black");
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            ellipse(0,0,100);
            pop();
    
    
        }



}