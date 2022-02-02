const posts = document.getElementsByClassName("post");

function changeColor() {
    for (const post of posts) {
       post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` 
    }
}

function showNav() {
    const nav = document.getElementsByClassName("display-nav")[0];
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex'
    }
} 

