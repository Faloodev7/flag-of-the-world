// const banderas = document.querySelector('#banderas')

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const obtenerInfo = await res.json()
        cadaPais(obtenerInfo)
        busquedaCliente(obtenerInfo) // activa formulario search
        filtrarDatos(obtenerInfo) // activa filtros region
        console.log(obtenerInfo)

    } catch (error) {
        console.log(error)
    }
}

const cadaPais = (obtenerInfo) => {

    let elementos = ''

    for (let [index, item] of obtenerInfo.entries()){
            // console.log(item)
            elementos += `
            <article class="card">
            <img src="${item.flag}" alt="Bandera ${item.name}">
            <div class="contentcard"> 
                    <h3>${item.name}</h3>
                    <p>
                        <b>Population: </b>
                        ${item.population}
                    </p>
                    <p>
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                    <p>
                    <a href="pais.html?name=${item.name}">More Info</a>
                    </p>
                </div>
            </article>
            `
    }

    banderas.innerHTML = elementos

}