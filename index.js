const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

//Global constant
const gravity = 0.2;

//Create sprite for player and enemy entities
class Entity {

    //Pass in position and velocity for constructor
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;
        }
    }
}

//Create player
const player = new Entity({
    position: {
        x: 0,
        y: 0    
    },
    velocity: {
        x: 0,
        y: 0
    }
})

//Create player
const enemy = new Entity({
    position: {
        x: 400,
        y: 0    
    },
    velocity: {
        x: 0,
        y: 0
    }
})


console.log(player);

function animate() {
    window.requestAnimationFrame(animate);

    //Clear canvas
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    //Update our entities
    player.update();
    enemy.update();
}

animate();




