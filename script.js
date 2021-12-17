let count = document.getElementById("count");

let changeColor = () => {
    if(parseInt(count.textContent) >= 1){
        count.style.color = "#4DF84A";
    }
    if(parseInt(count.textContent) <= -1){
        count.style.color = "#F84A4A";
    }
    if(parseInt(count.textContent) == 0 ){
        count.style.color = "#222";
    }
}

document.getElementById("decrease").addEventListener("click", function(){
    count.textContent = parseInt(count.textContent) - 1;
    changeColor();
});

document.getElementById("reset").addEventListener("click", function(){
    count.textContent = 0;
    changeColor();
});

document.getElementById("increase").addEventListener("click", function(){
    count.textContent = parseInt(count.textContent) + 1;
    changeColor();
});