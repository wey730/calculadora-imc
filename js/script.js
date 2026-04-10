<script>
        // Correção automática
        function corrigirAltura(valor) {
            if (valor > 3) { // se digitou em cm
                return valor / 100;
            }
            return valor;
        }
        function corrigirPeso(valor) {
            if (valor > 300) { // valor exagerado
                return valor / 10;
            }
            return valor;
        }

        // Enter para avançar
        function avancarComEnter(campoAtual, campoProximo) {
            document.getElementById(campoAtual).addEventListener("keydown", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    document.getElementById(campoProximo).focus();
                }
            });
        }
        avancarComEnter("nome", "idade");
        avancarComEnter("idade", "peso");
        avancarComEnter("peso", "altura");
        avancarComEnter("altura", "btnCalcular"); // agora vai até o botão

        // Cálculo IMC
        function calcularIMC() {
            const nome = document.getElementById("nome").value;
            const idade = parseInt(document.getElementById("idade").value);
            let peso = parseFloat(document.getElementById("peso").value);
            let altura = parseFloat(document.getElementById("altura").value);

            if (!nome || !idade || !peso || !altura) {
                document.getElementById("resultado").innerText = "Por favor, preencha todos os campos.";
                document.getElementById("resultado").className = "";
                return;
            }

            peso = corrigirPeso(peso);
            altura = corrigirAltura(altura);

            const imc = peso / (altura * altura);
            let mensagem = "";
            let classe = "";

            if (imc < 18.5) {
                mensagem = "Você está abaixo do peso.\nProcure um profissional para acompanhamento.";
                classe = "abaixo";
            } else if (imc < 25) {
                mensagem = "Você está com peso normal.\nSe mantenha saudável!";
                classe = "normal";
            } else if (imc < 30) {
                mensagem = "Você está com sobrepeso.\nEssa condição requer cuidado com ajuda de um profissional.";
                classe = "sobrepeso";
            } else {
                mensagem = "Você está com obesidade.\nBusque ajuda profissional, sua condição pode trazer vários problemas de saúde.";
                classe = "obesidade";
            }

            const resultado = document.getElementById("resultado");
            resultado.innerText = `Olá, ${nome}! Você tem ${idade} anos.\nSeu IMC é: ${imc.toFixed(2)}\n${mensagem}`;
            resultado.className = classe;
        }
    </script>
