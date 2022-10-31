
function click1() {
  let f1 = document.getElementsByName("cena");
  let f2 = document.getElementsByName("kolichestvo");
  let r = document.getElementById("result");
  r.innerHTML = f1[0].value * f2[0].value;
}
