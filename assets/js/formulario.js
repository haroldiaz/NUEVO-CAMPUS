//(function(){
    var formulario = document.getElementById('formulario'),
        Usuario = formulario.Usuario,
        Contraseña = formulario.Contraseña,
        tipo = formulario.tipo,
        error = document.getElementById('error');

    function validarUsuario(e){
        if(Usuario.value == '' || Usuario.value == null){
            console.log('Por favor agrega tu usuario');
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor agrega tu usuario</li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarContraseña(e){
        if(Contraseña.value == '' || Usuario.value == null){
            console.log('Por favor agrega tu contraseña');
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor agrega tu contraseña</li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarTipo(e){
        if(tipo.value == '' || tipo.value == null){
            console.log('Por favor agrega tu rol');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor agrega tu rol </li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }  
    }


    function validarFormulario(e){
        error.innerHTML = '';

        validarUsuario(e);
        validarContraseña(e);
        validarTipo(e);
    }

    formulario.addEventListener('submit', validarFormulario);
//}())