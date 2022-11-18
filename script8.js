function popup(par) {
  let formDiv = document.getElementById("forma");
  let bg = document.getElementById("popup_bg");
  if (par === true) {
    formDiv.style.display = ("block");
    bg.style.opacity = ("1");
    bg.style.pointerEvents = ("all");
    history.pushState(true, null, "#form");
  }

  else {
    formDiv.style.display = ("none");
    bg.style.opacity = ("0");
    bg.style.pointerEvents = ("none");
    history.pushState(false, null, "#");
  }
}


let names = document.getElementById("InputName");
let email = document.getElementById("InputEmail");
let msg = document.getElementById("Textarea");
let cb = document.getElementById("Check");


function save() {
  localStorage.setItem("Имя", names.value);
  localStorage.setItem("Почта", email.value);
  localStorage.setItem("Сообщение", msg.value);
  localStorage.setItem("Чекбокс", cb.checked);
}
document.addEventListener("DOMContentLoaded", function (event) {
  if (location.hash === "#form") {
    popup(true);
  }
  window.addEventListener("popstate", (e) => {
    popup(e);
  });
  let b = document.getElementById("button1");
  b.addEventListener("click", () => {
    popup(true);
  });
  let c = document.getElementById("closebutton");
  c.addEventListener("click", () => {
    popup(false);
  });
  let popupBg = document.getElementById("popup_bg");
  document.addEventListener("click", (e) => {
    if (e.target === popupBg) {
      popup(false);
    }
  });

  names.value = localStorage.getItem("Имя");
  email.value = localStorage.getItem("Почта");
  msg.value = localStorage.getItem("Сообщение");
  if (localStorage.getItem("Чекбокс") === "false"){
    cb.checked = false;}
  else{
    cb.checked = true;}

  names.oninput = save;
  email.oninput = save;
  msg.oninput = save;
  cb.onclick = save;
});

$(function () {
  $(".ajaxForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status === "success") {
          alert("Успешно!");
          localStorage.removeItem("Имя");
          localStorage.removeItem("Почта");
          localStorage.removeItem("Сообщение");
          localStorage.removeItem("Чекбокс");
          names.value = localStorage.getItem("Имя");
          email.value = localStorage.getItem("Почта");
          msg.value = localStorage.getItem("Сообщение");
          cb.checked = false;
        } else {
          alert("Ошибка! " + response.message);
        }
      }
    });
  });
});