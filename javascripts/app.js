// Rover Object Goes Here
// ======================
let rover = {
  direction: 'N',
  xposition: [0],
  yposition: [0],
  travelLog: []
  
};

console.log('Rover current direction is: ' + rover.direction);
console.log('Rover current position is ' + rover.xposition + ', ' + rover.yposition);

//Turn Left

function turnLeft() {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
      
    case 'W':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'N'
  }
  console.log(rover);
}

//Turn Right

function turnRight() {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'N'
      break;
  }
  console.log(rover);
}

//Move Forward

function moveForward() {
  console.log("moveForward was called");

  switch (rover.direction) {
    case 'N':
      rover.yposition--;
      break;

    case 'E':
      rover.xposition++;
      break;

    case 'S':
      rover.yposition++;
      break;
    
    case 'W':
      rover.xposition--;
      break;  
  }
  console.log(rover);
}

//Move Backward

function moveBackward() {
  console.log("moveBackward was called");

  switch (rover.direction) {
    case 'N':
      rover.yposition++;
      break;
  
    case 'E':
      rover.xposition--;
      break;
  
    case 'S':
      rover.yposition--;
      break;
    
    case 'W':
      rover.xposition++;
      break;  
  }
  console.log(rover);
}

//List of Commands

function commands(command) {
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
      case 'b':
	moveBackward();
	break;

      case 'f':
	moveForward();
	break;

      case 'r':
	turnRight();
	break;

      case 'l':
	turnLeft();
        break;
        
      default:
        console.log("Enter a valid Command, ex('fbrblff'), you can use only the letters('l','r','b','f')");
    }
  }
}



//Testing commands

console.log(commands('fffrfrfr'));
getCoords(rover);

console.log('================================');

console.log(commands('fbbblrlrfb'));
getCoords(rover);

console.log('================================');

console.log(commands('ffzzy'));
getCoords(rover);

console.log('================================');

console.log(commands('rfffffffff'));

//Tracking Coordinates

function getCoords(rover) {
  rover.travelLog.push(rover.xposition, rover.yposition);
   for (let i = 0; i < rover.travelLog.length; i++) {
     console.log('The Rover moved to ' + rover.travelLog.toString(i) + ' coordinates!');
   }
}

//Rover out of range
function stop() {
  if (rover.xposition < 0 || rover.xposition > 9) {
    console.log('Stop, commands is out of my range!')

  }else if (rover.yposition < 0 || rover.yposition > 9 ); {
    console.log('Stop, commands is out of my range!')
  }

}
stop();


