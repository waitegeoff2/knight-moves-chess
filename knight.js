//each square on the chessboard is a node (or vertex. A valid move is the connections between the vertexes. 
//figure out that logic, 2 and then 1, and set the boundaries
class Node {
    constructor(position) {
        this.position = position;
        this.moveOne = this.moveOne(this.position)
        this.moveTwo = this.moveTwo(this.position)
        this.moveThree = this.moveThree(this.position)
        this.moveFour = this.moveFour(this.position)
        this.moveFive = this.moveFive(this.position)
        this.moveSix = this.moveSix(this.position)
        this.moveSeven = this.moveSeven(this.position)
        this.moveEight = this.moveEight(this.position)
    }

    possibleMoves(start) {

    }

    //1: +2,+1. 2: +1, +2. 3: -1,+2. 4: -2, +1. 5: -2, -1. 6: -1, -2. 7: +1, -2. 8: +2, -1.

    moveOne(start) {
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

    moveTwo(start) {
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

    moveThree(start) {
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

    moveFour(start) {
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

    moveFive(start) {
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

    moveSix(start) {
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

    moveSeven(start) {
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

    moveEight(start) {
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


}

function knightMoves(start, end) {
    let startPoint = new Node(start)
    let currentNode = startPoint

    let queue = [startPoint]
    let frontIndex = 0;

    while(currentNode != startPoint) {
        let front = queue[frontIndex]

        queue.push(currentNode.moveOne)
        queue.push(currentNode.moveTwo)
        queue.push(currentNode.moveThree)
        queue.push(currentNode.moveFour)
        queue.push(currentNode.moveFive)
        queue.push(currentNode.moveSix)
        queue.push(currentNode.moveSeven)
        queue.push(currentNode.moveEight)

        console.log(queue)


        //queuing and looping
    }

}

let testNode = new Node([0,0])
console.log(testNode)


let testNodeTwo = new Node([6,4])
console.log(testNodeTwo)

knightMoves([0, 0])