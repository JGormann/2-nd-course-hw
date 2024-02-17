function gameOne() {
    let month = prompt ("Введите номер месяца");
    if (month === "1" || month === "2" || month === "12"){
        alert("Это зима");
    }else if (month === "3" || month === "4" || month === "5"){
        alert("Это весна"); 
    }else if (month === "6" || month === "7" || month === "8"){
        alert("Это лето");
    }else if (month === "9" || month === "10" || month === "11"){
        alert("Это осень");
    }else{
      alert("Ого, ты по какому-то другому календарю живешь? Поделись!");
    }
  }