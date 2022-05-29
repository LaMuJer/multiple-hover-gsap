import './style.css'
import {gsap} from "gsap";

let items = [...document.querySelectorAll("#item")]
let dot = document.getElementById("dot")
let text = document.getElementById("text")

// gsap.defaults({duration:.3})

items.forEach((item , idx) => {
    let tl = gsap.timeline({paused:true})
        .to(item.querySelector("#text") , {
            color:"#fff",
            x: 10,
            scale: 1.2,
            transformOrigin: "left center"
        })
        .to(item.querySelector("#dot" ), {
            scale: 1.5,
            backgroundColor: "#fa00e1",
        } , 0)
    item.addEventListener("mouseenter" , () => tl.play())
    item.addEventListener("mouseleave" , () => tl.reverse())
})

let btn = document.getElementById("bookBtn")
//  repeating scale tween
let scaleTween = gsap.to(btn , {
    scale: 1, paused: true,
    yoyo: true, repeat: -1,
})

btn.addEventListener("mouseenter" , () => scaleTween.restart())
btn.addEventListener("mouseleave" , () => {
    scaleTween.pause()
    gsap.to(btn , {
        scale: .6,
    })
})