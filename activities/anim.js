//==============================================================================
// Animations
//==============================================================================

// animate: Inicia la animación de los objetos contenidos en la escena
// scene: Arreglo de objetos animables
// stopFn (opcional): Función de decisión de finalización de la animación.
// Recibe como parámetro el tiempo transcurrido de la animación
function animate(scene, stopFn) {
    var ctx = getCanvasContext(),
        lastTime = 0, // Last seen timestamp.
        initTime = Date.now(),
        drawFrame = function (timestamp) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Call update on all scene elements...
            scene.forEach(function (elem) {
                elem.update(timestamp - lastTime);
                elem.draw(ctx);
            });

            // Request to be called again.
            lastTime = timestamp;

            if (!stopFn || !stopFn(Date.now() - initTime)) {
                window.requestAnimationFrame(drawFrame);
            }
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
        vx: velX || 0.0,
        vy: velY || 0.0,
        dx: dirX || 1,
        dy: dirY || 1,
        walls: walls || true,
        update: function (dt) {
            // I don't know why the first time dt is too large value
            if (this.x == cx && this.y == cy && dt > 100) return;

            this.x += this.vx * dt * this.dx;
            this.y += this.vy * dt * this.dy;

            // if walls, bounce
            if (this.walls) {
                if (this.x + this.r > canvas.width) {
                    this.dx = -1;
                }
                if (this.x - this.r < 0) {
                    this.dx = 1;
                }
                if (this.y + this.r > canvas.height) {
                    this.dy = -1;
                }
                if (this.y - this.r < 0) {
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
