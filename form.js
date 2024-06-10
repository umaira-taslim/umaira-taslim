let lables = document.querySelectorAll('label');
let arr = Array.from(lables);
function myValues() {
    var x = document.getElementById("form");
    var txt = "";
    var text;
    var i;
    for (i = 0; i < x.length-2; i++) {
        if(i==4||i==5||i==6){ 
            continue;
        }
      txt =txt + arr[i].innerHTML + ":" + x.elements[i].value + "\n";
    }
    if(document.getElementById("submit").innerHTML =confirm(txt)){
        text = "Form Submitted Successfull";
        document.getElementById("reset").click();
    }
    else {
        text = "You pressed Cancel! \n Form is not submitted yet";
        document.getElementById("reset").click();
      }
      document.getElementById("submit").innerHTML = alert(text);
}
