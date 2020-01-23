var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacisentes");
    xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            //json
            // console.log(resposta);
            // console.log(typeof resposta);
            //transformando json para objeto
            var pacientes = JSON.parse(resposta);
            // console.log(pacientes);
            // console.log(typeof pacientes);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);

            });
        } else {
            console.log("Problema na requisicao");
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        

    });
    xhr.send();


});