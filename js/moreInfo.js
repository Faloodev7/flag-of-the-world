const unPais = document.getElementById ("banderas");
const busqueda = new URLSearchParams(window.location.search)
const parametros= busqueda.get ("name")
console.log(parametros)

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const obtenerInfo = await res.json()
        // cadaPais(obtenerInfo)
        const filtrarInfo = obtenerInfo.filter (item => item.name === parametros)
        cadaPais(filtrarInfo)

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
                    <b>Country Code:</b>
                        ${item.alpha3Code}
                    </p>
                    <p>
                        <b>CallingCodes: </b>
                        ${item.callingCodes}
                    </p>
                    <p>

                        <b>Top Level Domain: </b>
                        ${item.topLevelDomain}
                </p>
                    <p>
                        <b>Population: </b>
                        ${item.population}
                    </p>
                    <p>
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <b>Subregion: </b>
                        ${item.subregion}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                    <p>
                        <b> Main language: </b>
                        ${item.languages[0].name}
                </p>
                <p>
                        <b>Borders: </b>
                        ${item.borders}
                </p>
                <p>

                <b>currencies: </b>
                ${item.currencies[0].name}
                (${item.currencies[0].code}
                ${item.currencies[0].symbol})
        </p>
        
                </div>
            </article>
            `
    }

    banderas.innerHTML = elementos

}