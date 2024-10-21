$(document).ready(function() {

        let Carrinho = {};
        let PrecoTotal = 0;

        $('.container .btn-success').click(function() {
            AtualizarTotal($(this));
            AtualizarCarrinho();
        });

        function AtualizarCarrinho () {
            const corpoCarrinho = document.querySelector('.carrinho-itens');
            corpoCarrinho.innerHTML = "";

            for (let item in Carrinho) {
                let itemHtml = '<div class="item mt-3">'
                itemHtml += '<div class="card text-center">' 
                itemHtml += `<h2 class="h4 mb-3"> ${Carrinho[item].nome}</h2>`
                itemHtml += `<img src="${Carrinho[item].foto}" class="rounded">`
                itemHtml += '<div class="btn-carrinho d-flex  justify-content-around align-items-center align-self-center">'
                itemHtml += `<button class="btn btn-success">+</button>`
                itemHtml += `<p>${Carrinho[item].quantidade}</p>`
                itemHtml += `<button class="btn btn-danger">-</button>`
                itemHtml += '</div>'
                itemHtml += '</div>'
                itemHtml += '</div>'
                itemHtml += '</div>'

                corpoCarrinho.innerHTML += itemHtml;
            }
        }

        function AtualizarTotal (button) {

            const carta = $(button).closest('.card')
            const ItemEscolhido = carta.find('h4').text();
            const PrecoEscolhido = parseFloat(carta.find('strong').text().replace("R$ ",""));
            const FotoEscolhida = carta.find('img').attr('src');

            if (Carrinho[ItemEscolhido]) {
                Carrinho[ItemEscolhido].quantidade += 1;
            } else {
                Carrinho[ItemEscolhido] = {
                    quantidade: 1,
                    preco: PrecoEscolhido,
                    foto: FotoEscolhida,
                    nome: ItemEscolhido
                };
            }

            PrecoTotal += PrecoEscolhido;
            const Total = document.getElementById("total");
            Total.innerHTML = `R$ ${PrecoTotal.toFixed(2).replace(".",",")}`

        }

        $('#Carrinho').click(function(){
            $('.carrinho').animate({
                width: 'toggle'
            }, 1300)

            console.log("abracadabra")
        })

});