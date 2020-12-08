class Particle {
    constructor(params = {}) {
        this.position = new Vector(params.x, params.y);
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);

        this.mass = 1;
    }
    // canvas как экземпляр класса
    draw (canvas){
        canvas.drawCircle({
            x: this.position.x,
            y: this.position.y,
            r: 5,
            fillStyle: "black",
        })
    }
}