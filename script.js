document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const speed = 5; // Adjust speed as needed

    let posX = 0;
    let posY = 0;

    function movePlayer(dx, dy) {
        posX += dx;
        posY += dy;

        // Optional: Add boundary checking
        posX = Math.max(0, Math.min(window.innerWidth - player.clientWidth, posX));
        posY = Math.max(0, Math.min(window.innerHeight - player.clientHeight, posY));

        player.style.left = posX + 'px';
        player.style.top = posY + 'px';
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'w':
                movePlayer(0, -speed);
                break;
            case 'a':
                movePlayer(-speed, 0);
                break;
            case 's':
                movePlayer(0, speed);
                break;
            case 'd':
                movePlayer(speed, 0);
                break;
        }
    });
});
