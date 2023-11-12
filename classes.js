
  class Fighter {
    constructor({position, velocity, element, offset, imageUrl}) {
  
      this.position = position;
      this.velocity = velocity;
      this.element = element;
      this.width = 50;
      this.height = 100;
      this.lastKey;
      this.attackBox = {
          position: {
              x: this.position.x,
              y: this.position.y
          },
          offset,
          width: 125,
          height: 50,
      }
      this.isAttacking;
      this.animateAttack;
      this.health = 100;
      this.imageUrl = imageUrl;
    }
  
    draw() {
          // attack box
          if (this.isAttacking) {
              c.fillStyle = 'red'
              c.fillRect(
              this.attackBox.position.x, 
              this.attackBox.position.y, 
              this.attackBox.width, 
              this.attackBox.height
              );
          }    
    }
  
      update() {       
  
  
          //Create attack box
          this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
          this.attackBox.position.y = this.position.y;
  
          //Update positions of our entity
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
              
          //Ensures our player stays above ground level 
          if (this.position.y + this.height + this.velocity.y >= 150) {
              this.velocity.y = 0;
          } else {
              this.velocity.y += gravity;
          }

      }
  
      attack() {
          this.switchSprite("attack");
          this.isAttacking = true;
          this.animateAttack = true;
        
          setTimeout(() => {
              this.isAttacking = false;
              
          }, 150)

          setTimeout(() => {
            
            this.animateAttack = false;
        }, 300)          
      }
      



      switchSprite(sprite) {
        switch (sprite) {
          case 'idle':
            this.element.style.animation = `idleAnimation 1.0s steps(4) infinite`;
            this.element.style.backgroundImage = `url("${this.imageUrl}_idle.png")`;
            break;
          case 'dash':
            this.element.style.animation = `idleAnimation 1.0s steps(8) infinite`;            
            this.element.style.backgroundImage = `url("${this.imageUrl}_dash.png")`;
            break;
          case 'jump':
            this.element.style.animation = `idleAnimation 1.0s steps(2) infinite`;             
            this.element.style.backgroundImage = `url("${this.imageUrl}_jump.png")`;
            break;
          case 'attack':
            this.element.style.animation = `idleAnimation 1.2s steps(4) infinite`;             
            this.element.style.backgroundImage = `url("${this.imageUrl}_attack.png")`;
            break;
        }
      }
      
  }

  






