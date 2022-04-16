const formulario = document.getElementById ("formulario");
const inputFormulario = document.getElementById("inputFormulario");

const busquedaCliente = obtenerInfo => {
    formulario.addEventListener("keyup", e =>{
        e.preventDefault()
        const clienteEscribiendo = inputFormulario.value.toLowerCase()
        const filtrarApi = obtenerInfo.filter(item =>{
        const letraApi = item.name.toLowerCase()
        if (letraApi.indexOf(clienteEscribiendo) !== -1) {
            return item
        }
    })
    cadaPais(filtrarApi)
})
}
// const formularioFiltrado = data.filter(item => {
//     const textoApi = item.name.toLowerCase()
//     if (textoApi.indexOf(textoCliente) !== -1) {
//         return item