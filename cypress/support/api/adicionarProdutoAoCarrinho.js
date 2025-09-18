class api {
    adicionarProdutoAoCarrinho(idUsuario,idProduto,quantidade) {

        let carrinho = {
            'method': 'POST',
            'url': 'http://localhost:3000/api-docs/#/default/post_carrinho',
            failOnStatusCode: false,
            'headers': {
                'Content-Type': 'application/json',

            },
            body: {
                "userId": idUsuario,
                "productId": idProduto,
                "quantity": quantidade
            }
        }
        return carrinho
    }

    listarUsuarios() {

        let carrinho = {
            'method': 'GET',
            'url': 'http://localhost:3000/api-docs/#/default/get_users',
            failOnStatusCode: false,
            'headers': {
                'Content-Type': 'application/json',

            },
            // body: {
            //     "userId": idUsuario,
            //     "productId": idProduto,
            //     "quantity": quantidade
            // }
        }
        return carrinho
    }
};

export default new api();

