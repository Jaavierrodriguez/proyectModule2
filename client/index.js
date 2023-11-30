if (document.querySelector("#usernameLogin")) {
    document.querySelector("#btn").addEventListener("click", function () {

        fetch('http://localhost:3007/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: document.querySelector("#usernameLogin").value, password: document.querySelector("#password").value })
        })
            .then(res => {
                if (res.status === 201) {

                    return res.json();
                } else {
                    alert("No puedes pasar")
                    throw new Error(res.statusText)
                }
            })
            .then(res => {
                localStorage.setItem("token", res.access_token);
                window.location.href = "/index.html"
            })
            .catch(e => {
                throw new Error("NO PUEDES PASAR!")
            })

    })
}

if (document.querySelector("#registerUser")) {
    document.querySelector("#btn-register").addEventListener("click", function () {

        fetch('http://localhost:3007/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: document.querySelector("#registerUser").value, password: document.querySelector("#password-register").value })
        })
            .then(res => res.json())
            .then(res => {
                window.location.href = "/login.html";
            })
            .catch(error => {
                console.error('Error en la petición de registro:', error);
            });
    });
}


const MiApi = 'http://localhost:3007/Images/allPictures'

if (document.querySelector("#images")) {

    let localToken = localStorage.getItem("token")
    let token = `Bearer ${localToken}`

    fetch(MiApi, {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
        .then((res) => res.json())
        .then((res) => {
            res.map((characters) => {
                // hago un querySelector y si type es igual al characters que que muestre charImg y sino (?) eneImg 
                document.querySelector('#images').innerHTML += `
                <img class=${characters.type === "character" ? "charImg" : "eneImg"} name="${characters.characterName}" src=${characters.image} />
                `
            });

            document.querySelectorAll('.charImg').forEach((charImg) => {
                charImg.addEventListener("click", function () {
                    // Obtengo el nombre del personaje
                    const characterName = this.getAttribute('name');

                    // Solicitud para obtener la información del personaje
                    fetch(`http://localhost:3007/characters/${characterName}`)
                        .then(res => res.json())
                        .then(character => {
                            document.querySelector("#eneBio").innerHTML = "";

                            document.querySelector("#charBio").innerHTML = `
                        <p id="name"></p>
                        <p id="surname"></p>
                        <p id="age"></p>
                        <p id="birth"></p>
                        <p id="location"></p>
                        <p id="description"></p>
                        `
                            // Mostrar la información del personaje en el elemento #charBio
                            document.querySelector('#name').textContent = `Nombre: ${character.name}`;
                            document.querySelector('#surname').textContent = `Apellido: ${character.surname}`;
                            document.querySelector('#age').textContent = `Edad: ${character.age}`;
                            document.querySelector('#birth').textContent = `Fecha de nacimiento: ${character.birth}`;
                            document.querySelector('#location').textContent = `Ubicación: ${character.location}`;
                            document.querySelector('#description').textContent = `Descripción: ${character.description}`;
                        })
                        .catch(error => console.error('Error al obtener información del personaje:', error));
                });
            });

            document.querySelectorAll('.eneImg').forEach((eneImg) => {
                eneImg.addEventListener("click", function () {
                    // Obtengo el name del enemigo
                    const enemiesName = this.getAttribute('name');

                    // Pido la información del enemigo
                    fetch(`http://localhost:3007/enemies/${enemiesName}`)
                        .then(res => res.json())
                        .then(enemi => {
                            document.querySelector("#charBio").innerHTML = "";
                            // Mostrar la información del personaje en el elemento #eneBio


                            document.querySelector("#eneBio").innerHTML = `
                        <p id="eName"></p>
                        <p id="eTypes"></p>
                        <p id="eLocation"></p>
                        <p id="eDescription"></p>
                        `

                            document.querySelector('#eName').textContent = `Nombre: ${enemi.name}`;
                            document.querySelector('#eTypes').textContent = `Tipo: ${enemi.types}`;
                            document.querySelector('#eLocation').textContent = `Ubicación: ${enemi.location}`;
                            document.querySelector('#eDescription').textContent = `Descripción: ${enemi.description}`;
                        })
                        .catch(error => console.error('Error al obtener información del enemigo:', error));
                });
            });
        })


    // DESPLEGABLES 

    const botonesDesplegables = document.querySelectorAll('.btnDesplegable');
    const contenidosDesplegables = document.querySelectorAll('.contenido-desplegable');

    botonesDesplegables.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            contenidosDesplegables.forEach((contenido, i) => {
                if (i !== index) {
                    contenido.style.display = 'none';
                }
            });

            const contenidoActual = contenidosDesplegables[index];
            contenidoActual.style.display = contenidoActual.style.display === 'block' ? 'none' : 'block';
        });
    });


}
