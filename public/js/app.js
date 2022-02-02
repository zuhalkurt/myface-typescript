document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("my-button");
    button.addEventListener("click", function() {
        const posts = document.getElementsByClassName("post");
        for (const post of posts) {
        post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` 
}

    })
    
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
