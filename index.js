$(document).ready(function() {
    let Carrinho = {};
    let PrecoTotal = 0;

    $('#Carrinho').click(function(){
        $('.carrinho').animate({
            width: 'toggle'
        }, 1300)
    });

    //lógica do carrinho 

    $('.carousel-item .btn-success, .container .btn-success').click(function() {
        AtualizarTotal($(this));
        AtualizarCarrinho();
    });

    $(document).on('click', '.carrinho-itens .btn-success', function() {
        const itemNome = $(this).closest('.card').find('h2').text().trim();
        Carrinho[itemNome].quantidade += 1;
        PrecoTotal += Carrinho[itemNome].preco;
        AtualizarCarrinho();
        AtualizarPrecoTotal();
    });

    $(document).on('click', '.carrinho-itens .btn-danger', function() {
        const itemNome = $(this).closest('.card').find('h2').text().trim();
        Carrinho[itemNome].quantidade -= 1;
        PrecoTotal -= Carrinho[itemNome].preco;
        
        if (Carrinho[itemNome].quantidade <= 0) {
            delete Carrinho[itemNome];
        }
        
        AtualizarCarrinho();
        AtualizarPrecoTotal();
    });

    function AtualizarCarrinho() {
        const corpoCarrinho = document.querySelector('.carrinho-itens');
        corpoCarrinho.innerHTML = "";

        for (let item in Carrinho) {
            let itemHtml = '<div class="item mt-3">'
            itemHtml += '<div class="card text-center">' 
            itemHtml += `<h2 class="h4 mb-3">${Carrinho[item].nome}</h2>`
            itemHtml += `<img src="${Carrinho[item].foto}" class="rounded">`
            itemHtml += '<div class="btn-carrinho d-flex justify-content-around align-items-center align-self-center">'
            itemHtml += `<button class="btn btn-success">+</button>`
            itemHtml += `<p>${Carrinho[item].quantidade}</p>`
            itemHtml += `<button class="btn btn-danger">-</button>`
            itemHtml += '</div>'
            itemHtml += '</div>'
            itemHtml += '</div>'

            corpoCarrinho.innerHTML += itemHtml;
        }

        if (Object.keys(Carrinho).length === 0) {
            corpoCarrinho.innerHTML = '<p class="text-center">Carrinho vazio</p>';
            PrecoTotal = 0;
            AtualizarPrecoTotal();
        }
    }

    function AtualizarTotal(button) {
        let ItemEscolhido, PrecoEscolhido, FotoEscolhida;
        
        // Verifica se o botão está dentro de um carousel-item
        if ($(button).closest('.carousel-item').length) {
            const carouselItem = $(button).closest('.carousel-item');
            ItemEscolhido = carouselItem.find('h4').text().trim();
            PrecoEscolhido = parseFloat(carouselItem.find('strong').text().replace("R$ ","").replace(",","."));
            FotoEscolhida = carouselItem.find('img').attr('src');
        } else if ($(button).closest('#total').length) {
            console.log("corinthias")
        }
        else {
            const carta = $(button).closest('.card');
            ItemEscolhido = carta.find('h4').text().trim();
            PrecoEscolhido = parseFloat(carta.find('strong').text().replace("R$ ","").replace(",","."));
            FotoEscolhida = carta.find('img').attr('src');
        }

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
        AtualizarPrecoTotal();
    }

    function AtualizarPrecoTotal() {
        const Total = document.getElementById("total");
        Total.innerHTML = `Total: R$ ${PrecoTotal.toFixed(2).replace(".",",")}`;
    }

    // MODAL

    $("#finalizar").on('click', function() {
        $("#modal").modal('show')
    } )

    $(".btn-login").on('click', function() {
        $("#modal_login").modal('show')
    })

});