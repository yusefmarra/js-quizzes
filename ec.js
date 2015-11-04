

function randomColor() {
  var hexArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexArray[Math.floor(Math.random()*hexArray.length)];
  }
  return color;
}


function randomElement() {
  var elementArray = ['p','textarea','span','div','h1','h2','h3','h4','h5','h6'];
  var newElement = document.createElement(elementArray[Math.floor(Math.random()*elementArray.length)]);
  document.body.appendChild(newElement);
  newElement.style.position = 'absolute';
  newElement.style.background = randomColor();
  newElement.style.top = String((Math.floor(Math.random()*screen.height)))+ "px";
  newElement.style.left = String((Math.floor(Math.random()*screen.width)))+ "px";
  newElement.style.height = String((Math.floor(Math.random()*screen.height)))+ "px";
  newElement.style.width = String((Math.floor(Math.random()*screen.width)))+ "px";
  newElement.innerHTML = "I'M REALLY DRUNK";


  var transform = Math.floor(Math.random()*6);
  switch(transform) {
    case 1:
      newElement.style.transform = "rotateX(" + String(Math.random()* 360) + "deg)";
      break;
    case 2:
      newElement.style.transform = "rotateY(" + String(Math.random()* 360) + "deg)";
      break;
    case 3:
      newElement.style.transform = "rotateZ(" + String(Math.random()* 360) + "deg)";
      break;
    case 4:
      newElement.style.transform = "skewX(" + String(Math.random()* 360) + "deg)";
      break;
    case 5:
      newElement.style.transform = "skewY(" + String(Math.random()* 360) + "deg)";
      break;
    case 6:
      newElement.style.transform = "skewZ(" + String(Math.random()* 360) + "deg)";
      break;
    default:
      break;
  }
}

window.setInterval(randomElement, 100);
