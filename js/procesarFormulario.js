function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    }

function procesarFormulario(formulario, empresa) {
    const datosFormulario = {};

    const filas = formulario.querySelectorAll('.row');
    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i];
        const campos = fila.querySelectorAll('input');
        const objetoCampos = {};

        campos.forEach(campo => {
            objetoCampos[campo.name] = campo.value;
        });

        datosFormulario[i] = objetoCampos;        
    }
    
    console.log(datosFormulario);
    // Convertir el objeto a una cadena de texto y mostrarlo en un alert
    //alert(JSON.stringify(datosFormulario)); 

    //downloadObjectAsJson(datosFormulario,'tarifas');
    downloadObjectAsJson(datosFormulario, empresa);
    
}

document.addEventListener('DOMContentLoaded', function() {
    //const formularios = document.querySelectorAll('.formulario');
    const formulario = document.querySelector('.formulario');
    let empresa = null;
    
    let buttons = document.querySelectorAll('.button-edenor, .button-edesur');
    buttons.forEach(button =>{
        button.addEventListener('click', function(event){
            if (event.target.classList.contains('button-edenor')){
                empresa = 'edenor';
            } else {
                empresa = 'edesur';
            }
        });
    })
    
    //formularios.forEach(formulario => {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();      
                
        procesarFormulario(formulario, empresa);
    });
    //});
});