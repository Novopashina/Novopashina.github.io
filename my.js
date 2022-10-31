function updatePrice() {
  // Находим select по имени в DOM.
  let count =  document.querySelector('#count').value.match(/^\d+$/);
  if (count <=0) {
    document.querySelector('.XAXA').innerHTML = '<span style="color:blue;">Kол-во товара должно быть больше нуля</span>';
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = "none";
  }
  else {
  document.querySelector('.XAXA').innerHTML = '<span style="color: green;"></span>';
  var select = document.querySelector('select[name=prodType]');
  var price = 0;
  var prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  // Скрываем или показываем радиокнопки.
  let radioDiv = document.getElementById("radios");
 radioDiv.style.display = (select.value == "2" ? "block" : "none");

  // Смотрим какая товарная опция выбрана.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.prodOptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });

  // Скрываем или показываем чекбоксы.
  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");

  // Смотрим какие товарные свойства выбраны.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });

  let prodPrice = document.getElementById("prodPrice");
  prodPrice.innerHTML = count * price + " рублей";
}
}

function getPrices() {
  return {
    prodTypes: [100, 150, 200],
    prodOptions: {
      option2: 10,
      option1:5,
      option3:15,
    },
    prodProperties: {
      prop1: 1,
      prop2: 2,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  // Скрываем радиокнопки.
  let radioDiv = document.getElementById("radios");
  radioDiv.style.display = "none";

  // Находим select по имени в DOM.
  let s = document.getElementsByName("prodType");
  let select = s[0];
  // Назначаем обработчик на изменение select.
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });

  // Назначаем обработчик радиокнопок.
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

    // Назначаем обработчик радиокнопок.
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
  count.onkeypress = function(e) {
    if (e.keyCode == 13 ||  e.key == 13) {
      updatePrice();
    }
  };
});
