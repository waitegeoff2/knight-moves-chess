class Node {
    constructor(position) {
        this.position = position; 
        this.prevMove = null; //parent (will need to track to find the path we took to get there)
        this.turnSpace = false; //to keep track of the number of turns
    }
}

//possible move functions (I know there's a more efficient way)

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
    //if not a valid move. FIX THIS
    if(start[0] < 0 || start[0] > 7 || start[1] < 0 || start [1] > 7 || (end[0] < 0) || end[0] > 7 || end[1] < 0 || (end[1] > 7)) {
        console.log("that move is off the chess board")
        throw console.error();
    }
    
    //set starting parameters
    let startPoint = new Node(start)
    let currentNode = startPoint

    let turnNode = new Node(["turn", "turn"])
    turnNode.turnSpace = true;

    //set up queue
    let queue = [startPoint, turnNode]
    let frontIndex = 0;
    let turnCount = 0;

    //while the current node does not equal the end node, we keep running through the queue(or null)
    while((currentNode.position == null) || (currentNode.position[0] != end[0]) || (currentNode.position[1] != end[1])) {
        //current node=start of the queue
        currentNode = queue[frontIndex]

        //if node is empty, move on to next one
        if (currentNode.position == null) {
            frontIndex++
            currentNode = queue[frontIndex]
        //if node is turn counter, count, add next turn counter to queue, and move on
        } else if (currentNode.turnSpace == true) {
            turnCount++
            let nextCount = new Node(["turn", "turn"])
            nextCount.turnSpace = true;

            queue.push(nextCount)
            frontIndex++
            currentNode = queue[frontIndex]
        //if node is a valid move, find all it's possible moves and add them to the queue, then move to next node in queue
        } else if (currentNode.position != null) {
            let firstMove = moveOne(currentNode.position)
            let firstMoveNode = new Node(firstMove)
            firstMoveNode.prevMove = currentNode
            queue.push(firstMoveNode)

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
    }

}

return console.log("You made it in " + turnCount + " moves! Here's your path: " + printChain(currentNode))
}

function printChain(node) {
    let currentPrint = node;
    let printString = "[" + `${currentPrint.position}` + "]";

    while(currentPrint.prevMove != null) {
        printString = ("[" + currentPrint.prevMove.position + "]" + printString)

        currentPrint = currentPrint.prevMove;
    }
    return printString;
}

knightMoves([0, 7], [1, 2])