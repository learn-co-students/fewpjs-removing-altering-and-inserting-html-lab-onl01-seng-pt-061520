// Write your code here!
document.getElementById("main").remove()


let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.setAttribute("id", "victory")

document.getElementById("victory")

newHeader.innerHTML = "YOUR-NAME is the champion"
