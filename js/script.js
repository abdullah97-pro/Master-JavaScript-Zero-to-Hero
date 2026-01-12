const btn = document.querySelector('button');
const bdy = document.body;

btn.textContent="Click";

btn.addEventListener('click',() => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');

    h1.textContent = "This is my first heading by js";

    div.appendChild(h1);
    bdy.appendChild(div);
})