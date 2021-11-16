var u = document.getElementById("image-container")

u.addEventListener("click", myFunction)

function myFunction() {
    console.log()
}


let fun = null;

document.getElementById("framebox").addEventListener("click", function(event) {


    if(event.target.tagName !== "INPUT") {
        return;
    }

    if(fun != null)
    fun.classList.remove('pictureToggle');

    if(fun == event.target){
        fun = null;
        return;}

    fun = event.target

    event.target.classList.add ("pictureToggle");

});