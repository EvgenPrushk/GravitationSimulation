const canvas = new Canvas();

const particles = [];

for (let i = 0; i < 10; i++) {
    particles.push(new Particle({
        x: 0,
        y: 0,
    }))
    
}
canvas.add(
    new Particle({
        x: 100,
        y: 100,
    }));
canvas.draw();
document.body.appendChild(canvas.view);