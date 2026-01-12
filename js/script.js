const btn = document.querySelector('button');
const bdy = document.body;

btn.textContent="Click";

btn.addEventListener('click',() => {
    const div = document.createElement('div');
    div.textContent = "Hello this is js div";
    bdy.appendChild(div);
})