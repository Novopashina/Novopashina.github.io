
function onClick() {
  alert("click");
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("my-button");
  b.addEventListener("click", onClick);
});
