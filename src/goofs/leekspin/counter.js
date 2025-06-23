spins = 0;
const spinElement = document.getElementById('spins');
setInterval(function() {
    spins++;
    spinElement.textContent = spins;
}, 320)