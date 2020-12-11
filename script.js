const G = 0.05;
// плотность
const P = 0.1;
// условное растояние при котором они сталкиваются
const COLLAPSE_LENGTH = 5;

const canvas = new Canvas();

const particles = [];

for (let i = 0; i < 100; i++) {
    particles.push(new Particle({
        x: getRandomBetween(0, canvas.view.width),
        y: getRandomBetween(0, canvas.view.height),
        mass: getRandomBetween(1, 10),
    }))

}

canvas.add(...particles);

canvas.draw();

document.body.appendChild(canvas.view);

requestAnimationFrame(tick);

function tick() {
    // вызывает функцию tick перед следующим обнавлением экрана
    requestAnimationFrame(tick);
    for (const particle of particles) {
        particle.forces = [];
    }

    // алгоритм перебора пар в массиве
    for (let i = 0; i < particles.length - 1; i++) {
        const ctrlParticle = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
            const currentParticle = particles[j];

            // возвращает вектор разницу между ctrlParticle.position и currentParticle.position
            const force = Vector.getDiff(ctrlParticle.position, currentParticle.position);

            const forceNumber = (G * ctrlParticle.mass * currentParticle.mass) / Math.max(force.length ** 2, 0.00001);

            force.mult(forceNumber);

            ctrlParticle.forces.push(force.getNegative());
            currentParticle.forces.push(force);
        }


    }

    for (const particle of particles) {
        const force = particle.force;

        particle.acceleration = new Vector(
            force.x / particle.mass,
            force.y / particle.mass,
        );

    }
    for (const particle of particles) {
        particle.speed.add(particle.acceleration);
        particle.position.add(particle.speed);
    }

    const newParticle = [];

    for (let i = 0; i < particles.length - 1; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];

            const diff = Vector.getDiff(a.position, b.position)

            if (diff.length < COLLAPSE_LENGTH) {
                const mass = a.mass + b.mass;
                const newParticle = new Particle({
                    mass
                });
                newParticle.position.add(a.position, b.position).mult(0.5);
            }
        }
    }

    canvas.clear();
    canvas.draw();

}