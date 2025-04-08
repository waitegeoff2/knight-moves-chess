//each square on the chessboard is a node (or vertex. A valid move is the connections between the vertexes. 
//figure out that logic, 2 and then 1, and set the boundaries
class Node {
    constructor(position) {
        //add TWO WAY links somehow, so you can track back up the tree
        this.position = position;
        this.prevMove = null; //parent
        //children -> EDGES, next moves
        //run these in the queue
        this.moveOne = null; // this.moveOne(this.position)
        this.moveTwo = null;
        this.moveThree = null;
        this.moveFour = null;
        this.moveFive = null;
        this.moveSix = null;
        this.moveSeven = null;
        this.moveEight = null;
    }
}

//possible move functions

function moveOne(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x + 2;
    let yMove = y + 1;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveTwo(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x + 1;
    let yMove = y + 2;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveThree(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x - 1;
    let yMove = y + 2;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveFour(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x - 2;
    let yMove = y + 1;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveFive(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x - 2;
    let yMove = y - 1;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveSix(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x - 1;
    let yMove = y - 2;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveSeven(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x + 1;
    let yMove = y - 2;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

function moveEight(start) {
    let x = start[0]
    let y = start[1]

    let xMove = x + 2;
    let yMove = y - 1;

    if(xMove<0 || xMove>7 || yMove<0 || yMove>7) {
        return null;
    } else {
        return [xMove, yMove]
    }
}

//knight moves function

function knightMoves(start, end) {
    if((start[0] < 0) || (start [1] > 7) || (end[0] < 0) || (end[1] > 7)) {
        console.log("Your move is off the chess board");
    }
    
    let startPoint = new Node(start)
    let currentNode = startPoint
    console.log(startPoint.position)

    //keep this
    let queue = [startPoint, "turn"]
    let frontIndex = 0;
    let turnCount = 0;

    //the current node below is wrong it's always the same

    //while start !=end.....
    while((currentNode.position[0] != end[0]) || (currentNode.position[1] != end[1]) || (currentNode == null)) {
        currentNode = queue[frontIndex]

        //create the new node here???? need to find all the moves

        if (currentNode.position == null) {
            frontIndex++
            currentNode = queue[frontIndex]
        } else if (currentNode.position != null) {
            //move one
            let firstMove = moveOne(currentNode.position)
            let firstMoveNode = new Node(firstMove)
            firstMoveNode.prevMove = currentNode
            queue.push(firstMoveNode)

            //move two
            let secondMove = moveTwo(currentNode.position)
            let secondMoveNode = new Node(secondMove)
            secondMoveNode.prevMove = currentNode
            queue.push(secondMoveNode)

            let thirdMove = moveThree(currentNode.position)
            let thirdMoveNode = new Node(thirdMove)
            thirdMoveNode.prevMove = currentNode
            queue.push(thirdMoveNode)

            let fourthMove = moveFour(currentNode.position)
            let fourthMoveNode = new Node(fourthMove)
            fourthMoveNode.prevMove = currentNode
            queue.push(fourthMoveNode)

            let fifthMove = moveFive(currentNode.position)
            let fifthMoveNode = new Node(fifthMove)
            fifthMoveNode.prevMove = currentNode
            queue.push(fifthMoveNode)

            let sixthMove = moveSix(currentNode.position)
            let sixthMoveNode = new Node(sixthMove)
            sixthMoveNode.prevMove = currentNode
            queue.push(sixthMoveNode)

            let seventhMove = moveSeven(currentNode.position)
            let seventhMoveNode = new Node(seventhMove)
            seventhMoveNode.prevMove = currentNode
            queue.push(seventhMoveNode)

            let eighthMove = moveEight(currentNode.position)
            let eighthMoveNode = new Node(eighthMove)
            eighthMoveNode.prevMove = currentNode
            queue.push(eighthMoveNode)

            frontIndex++
            currentNode = queue[frontIndex]
        } else if (currentNode === "turn") {
            turnCount ++
            queue.push("turn")
            frontIndex++
        }

        //look at LINKED PAGE, add a null at the end of each level, when you get to it, you'll be at the end of the level
        //and you can add to the queue and it will be at the end of the next level
        //IF NULL(count++ and add new null) figure that out tmrw
        console.log(queue)
        //queuing and looping
    }
    // return currentNode;

}

console.log(knightMoves([0, 0], [4, 6]))