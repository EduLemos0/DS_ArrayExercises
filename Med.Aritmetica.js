var convidados = [];

while(true) {
    var nome = prompt("Digite o nome do convidado");

    if(nome == "S"){
        break;
    } else {
         var idade = Number(prompt("Digite a idade do convidado"));
					if(idade < 18){
            alert("Você não tem a idade mínima permitda para participar do evento");
						break;
        }
        var cpf = prompt("Digite o CPF do convidado");
        convidados.push({"nome":nome, "idade":idade, "CPF":cpf});
	    }
    } 

    console.log(convidados);
