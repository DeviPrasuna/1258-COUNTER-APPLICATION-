let updatevalue1 = document.getElementById("updatevalue")
function onincrement() {
     let a = updatevalue1.textContent;
     let countervalue = parseInt(a) + 1;
     if (countervalue>0){
        updatevalue1.style.color = "yellow";
     }
     else if(countervalue<0){
        updatevalue1.style.color = "orange";
     }
     else {
        updatevalue1.style.color = "blue";
     }
     updatevalue1.textContent = countervalue; 
}
function onreset1() {
     let countervalue = 0;
     updatevalue1.textContent = countervalue;
     updatevalue1.style.color = "lightblue";
}
function ondecrement() {
    let a = updatevalue1.textContent;
     let countervalue = parseInt(a) - 1;
     if (countervalue>0){
        updatevalue1.style.color = "yellow";
     }
     else if(countervalue<0){
        updatevalue1.style.color = "orange";
     }
     else {
        updatevalue1.style.color = "blue";
     }
     updatevalue1.textContent = countervalue; 

}