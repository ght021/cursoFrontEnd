if(typeof document !== "undefined"){
    const buttonMenos = document.getElementById('buttonMenosCocomenta');
    const buttonMas = document.getElementById('buttonMasCocomenta')
    const labelContador = document.getElementById('contadorCocomenta');
    let value = Number(labelContador.textContent);
    
    function operacion(){
        /*  if(value === 0){
             buttonMenos.disabled = true;
         }else{
             buttonMenos.disabled = false;
         }
         */
 
         /******* operador ternario ******/
         // pregunta ? respuesta si cumple : respuesta si no cumple
        value === 0 ? buttonMenos.disabled = true : buttonMenos.disabled = false;
    };

    operacion();
    
    buttonMenos.addEventListener('click', function(event){
        event.preventDefault()
        value --;
        labelContador.textContent = value;
        operacion();
    });

    buttonMas.addEventListener('click', function(event){
        event.preventDefault();
        value ++;
        labelContador.textContent = value;
        operacion()
    });
} 
