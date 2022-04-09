function myFunction() {
    let text;
    if (document.getElementById("id1").validity.tooLong) {
      text = "Value too long";
    } else {
      text = "Input OK";
    } 
    document.getElementById("demo").innerHTML = text;
  }