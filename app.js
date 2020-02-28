const Input = document.querySelector('#In');
const Text = document.querySelector('#Tx');
const List = document.querySelector('#list');
const Btn = document.querySelector('#Bt');
const DeleteBtn = document.querySelector('#delete');

Btn.addEventListener('click', () => {
    var InputText = Input.value;

    var TextValue = Text.value;

    List.insertAdjacentHTML('beforeend', `<li class="item">${InputText}<br>${TextValue}</li>`);
});
DeleteBtn.addEventListener('click', () => {
    List.removeChild();
});
