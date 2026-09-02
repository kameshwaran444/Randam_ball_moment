const area = {
element: document.getElementById("area"),
width: 1000,
height: 400
};

function initialize() {

area.element.style.width = area.width + "px";

area.element.style.height = area.height + "px";


}

let movement = {

// Move ball
moveTo: function (x, y) {

    this.element.style.left = x + "px";

    this.element.style.top = y + "px";
},


// Change direction when ball hits border
changeDirectionIfNecessary: function (x, y) {

    if (x <= 0 || x >= area.width - this.width) {

        this.dx = -this.dx;
    }


    if (y <= 0 || y >= area.height - this.height) {

        this.dy = -this.dy;
    }
},


// Create new ball
create: function (color, dx, dy) {

    let newBall = Object.create(this);


    newBall.dx = dx;

    newBall.dy = dy;


    newBall.width = 40;

    newBall.height = 40;


    newBall.element = document.createElement("div");


    newBall.element.style.backgroundColor = color;

    newBall.element.style.width =
        newBall.width + "px";

    newBall.element.style.height =
        newBall.height + "px";


    newBall.element.className = "ball";


    newBall.width =
        parseInt(newBall.element.style.width);

    newBall.height =
        parseInt(newBall.element.style.height);


    area.element.appendChild(newBall.element);


    return newBall;
},


// Update ball movement
update: function (x, y) {

    this.moveTo(x, y);

    this.changeDirectionIfNecessary(x, y);


    let ball = this;


    setTimeout(function () {

        ball.update(
            x + ball.dx,
            y + ball.dy
        );

    }, 16);
}


};

initialize();

// Create balls

const ball1 = movement.create("blue", 4, 3);

const ball2 = movement.create("red", 2, 4);

const ball3 = movement.create("green", 3, 2);

// Start ball movement

ball1.update(70, 0);

ball2.update(20, 200);

ball3.update(300, 330);
