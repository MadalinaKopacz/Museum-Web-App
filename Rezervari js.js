function checkboxOnCheck(e) {
    if (e.target.checked) {
        document.getElementById('caracterPersStatus').innerHTML = 'da';
        var el = document.getElementById("Negare");
        el.parentNode.removeChild(el);
    } else {
        document.getElementById('caracterPersStatus').innerHTML = 'nu';
    }
}

function validateEmail(e) {
    const email = e.currentTarget.value;
    const emailValidated = document.getElementById('emailValidated');
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        emailValidated.classList.add('valid');
        emailValidated.classList.remove('invalid');
        emailValidated.value = 'Email valid';
        document.getElementById('inputEmail').value = new String(email).toLowerCase();
    } else {
        emailValidated.classList.add('invalid');
        emailValidated.classList.remove('valid');
        emailValidated.value = 'Email invalid';
    }
}

function submitFormRezervare(e) {
    e.preventDefault();
    const nume = document.getElementById('inputNume').value;
    const email = document.getElementById('inputEmail').value;
    const reducere = false;
    fetch('http://localhost:5000/rezervari', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nume: nume,
            email: email,
            reducere: reducere
        })
    }).then(() => {
        window.location.replace('lista_rezervari.html')
    }).catch((err) => console.error(err))
}

window.onload = () => {
    const caracterPersStatus = document.createElement('p');
    caracterPersStatus.id = 'caracterPersStatus';
    document.getElementById('caracterPersDiv').appendChild(caracterPersStatus);
    document.getElementById('inputCaracterPers').onchange = checkboxOnCheck;
    document.getElementById('inputEmail').onchange = validateEmail;
    document.getElementById('formRezervare').onsubmit = submitFormRezervare;
}