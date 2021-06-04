window.onload = () => {
    fetch('http://localhost:5000/rezervari').then((res) => res.json()).then((data) => {
        console.log(data);
        const listaRezervari = document.getElementById('listaRezervari');
        data.forEach(dateRezervare => {
            const linkRezervare = document.createElement('a');
            linkRezervare.href = `detalii_rezervare.html?id=${dateRezervare.id}`;
            linkRezervare.innerHTML = dateRezervare.nume;
            const elemListaRezervare = document.createElement('li');
            elemListaRezervare.appendChild(linkRezervare);
            listaRezervari.appendChild(elemListaRezervare);
        });
        if (data.length > 0) {
            document.getElementById('faraRezervari').remove();
        }
    }).catch((err) => console.error(err))
}