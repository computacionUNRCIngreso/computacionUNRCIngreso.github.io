//==============================================================================
// Animations
//==============================================================================
var scene = [];

function animate() {
    var ctx = getCanvasContext(),
        lastTime = 0, // Last seen timestamp.
        drawFrame = function (timestamp) {
            // Clear canvas. An efficient implementation
            // will only clear as much as needed.
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Call update on all scene elements...
            scene.forEach(function (elem) {
                elem.update(timestamp - lastTime);
                elem.draw(ctx);
            });
            
            // Request to be called again.
            lastTime = timestamp;
            window.requestAnimationFrame(drawFrame);
        };
    
    // Kick off animation loop.
    window.requestAnimationFrame(drawFrame);
}

// Animated circle constructor.
function animatedCircle(cx, cy, radius, color, velX, velY, dirX, dirY, walls) {
   return {
        x: cx, 
        y: cy, 
        r: radius || 25, 
        color: color || 'black', 
        vx: velX || 0.1, 
        vy: velY || 0.1, 
        dx: dirX || 1, 
        dy: dirY || 1, 
        walls: walls || true,
        update: function (deltaT) {
            // Update location based on elapsed time.
            this.x += this.vx * deltaT * this.dx;
            this.y += this.vy * deltaT * this.dy;
            
            // if walls, bounce
            if (this.walls) {
                if (this.x + this.r > canvas.width) {
                    this.dx = -1;
                }
                else if (this.x - this.r < 0) {
                    this.dx = 1;
                }
                if (this.y + this.r > canvas.height) {
                    this.dy = -1;
                }
                else if (this.y - this.r < 0) {
                    this.dy = 1;
                }
            }
        },
        draw: function (ctx) {
            // Draw element according to current property values.
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
}

function animatedDrawingLine(sx, sy, dx, dy, color, speed) {
    return {
        sx: sx,
        sy: sy,
        dx: sx,
        dy: sy,
        color: color || 'black',
        speed: speed || 0.05,
        dirX: sx < dx ? 1 : -1,
        dirY: sy < dy ? 1 : -1,
        update: function(deltaT) {
            if ((this.dirX == 1 && Math.trunc(this.dx) < dx) || 
                (this.dirX == -1 && Math.trunc(this.dx) > dx) ) {
                this.dx += this.dirX * (dx - sx) * this.speed;
            }
            if ((this.dirY == 1 && Math.trunc(this.dy) < dy) || 
                (this.dirY == -1 && Math.trunc(this.dy) > dy)) {
                this.dy += this.dirY * (dy - sy) * this.speed;
            }
        },
        draw: function(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.sx, this.sy);
            ctx.lineTo(this.dx, this.dy);
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }
    };
}

eval(
    "scene.push(animatedCircle(50, 50, 25, 'red'));" + 
    "scene.push(animatedCircle(100,100, 15, 'green', 0.2));" +
    "scene.push(animatedCircle(0, 0, 20, 'blue'));" +
    "scene.push(animatedDrawingLine(10,10,400,100));" +
    "animate();"
);
