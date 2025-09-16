Feature: teste

Scenario: Escolher Produto e Validar Carrinho
Given que eu estou no site QA Commerce
And insiro a quantidade "2"
When clico para adicionar no carrinho
Then o sistema deve exibir a mensagem "Produto adicionado ao carrinho!"
Given clico no menu Carrinho
When o sistema exibe o produto 'Moletom com capuz "Se você acha que nada é impossível..."'
Then o sistema deve exibir a valor unitário de "Preço: R$59.00"
And o sistema deve exibir a valor total de "Total: R$118.00"
And o sistema deve exibir a quantidade "Quantidade: 2"
