const toggleButton = document.getElementById('toggle-mode');
const body = document.body;


function atualizarModo() {
    body.classList.toggle('escuro', body.classList.contains('claro'));
    body.classList.toggle('claro', !body.classList.contains('escuro'));
}


toggleButton.addEventListener('click', () => {
    if (body.classList.contains('claro')) {
        body.classList.remove('claro');
        body.classList.add('escuro');
    } else {
        body.classList.remove('escuro');
        body.classList.add('claro');
    }
});


body.classList.add('claro');

