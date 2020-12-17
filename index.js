main = document.getElementById('main');
main.remove();

var newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader);
newHeader.innerHTML = "Your Mom is the champion";