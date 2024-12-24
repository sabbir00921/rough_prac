// // console.log(window.document.children)
const hello = document.getElementById("hello")
const btn = document.getElementById("btn")
hello.style.backgroundColor = "red"
btn.addEventListener('mouseover', ()=>{
let color = ["red", "green", "blue", "yellow", "magenta", "cyan"]
    const random = Math.round(Math.random() * 5);

    console.log(random)

    hello.style.backgroundColor = color[random]
    hello.style.color = color[random+1]
    btn.style.padding = "10px 20px"
    btn.style.fontSize = "20px"
    btn.style.borderRadius = "50px"
})

