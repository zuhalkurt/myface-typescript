const posts = document.getElementsByClassName("post");

function changeColor() {
    for (const post of posts) {
       post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` 
    }
}