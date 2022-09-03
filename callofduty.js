const Games = document.querySelector(".games")
const Box1 = document.querySelector(".box1")

Games.addEventListener("mouseenter", MyFunc1)
Box1.addEventListener("mouseleave", MyFunc1)

let TepaPas = false

function MyFunc1() {
    if (TepaPas === false) {
        Box1.style.transform = "translateY(0)"
        TepaPas = true
    }
    else {
        TepaPas = false
        Box1.style.transform = "translateY(-400px)"
    }
    console.log(TepaPas)
}

// 2chi faza




const Esports = document.querySelector(".esports")
const Box2 = document.querySelector(".box2")

Esports.addEventListener("mouseenter", MyFunc2)
Box2.addEventListener("mouseleave", MyFunc2)


let TepaPas2 = false

function MyFunc2() {
    if (TepaPas2 === false) {
        Box2.style.transform = "translateY(0)"
        TepaPas2 = true
    }
    else {
        TepaPas2 = false
        Box2.style.transform = "translateY(-400px)"
    }
    console.log(TepaPas2)
}



// 3chi faza




const Shop = document.querySelector(".shop")
const Box3 = document.querySelector(".box3")

Shop.addEventListener("mouseenter", MyFunc3)
Box3.addEventListener("mouseleave", MyFunc3)


let TepaPas3 = false

function MyFunc3() {
    if (TepaPas3 === false) {
        Box3.style.transform = "translateY(0)"
        TepaPas3 = true
    }
    else {
        TepaPas3 = false
        Box3.style.transform = "translateY(-400px)"
    }
    console.log(TepaPas3)
}






// icon-hover


// const Icon = document.querySelector(".fa-solid fa-chevron-down")

// Icon.addEventListener("mouseenter", Hover)

// let KolesoIcon = false

// function Hover() {
//     if (KolesoIcon === false) {
//         Icon.style.transform = "rotate(90deg)"
//     }
//     else{
//         KolesoIcon = false
//         Icon.style.transform = "rotate(90deg)"
//     }
//     console.log(KolesoIcon)
// }