class Particle {
    constructor(param = {}) {
        this.position = new Vector(param.x, param.y);
        // скорости
        this.speed = new Vector(0, 0);
        this.acceleration = new Vector(0, 0);
        // массив всех сил
        this.forces = [];

        this.drawSpeed = param.drawSpeed ?? true;
        this.drawForce = param.drawSpeed ?? true;

        this.mass = param.mass ?? 1;
    }
    // сумма всех векторов
    get force () {
        // создаем нулевой вектор и добавляем все вектора, которые есть в массиве forces
        return Vector.get().add(...this.forces);
    }

    // canvas как экземпляр класса
    draw (canvas){
        canvas.drawCircle({
            x: this.position.x,
            y: this.position.y,
            r: (this.mass / (Math.PI * P)) ** 0.5,
            fillStyle: "black",
        });

        if (this.drawSpeed) {
            canvas.drawLine({
                x1: this.position.x,
                y1: this.position.y,
                x2: this.position.x + this.speed.x,
                y2: this.position.y + this.speed.y,
                lineWidht: 1,
                strokeStyle: "blue",
            });

        }

        if (this.drawForce) {
            const force = this.force;

            canvas.drawLine({
                x1: this.position.x,
                y1: this.position.y,
                x2: this.position.x + force.x,
                y2: this.position.y + force.y,
                lineWidht: 1,
                strokeStyle: "red",
            });

        }
    }
}