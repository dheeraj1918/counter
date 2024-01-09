document.getElementById("incrementBtn").addEventListener("click",incrementValue);
document.getElementById("decrementBtn").addEventListener("click",decrementValue);
document.getElementById("resetBtn").addEventListener("click",resetValue);
const Display=document.getElementById("counterDisplay");
let value=0;
function updateValue()
{
    Display.textContent=value;
}
function incrementValue()
{
    value++;
    updateValue();
}
function decrementValue()
    {
    if(value>0)
       {
           value--;
           updateValue();
        }
    }
function resetValue()
{
    value=0;
    updateValue();
}

