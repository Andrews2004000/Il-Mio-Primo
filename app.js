const Input = document.querySelector("#In");
const Text = document.querySelector("#Tx");
const List = document.querySelector("#list");
const Btn = document.querySelector("#Bt");

Btn.addEventListener('click', ()=>{
    var  InputText = Input.value;
   
    
    var  TextValue = Text.value;
    
   
    List.insertAdjacentHTML("afterend", `<li class="item">${InputText}<br>${TextValue}</li>`)
})

