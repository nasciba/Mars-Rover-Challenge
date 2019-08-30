
const amazingRover = {
   x: 0,
   y: 0,
   direction: "N",
   travelLog: [{x:0, y:0}]
};


function turnLeft(rover){
    if(rover.direction === "N") {
        rover.direction = "W";
        console.log(rover.direction)
    }
    else if(rover.direction === "W") {
        rover.direction = "S";
        console.log(rover.direction);
    }
    else if(rover.direction === "S") {
        rover.direction = "E";
        console.log(rover.direction)
    }
    else if(rover.direction === "E") {
        rover.direction === "N";
        console.log(rover.direction);
    }
  console.log("turnLeft was called!");
}

function turnRight(rover){
    if(rover.direction === "N") {
        rover.direction = "E";
        console.log(rover.direction);
    }
    else if(rover.direction === "E") {
        rover.direction = "S";
        console.log(rover.direction);
    }
    else if(rover.direction === "S") {
        rover.direction = "W";
        console.log(rover.direction);
    }
    else if(rover.direction === "W") {
        rover.direction === "N";
        console.log(rover.direction);
    }

  console.log("turnRight was called!");
}


function moveForward(rover) {
  if(rover.direction === "N" && rover.y > 0) {
      rover.y--;
      console.log(rover.y--);
  }
  else if(rover.direction === "W" && rover.x > 0) {
      rover.x--;
      console.log(rover.x--);
  }
  else if(rover.direction === "E" && rover.x < 9) {
      rover.x++;
      console.log(rover.x++);
  }
  else if(rover.direction === "S" && rover.y < 9) {
      rover.y++;
      console.log(rover.y++);
  }
  console.log(`moveForward was called! The position of the rover is: x=${rover.x} y=${rover.y}.`);
}

function moveBackwards(rover) {
    if(rover.direction === "N" && rover.y < 9) {
        rover.y++;
        console.log(rover.y++);
    }
    else if(rover.direction === "W" && rover.x < 9) {
        rover.x++;
        console.log(rover.x++);
    }
    else if(rover.direction === "E" && rover.x > 0) {
        rover.x--;
        console.log(rover.x--);
    }
    else if(rover.direction === "S" && rover.y > 0) {
        rover.y--;
        console.log(rover.y--);
    }
    console.log(`moveBackwards was called! The position of the rover is: x=${rover.x} y=${rover.y}.`);
}

function movingTheRover(commands, rover) {
    for(let i = 0; i < commands.length; i++) {
       let command = commands[i];
       switch(command) {
           case "l":
               turnLeft(rover);
               break;
            case "r":
                turnRight(rover);
                break;
            case "f":
                moveForward(rover);
                break;
            case "b":
                moveBackwards(rover);
                break;
            }
            let newPosition = {x: rover.x, y: rover.y};
            rover.travelLog.push(newPosition);
            console.log(rover.travelLog);
        }
       
    
}

movingTheRover("rflbfffblfr", amazingRover);
