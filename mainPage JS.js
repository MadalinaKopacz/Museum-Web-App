function modifStil1() {
    var x = document.getElementsByClassName("scris");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "Azure";
    }
}


function modifStil2() {
    document.getElementById("bara-cautare").style.textDecoration = "underline";
}

function changeImage(event) {
    var image = document.getElementById("PrimaPoza");
    if (image.src.match("1")) {
        image.src = "dino.gif";
    }
    event.stopPropagation();
}

function setRandomColors() {
    let colors = ["chocolate", "darkseagreen", "darkcyan", "rebeccapurple", "darksalmon"];
    var x = document.getElementById("mesaj");
    const randomIndex = Math.floor(Math.random() * colors.length);
    x.style.color = colors[randomIndex];
    colors.splice(randomIndex, 1);
}

function setRandomColors3() {
    let colors = ["chocolate", "darkseagreen", "darkcyan", "rebeccapurple", "darksalmon"];
    var x = document.querySelectorAll("#titlup");
    const randomIndex = Math.floor(Math.random() * colors.length);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = colors[randomIndex];

    }
    colors.splice(randomIndex, 1);

}

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("Data").innerHTML = t;
}

function setInt() {
    var myVar = setInterval(myTimer, 500);

}

let object1Size = {
    width: 20,
    height: 20
};
let position = {
    x: 10,
    y: 10
};
let moveRate = 10;
let object1 = document.getElementById("object1");

function updateYPosition(distance) {
    position.y = position.y - distance;
    if (position.y < 0) {
        position.y = 199;
    } else if (position.y > 199) {
        position.y = 0;
    }
}

function setRandomColors2() {
    let colors = ["lavenderblush", "floralwhite", "ivory", "lavender", "aliceblue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    colors.splice(randomIndex, 1);
}

function updateXPosition(distance) {
    position.x = position.x + distance;
    if (position.x < 0) {
        position.x = 199;
    } else if (position.x > 199) {
        position.x = 0;
    }
}

function refreshPosition() {
    let x = position.x - (object1Size.width / 2);
    let y = position.y - (object1Size.height / 2);
    let transform = "translate(" + x + " " + y + ")";

    object1.setAttribute("transform", transform);
}

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.code === "ArrowDown") {
        updateYPosition(-moveRate);
    } else if (event.code === "ArrowUp") {
        updateYPosition(moveRate);
    } else if (event.code === "ArrowLeft") {
        updateXPosition(-moveRate);
    } else if (event.code === "ArrowRight") {
        updateXPosition(moveRate);
    }
    refreshPosition();
    event.preventDefault();
}, true);

function fTimeOut() {
    var x = document.getElementsByTagName("svg")[0];
    x.parentNode.removeChild(x);
    var y = document.getElementsByTagName("h3")[0];
    y.parentNode.removeChild(y);
    var z = document.getElementsByTagName("h2")[0];
    z.parentNode.removeChild(z);
}

function stildata() {
    document.getElementById("Data").classList.add("stilData");
}

function changeComp() {
    var elem = document.getElementById("bara-cautare");
    var propr = window.getComputedStyle(elem, null).getPropertyValue("font-family");
    if (propr == "sans-serif") {
        elem.style.fontFamily = "monospace";
    }
}


window.onload = () => {
    modifStil1();
    modifStil2();
    document.getElementById("PrimaPoza").onclick = function() {
        changeImage();
    };
    setRandomColors();
    setRandomColors2();
    setRandomColors3();
    setTimeout(function() { fTimeOut(); }, 60000);
    setInt();
    stildata();
    changeComp();
}