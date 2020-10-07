let btn = document.getElementById("shanchu1")
btn.onclick=function () {
   btn.classList.add("start1")
}
btn.onanimationend =function () {
    let btn = document.getElementById("shanchu1")
    btn.classList.remove("start1")
}

let btn1 = document.getElementById("shanchu2");
btn1.onclick=function () {
    btn1.classList.add("start2")
}
btn1.onanimationend = () => {
    let btn1 = document.getElementById("shanchu2")
    btn1.classList.remove("start2")
}

let btn2 = document.getElementById("shanchu3");
btn2.onclick=function () {
    btn2.classList.add("start3")
}
btn2.onanimationend = () => {
    let btn2 = document.getElementById("shanchu3")
    btn2.classList.remove("start3")
}

let btn3 = document.getElementById("shanchu4");
btn3.onclick=function () {
    btn3.classList.add("start4")
}
btn3.onanimationend = () => {
    let btn3 = document.getElementById("shanchu4")
    btn3.classList.remove("start4")
}

let btn4 =document.getElementById("ripple-1")
    btn4.onclick=function () {
        let active = document.getElementById("ripple-1-1")
        active.classList.add("active")
    }

let active = document.getElementById("ripple-1-1")
active.onanimationend=function () {
    let active = document.getElementById("ripple-1-1")
    active.classList.remove("active")
}

let btn5 = document.getElementById("ripple-2")
btn5.onclick=function () {
    let active1 = document.getElementById("ripple-1-2")
    active1.classList.add("active1")
}

btn5.ontransitionend=function () {
    let active1 = document.getElementById("ripple-1-2")
    active1.classList.remove("active1")
}
