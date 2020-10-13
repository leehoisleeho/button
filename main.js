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
btn4.onclick=function (event) {
     let X = event.offsetX
     let Y = event.offsetY
     console.log(X)
     console.log(Y)
            let childNode = document.createElement('div');
            childNode.innerHTML = '<div></div>'
            childNode.style.width =400+ "px"
            childNode.style.height =400+ "px"
            childNode.style.background = "rgba(255,255,255,0.2)"
            childNode.style.position = "absolute"
            childNode.style.top = Y-200 + "px"
            childNode.style.left = X-200 + "px"
            childNode.style.animation = ".8s ease-in btn4"
            childNode.style.borderRadius="50%"
            childNode.style.visibility="hidden"
            childNode.style.pointerEvents="none"
            document.getElementById('ripple-1').appendChild(childNode);
    }

let btn5 =document.getElementById("ripple-2")
btn5.onclick=function (event) {
    let W = event.offsetX
    let Q = event.offsetY
    let childNode1 = document.createElement('div');
    childNode1.innerHTML = '<div></div>'
    childNode1.style.width =240+ "px"
    childNode1.style.height =108+ "px"
    childNode1.style.background = "rgba(255,255,255,.2)"
    childNode1.style.position = "absolute"
    childNode1.style.top = Q-54 + "px"
    childNode1.style.left = W-120 + "px"
    childNode1.style.animation = ".5s ease-in btn5"
    childNode1.style.visibility="hidden"
    childNode1.style.pointerEvents="none"
    document.getElementById('ripple-2').appendChild(childNode1);
}


