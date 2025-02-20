class Bubble {
    constructor(name, family, size) {
      this.name = name;
      this.family = family;
      this.size = size;
      this.x = random(width);
      this.y = random(height);
      this.vx = random(-1, 1);
      this.vy = random(-1, 1);
  
      this.element = document.createElement('div');
      this.element.className = 'bubble';
      this.element.style.width = this.size + 'px';
      this.element.style.height = this.size + 'px';
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
  
      let text = document.createElement('div');
      text.className = 'bubble-text';
      text.innerHTML = `<strong>${this.name}</strong><br>${this.family}`;
      this.element.appendChild(text);
    }
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.x < 0 || this.x > width - this.size) {
        this.vx *= -1;
      }
      if (this.y < 0 || this.y > height - this.size) {
        this.vy *= -1;
      }
  
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
    }
  }