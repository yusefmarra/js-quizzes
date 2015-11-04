function findSlope(array) {
  var distance = {x: 0, y: 0};
  distance.x = array[2] - array[0];
  distance.y = array[3] - array[1];
  if (distance.y === 0) {
    return undefined;
  }
  return distance.x/distance.y;
}
