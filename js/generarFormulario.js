function generarFormulario(tipo, numPeriodos) {
    let html = `<form class="form-${tipo}" action="#" method="post">`;

    // Titulos
    html += `
        <div class="row">
            <div class="col-sm-1 mb-3">
                <label for="tarifas" class="form-label">Tarifas</label>                                    
            </div>
            <div class="col-sm-2 mb-3">
                <label for="cf" class="form-label">CF</label>                                                                        
            </div>
            <div class="col-sm-2 mb-3">
                <label for="csc" class="form-label">CSC</label>                                    
            </div>
            <div class="col-sm-1 mb-3">
                <label for="pa" class="form-label">PA</label>                                    
            </div>            
            <div class="col-sm-1 mb-3">
                <label for="ent2" class="form-label">EnT2</label>                                    
            </div>
            <div class="col-sm-1 mb-3">
                <label for="epta" class="form-label">ePta</label>                                    
            </div>
            <div class="col-sm-2 mb-3">
                <label for="eValle" class="form-label">eValle</label>                                    
            </div>
            <div class="col-sm-2 mb-3">
                <label for="eResto" class="form-label">eResto</label>                                    
            </div>`;    

    // Generar los periodos
    for (let i = 1; i <= numPeriodos; i++) {
        html += `
            <!-- Periodo ${i} -->
            <div class="row">
                <div class="col-sm-1 mb-3">`
                if (i === 1) {
                    html += `<p>T1G1 0 -400kwh</p>`;
                  } else if (i === 2) {
                    html += `<p>T1G2 401-600kwh</p>`;
                  } else if (i === 3) {
                    html += `<p>T1G3 601kwh+</p>`;
                  } else if (i === 4) {
                    html += `<p>T2</p>`;
                  } else if (i === 5) {
                    html += `<p>T3BT</p>`;
                  }
                `</div>
                <div class="col-sm-2 mb-3">
                    <input class="form-control" type="text" name="cf" placeholder="">
                </div>
                <div class="col-sm-2 mb-3">
                    <input class="form-control" type="text" name="csc" placeholder="">
                </div>
                <div class="col-sm-1 mb-3">
                    <input class="form-control" type="text" name="pa" placeholder="">
                </div>
                <div class="col-sm-1 mb-3">
                    <input class="form-control" type="text" name="pa" placeholder="">
                </div>
                <div class="col-sm-1 mb-3">
                    <input class="form-control" type="text" name="ent2" placeholder="">
                </div>
                <div class="col-sm-2 mb-3">
                    <input class="form-control" type="text" name="epta" placeholder="">
                </div>
                <div class="col-sm-2 mb-3">
                    <input class="form-control" type="text" name="evalle" placeholder="">
                </div>
                <div class="col-sm-2 mb-3">
                    <input class="form-control" type="text" name="eresto" placeholder="">
                </div>
                
            </div>`;
                
        
    }

    html += `<button type="submit" class="btn btn-primary" tabindex="5">Descargar</button></form>`;

    return html;
}

// Generar los formularios T2 y T3 con 2 periodos cada uno
const formularioT2HTML = generarFormulario('T2', 5);
//const formularioT3HTML = generarFormulario('T3', 12);

// Insertar los formularios en los contenedores correspondientes
document.getElementById('formulario-t2-container').innerHTML = formularioT2HTML;
//document.getElementById('formulario-t3-container').innerHTML = formularioT3HTML;