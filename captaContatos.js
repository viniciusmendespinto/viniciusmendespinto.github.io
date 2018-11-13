/*
  Layout para Captação de contatos
  Autor: Vinícius Mendes Pinto
*/
    var vetorNomes = new Array();
    var vetorEmails = new Array();
    var nome;
    var email;

    //document.getElementById('botaoConfirmar').onclick = function(e) {

    //ação após clicar no botão Confirmar
      function confirmar(){
      
        nome = document.getElementById('nome').value;
        email = document.getElementById('email').value;

        if(nome=="" || nome==null){
          return;
        }
        if(email=="" || email==null){
          return;
        }
        
        //se não tiver campo vazio grava nos vetores
        vetorNomes.push(nome);
        vetorEmails.push(email);

        //alert(vetorNomes);
        //alert(vetorEmails);

        //limpa os inputs
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        alert('Confirmado com sucesso!');
	  }


    