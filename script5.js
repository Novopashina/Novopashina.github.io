window.addEventListener("DOMContentLoaded", function (event) 
    {
        console.log("DOM fully loaded and parsed");
        function calculate() 
        {
            var count = document.getElementById("field1").value;
            var cost = document.getElementById("field2").value;
            var res = document.getElementById("result");

            var er=/^(?!(0))\d+$/;
            if(count.match(er)===null || cost.match(er)===null)
            {
                alert("Вы ввели неподходящие значения");
                res.innerHTML="Ошибка";
            }
            else
            {
                res.innerHTML = cost*count;
            }
        
        }
        var b = document.getElementById("button1");
        b.addEventListener("click", calculate);
    }
);