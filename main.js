


const Input = document.querySelector('#name');
const TextArea = document.querySelector("#Tx");
const Btn = document.querySelector("Bt");
const List = document.querySelector(".container");

Btn.addEventListener("click", ()=>{
    const IputText = Input.value;
    const InputText2= TextArea.value;
    List.insertAdjacentHTML("beforend", `<li class="collection-item">${IputText}<br>${InputText2}</li>`)


})