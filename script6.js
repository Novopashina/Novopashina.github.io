function updatePrice(v) {
  let s = document.getElementsByName("prodType");
  let select = s[0];

  let radioDiv = document.getElementById("prodOptions");
  radioDiv.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");

  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value === "3" ? "block" : "none");
  let price = 0;

  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  if (select.value === "2") {
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  }
  if (select.value === "3") {
    let checkboxes = document.getElementsByName("checkboxes");
    checkboxes.forEach(function (checkboxes) {
      if (checkboxes.checked) {
        let checkboxPrice = prices.prodProperties[checkboxes.value];
        if (checkboxPrice !== undefined) {
          price += checkboxPrice;
        }
      }
    });
  }

  let onlydigitnotzero = /^(?!(0))\d+$/;
  let prodPrice = document.getElementById("result");
  if (v.match(onlydigitnotzero) === null) {
    prodPrice.innerHTML = "Число не введено или начинается с нуля";
  }
  else {
    prodPrice.innerHTML = "<span> Итого: </span>"+v * price + " рублей";
  }

}

function getPrices() {
  return {
    prodTypes: [100, 200, 300],
    prodOptions: {
      option2: 5,
      option3: 10
    },
    prodProperties: {
      check1: 300,
      check2: 55
    }
  };
}

window.addEventListener("DOMContentLoaded", function (event) {
  let radioDiv = document.getElementById("prodOptions");
  radioDiv.style.display = "none";

  let checkboxDiv = document.getElementById("checkboxes");
  checkboxDiv.style.display = "none";

  let v = document.getElementById("field");
  v.addEventListener("input", function (event) {
    updatePrice(v.value);
  });

  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function (event) {
    let target = event.target;
    updatePrice(v.value);
  });

  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      updatePrice(v.value);
    });
  });
  let checkboxes = document.getElementsByName("checkboxes");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      updatePrice(v.value);
    });
  });
});