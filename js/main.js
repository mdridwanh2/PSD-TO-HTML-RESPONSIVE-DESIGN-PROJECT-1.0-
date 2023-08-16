
// humbarger funtion
let navLinks = document.querySelector (`.nav-links`)
let humBarger = document.querySelector (`.humbarger`)

humBarger.addEventListener (`click`,() =>{
    navLinks.classList.toggle (`active`)
    humBarger.classList.toggle (`active`)
})


// scroll bar funtion
// let navBar = document.querySelector (`#nav-bar`)
// window.addEventListener (`scroll`, ()=>{
//     if (this.scrollY >=100){
//         navBar.classList.add (`scrolled`)
//     }else{
//         navBar.classList.remove (`scrolled`)
//     }
// })

