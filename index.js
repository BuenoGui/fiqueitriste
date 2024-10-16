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
                let itemHtml = '<div class="item">';
                itemHtml += '<div class="card" style="max-width: 360px;">' 
                itemHtml += '<div class="d-flex">'
                itemHtml += `<img src="${Carrinho[item].foto}">`
                itemHtml += '<div class="card-body d-flex">'
                itemHtml += `<h2 class="h4">${item}</h2>`
                itemHtml += '<div class="d-flex">'
                itemHtml += '<p>quantidade:</p>'
                itemHtml += '<div class="d-flex">'
                itemHtml += '<button type="button" class="btn btn-light">+</button>'
                itemHtml += '<strong>1</strong>'
                itemHtml += '<button type="button" class="btn btn-light">-</button>'
                itemHtml += '</div>'
                itemHtml += '</div>'
                itemHtml += '</div>'
                itemHtml += '</div>'
                itemHtml += '</div>'
                itemHtml += '</div>'

                corpoCarrinho.innerHTML += itemHtml;
            }
        }

        function AtualizarTotal (button) {

            const carta = $(button).closest('.card-body')
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

        $('#Carrinho').click(function(){
            $('.carrinho').animate({
                width: 'toggle'
            }, 1300)

            console.log("abracadabra")
        })

});