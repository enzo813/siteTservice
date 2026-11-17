// Pegando o formulário pelo seu ID
var formulario = document.getElementById("formulario");

// Quando o formulário for enviado, esta função será executada
formulario.addEventListener("submit", function(event) {
    // Evita que a página atualize sozinha
    event.preventDefault();

    // Pegando as informações digitadas pelo usuário
    var nome = document.getElementById("nome").value;
    var veiculo = document.getElementById("veiculo").value;
    var servico = document.getElementById("servico").value;

    // Mostrando uma mensagem na tela
    var mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Obrigado, " + nome + "! Sua solicitação para " +
        servico + " do veículo " + veiculo + " foi registrada como demonstração.";

    // Limpando os campos do formulário
    formulario.reset();
});
