class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static get(x = 0, y = 0) {
        return new Vector(x, y);
    }

    static getDiff (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    static getNegative(vector) {
        return new Vector(-vector.x, -vector.y);
    }

    // геттер готорый возвращает длину вектора
    get length () {
        return (this.x ** 2 + this.y ** 2) ** 0.5;
    }

   add (...vectors){
       for (const vector of vectors) {
           this.x += vector.x;
           this.y += vector.y;
       }
       // возврат экземляра класса
       return this;
   }

   mult(n) {
       this.x *= n;
       this.y *= n;

   }

   getNegative () {
       return Vector.getNegative(this);
   }
}