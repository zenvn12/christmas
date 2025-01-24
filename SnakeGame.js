    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const box = 20; // Size of each grid cell
    let score = 0;

    let snake = [
      { x: 8 * box, y: 8 * box },
    ];

    let food = {
      x: Math.floor(Math.random() * (canvas.width / box)) * box,
      y: Math.floor(Math.random() * (canvas.height / box)) * box
    };

    let direction;

    document.addEventListener('keydown', changeDirection);

    function changeDirection(event) {
      if (event.key === 'ArrowUp' && direction !== 'DOWN') {
        direction = 'UP';
      } else if (event.key === 'ArrowDown' && direction !== 'UP') {
        direction = 'DOWN';
      } else if (event.key === 'ArrowLeft' && direction !== 'RIGHT') {
        direction = 'LEFT';
      } else if (event.key === 'ArrowRight' && direction !== 'LEFT') {
        direction = 'RIGHT';
      }
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the snake
      snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#0f0' : '#0b0';
        ctx.fillRect(segment.x, segment.y, box, box);
      });

      // Draw the food
      ctx.fillStyle = '#f00';
      ctx.fillRect(food.x, food.y, box, box);

      // Move the snake
      let head = { ...snake[0] };

      if (direction === 'UP') head.y -= box;
      if (direction === 'DOWN') head.y += box;
      if (direction === 'LEFT') head.x -= box;
      if (direction === 'RIGHT') head.x += box;

      // Check for collisions
      if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || isColliding(head)) {
        clearInterval(game);
        alert('Game Over! Your final score is: ' + score);
        return;
      }

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('score').textContent = 'Score: ' + score;

        food = {
          x: Math.floor(Math.random() * (canvas.width / box)) * box,
          y: Math.floor(Math.random() * (canvas.height / box)) * box
        };
      } else {
        snake.pop(); // Remove last segment
      }

      snake.unshift(head); // Add new head
    }

    function isColliding(head) {
      return snake.some(segment => segment.x === head.x && segment.y === head.y);
    }

    const game = setInterval(drawGame, 100);
