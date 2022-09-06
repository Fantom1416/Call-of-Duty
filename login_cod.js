// const Inputlar = document.querySelectorAll("input")


// function BoshValue() {
//     if (BoshValue) {
//         Inputlar.values = ""
//         alert("Pustoy")
//     }
// }


console.log(localStorage)

const Input1 = document.querySelector("#input")
const Input2 = document.querySelector("#input2")


function Signin(e) {
console.log(Input1.value)
console.log(Input2.value)

localStorage.setItem("name", "Bobir")
localStorage.setItem("Lastname", "Temirov")
}