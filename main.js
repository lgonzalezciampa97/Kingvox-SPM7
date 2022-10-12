let firstLed = document.getElementById("first-led")
let secondLed = document.getElementById("second-led")
let thirdLed = document.getElementById("third-led")
let fourthLed = document.getElementById("fourth-led")
let fifthLed = document.getElementById("fifth-led")
let sixthLed = document.getElementById("sixth-led")
let seventhLed = document.getElementById("seventh-led")
let eigthLed = document.getElementById("eigth-led")
let ninethLed = document.getElementById("nineth-led")

let ledFirstColor = "rgb(47, 255, 64)";
let ledMidColor = "rgb(182, 255, 47)";
let ledAnteLastColor = "rgb(255, 182, 47)";
let ledLastColor = "rgb(255, 47, 47)";

let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")
let btn4 = document.getElementById("btn-4")

function encenderLuces() {

    firstLed.style.backgroundColor = ledFirstColor;
    setTimeout(() => {
        secondLed.style.backgroundColor = ledMidColor;
        thirdLed.style.backgroundColor = ledMidColor;
    }, "50");
    setTimeout(() => {
        fourthLed.style.backgroundColor = ledMidColor;
        fifthLed.style.backgroundColor = ledMidColor;
    }, "100");
    setTimeout(() => {
        sixthLed.style.backgroundColor = ledAnteLastColor;
        seventhLed.style.backgroundColor = ledAnteLastColor;
    }, "150");
    setTimeout(() => {
        eigthLed.style.backgroundColor = ledLastColor;
        ninethLed.style.backgroundColor = ledLastColor;
    }, "200");

}

function apagarLuces() {
    setTimeout(() => {
        firstLed.style.backgroundColor = "#000000";
    }, "250");
    setTimeout(() => {
        secondLed.style.backgroundColor = "#000000";
        thirdLed.style.backgroundColor = "#000000";
    }, "200")
    setTimeout(() => {
        fourthLed.style.backgroundColor = "#000000";
        fifthLed.style.backgroundColor = "#000000";
    }, "150")
    setTimeout(() => {
        sixthLed.style.backgroundColor = "#000000";
        seventhLed.style.backgroundColor = "#000000";
    }, "100")
    setTimeout(() => {
        eigthLed.style.backgroundColor = "#000000";
        ninethLed.style.backgroundColor = "#000000";
    }, "50")
}

function usarBtn1() {
    const sound = new Audio("sirena1.mp3");
    btn1.ontouchstart = (() => {
        btn1.style.backgroundImage = "url('forma1-invert.png')";
        btn1.style.backgroundColor = "#0099ff";
        sound.play();
        encenderLuces();
    })
    btn1.ontouchend = (() => {
        btn1.style.backgroundImage = "url('forma1.png')";
        btn1.style.backgroundColor = "#ffffff";
        sound.pause();
        apagarLuces();
    })
}

function usarBtn2() {
    const sound = new Audio("sirena2.mp3");
    btn2.ontouchstart = (() => {
        btn2.style.backgroundImage = "url('forma2-invert.png')";
        btn2.style.backgroundColor = "#0099ff";
        sound.play();
        encenderLuces();
    })
    btn2.ontouchend = (() => {
        btn2.style.backgroundImage = "url('forma2.png')";
        btn2.style.backgroundColor = "#ffffff";
        sound.pause();
        apagarLuces();
    })
}

function usarBtn3() {
    const sound = new Audio("sirena3.mp3");
    btn3.ontouchstart = (() => {
        btn3.style.backgroundImage = "url('forma3-invert.png')";
        btn3.style.backgroundColor = "#0099ff";
        sound.play();
        encenderLuces();
    })
    btn3.ontouchend = (() => {
        btn3.style.backgroundImage = "url('forma3.png')";
        btn3.style.backgroundColor = "#ffffff";
        sound.pause();
        apagarLuces();
    })
}

function usarBtn4() {
    const sound = new Audio("sirena4.mp3");
    btn4.ontouchstart = (() => {
        btn4.style.backgroundImage = "url('forma4-invert.png')";
        btn4.style.backgroundColor = "#0099ff";
        sound.play();
        encenderLuces();
    })
    btn4.ontouchend = (() => {
        btn4.style.backgroundImage = "url('forma4.png')";
        btn4.style.backgroundColor = "#ffffff";
        sound.pause();
        apagarLuces();
    })
}
