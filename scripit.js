let horizantal = document.querySelector(".horizantal-row");

horizantal.addEventListener("wheel", (e) => {
    e.preventDefault();
    horizantal.scrollLeft += e.deltaY;
});
let message = document.getElementById("Message")
let verticle = document.getElementById("vertical")
let open = document.getElementById("open")
let back = document.getElementById("back")
let verticle1 = document.getElementById("vertical-1")
let verticle2 = document.getElementById("vertical-2")
let verticle3 = document.getElementById("vertical-3")
let verticle4 = document.getElementById("vertical-4")
let verticle5 = document.getElementById("vertical-5")
let verticle6 = document.getElementById("vertical-6")
let verticle7 = document.getElementById("vertical-7")

verticle.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
back.addEventListener("click", () => {
    message.style.display = "block"
    open.style.display = "none"
})
verticle1.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
verticle2.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
verticle3.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
verticle4.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
verticle5.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
verticle6.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})
verticle7.addEventListener('click', () => {
    message.style.display = "none"
    open.style.display = "block"
})

