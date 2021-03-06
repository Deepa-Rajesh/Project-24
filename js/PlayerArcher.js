class PlayerArcher{
    constructor(x, y, width, height) {
        var options = {
          isStatic: true
        };
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        this.image = loadImage("assets/playerArcher.png");
    
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, -PI/2);
    }
    display() {
        /*if(move === "up" && playerArcher.body.angle<1.77){
            angleValue = 0.1
        }else{
            angleValue = -0.1
        }

        if(move === "DOWN" && playerArcher.body.angle > 1.47){
            angleValue = -0.1
        }else{
            angleValue = 0.1
        }
*/

if(keyIsDown(UP_ARROW)&& angle < 1.77){
    this.angle += 0.1;
    Matter.Body.setAngle(this.body, angle);
} 

if(keyIsDown(DOWN_ARROW)&& angle > 1.47){
    this.angle -= 0.1;
    Matter.Body.setAngle(this.body, angle);
}

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        Matter.Body.setAngle(this.body,-PI/2)
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}