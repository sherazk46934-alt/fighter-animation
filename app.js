var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var p1Left = 30;
var p1Bottom = 0;

var p2Right = 30;
var p2Bottom = 0;

document.addEventListener("keydown", function (event) {

    let maxWidth1 = window.innerWidth - player1.offsetWidth;
    let maxHeight1 = window.innerHeight - player1.offsetHeight;

    let maxWidth2 = window.innerWidth - player2.offsetWidth;
    let maxHeight2 = window.innerHeight - player2.offsetHeight;

    // PLAYER 1

    if (event.key === "u") {
        p1Bottom = Math.min(maxHeight1, p1Bottom + 20);
        player1.style.bottom = p1Bottom + "px";
        player1.src = "images/iron-fly.gif";
    }

    if (event.key === "d") {
        p1Bottom = Math.max(0, p1Bottom - 20);
        player1.style.bottom = p1Bottom + "px";
        player1.src = "images/iron-man-stand.gif";
    }

    if (event.key === "l") {
        p1Left = Math.max(0, p1Left - 20);
        player1.style.left = p1Left + "px";
        player1.src = "images/iron-walk.gif";
    }

    if (event.key === "r") {
        p1Left = Math.min(maxWidth1, p1Left + 20);
        player1.style.left = p1Left + "px";
        player1.src = "images/iron-walk.gif";
    }

    // PLAYER 2

    if (event.key === "ArrowUp") {
        p2Bottom = Math.min(maxHeight2, p2Bottom + 20);
        player2.style.bottom = p2Bottom + "px";
        player2.src = "images/tager-up.gif";
    }

    if (event.key === "ArrowDown") {
        p2Bottom = Math.max(0, p2Bottom - 20);
        player2.style.bottom = p2Bottom + "px";
        player2.src = "images/tager-down.gif";
    }

    if (event.key === "ArrowLeft") {
        p2Right = Math.min(maxWidth2, p2Right + 20);
        player2.style.right = p2Right + "px";
        player2.src = "images/irontager-walkgif.gif";
    }

    if (event.key === "ArrowRight") {
        p2Right = Math.max(0, p2Right - 20);
        player2.style.right = p2Right + "px";
        player2.src = "images/irontager-walkgif.gif";
    }
});