function adaugaReducere() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idRezervare = urlParams.get('id');
    fetch(`http://localhost:5000/rezervari/${idRezervare}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reducere: (localStorage.getItem('reducere') === 'false')
        })
    }).then(() => window.location.reload()).catch((err) => console.error(err));
}

window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idRezervare = urlParams.get('id');
    fetch(`http://localhost:5000/rezervari/${idRezervare}`).then((res) => {
        if (res.status == 404) window.location.replace('rezervare404.html');
        else return res.json();
    }).then((data) => {
        document.getElementById('nume').innerHTML = data.nume;
        document.getElementById('email').innerHTML = data.email;
        document.getElementById('reducere').innerHTML = data.reducere ? "da" : "nu";
        localStorage.setItem('reducere', data.reducere);
    }).catch((err) => console.error(err));
}