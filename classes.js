class Sprite {
    constructor({position,  element, imageSrc}) {
  
      this.position = position;
      this.element = element;
      this.width = 50;
      this.height = 100;
      this.image.src = imageSrc;
    
    }
  
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
  
      update() {       
        this.draw();
      }
      
  }


  class Fighter {
    constructor({position, velocity,  element, offset, imageSrc}) {
  
      this.position = position;
      this.velocity = velocity;
      this.element = element;
      this.width = 50;
      this.height = 100;
      this.imageSrc = imageSrc;
      this.lastKey;
      this.attackBox = {
          position: {
              x: this.position.x,
              y: this.position.y
          },
          offset,
          width: 100,
          height: 50,
      }
      this.isAttacking;
      this.health = 100;
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
          //Update positions of our entity
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
              
          if (this.position.y + this.height + this.velocity.y >= 150) {
              this.velocity.y = 0;
          } else {
              this.velocity.y += gravity;
          }
      }
  
      attack() {
          this.isAttacking = true;
  
          setTimeout(() => {
              this.isAttacking = false;
          }, 100)
      }    
  }