$(document).ready(function() {
        $('#Carrinho').click(function() {
            $('.carrinho').animate({
                width: 'toggle'
            }, 1300);  
        });
        $('#Fechar').click(function() {
            $('.carrinho').animate({
                width: 'toggle'
            }, 1300);
        });


        let Carrinho = {};
        let PrecoTotal = 0;

        $('.container .btn-success').click(function() {
            AtualizarTotal($(this));
            AtualizarCarrinho();
        });

        function AtualizarCarrinho () {
            const corpoCarrinho = document.querySelector('#tabela-itens');
            corpoCarrinho.innerHTML = "";

            for (let item in Carrinho) {
                let itemHtml = 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 
                itemHtml += 

                corpoCarrinho.innerHTML += itemHtml;
            }
        }

        function AtualizarTotal(button) {

            const carta = button.closest('.card-body')
            const ItemEscolhido = carta.find('h4').text();
            const PrecoEscolhido = parseFloat(carta.find('#Valor').text().replace(",","."));
            const FotoEscolhida = carta.parent().find('img').attr('src');

            if (Carrinho[ItemEscolhido]) {
                Carrinho[ItemEscolhido].quantidade += 1;
            } else {
                Carrinho[ItemEscolhido] = {
                    quantidade: 1,
                    preco: PrecoEscolhido,
                    foto: FotoEscolhida
                };
            }

            PrecoTotal += PrecoEscolhido;
            const Total = document.getElementById("total");
            Total.innerHTML = `R$ ${PrecoTotal.toFixed(2).replace(".",",")}`

        }

});