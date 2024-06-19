// script.js
document.getElementById('runTextLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('runningText').style.animationPlayState = 'running';
});
