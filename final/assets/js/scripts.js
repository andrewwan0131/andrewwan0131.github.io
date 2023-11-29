const fox = document.getElementById("fox");
const dog = document.getElementById("dog");

function jump() {
  if (fox.classList != "jump") {
    fox.classList.add("jump");

    setTimeout(function () {
      fox.classList.remove("jump");
    }, 500);
  }
}

let isAlive = setInterval(function () {
  // get current fox Y position
  let foxTop = parseInt(window.getComputedStyle(fox).getPropertyValue("top"));

  // get current dog X position
  let dogLeft = parseInt(
    window.getComputedStyle(dog).getPropertyValue("left")
  );

  // detect collision
  if (dogLeft < 100 && dogLeft > 0 && foxTop >= 230) {
    // collision
    alert("Game Over!");
  }
}, 10);

/*
document.addEventListener("keydown", function (event) {
  jump();
});
*/

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      jump();
    }
})
