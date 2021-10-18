function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Schreib doch dein Scheiß!!!");
    } else {
        document.getElementById("myUL").appendChild(li)
    }
    document.getElementById("myInput").value = "";
    
    /* var button = document.createElement("BUTTON");
    var tt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    for (i = 0 < close.length; i++) {
        close[i].onClick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    } */
}