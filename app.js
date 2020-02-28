const Input = document.querySelector('#In');
const Text = document.querySelector('#Tx');
const List = document.querySelector('#list');
const Btn = document.querySelector('#Bt');
Btn.addEventListener('click', () => {
    var InputText = Input.value;

    var TextValue = Text.value;

    List.insertAdjacentHTML('beforeend', `<li class="item">${InputText}: ${TextValue}</li>`);
});
List.addEventListener('click', event => {
    const elementLi = event.target.closest('li');
    List.removeChild(elementLi);
});
