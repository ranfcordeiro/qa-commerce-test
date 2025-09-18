Feature: Avaliação

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



Scenario: Validar Campos Obrigatórios no Checkout
Given que eu estou no site QA Commerce
When clico no menu Carrinho
And verifico total de produtos "Valor total do(s) Produto(s): R$118.00"
And verifico o valor do frete "Frete: R$19.90"
And verifico o valor total com frete "Valor total + Frete fixo: R$137.90"
Then clico em Ir Para o Checkout
And clico em Finalizar Pedido
Then o sistema exibe a mensagem de Campos Obrigatórios "Por favor, preencha todos os campos obrigatório marcados com asteriscos!"
And o sistema Exibe a mensagem Nome Obrigatório "Este campo é obrigatório."
And o sistema Exibe a mensagem Sobrenome Obrigatório "Este campo é obrigatório."
And o sistema Exibe a mensagem Endereço Obrigatório "Este campo é obrigatório."
And o sistema Exibe a mensagem Número Obrigatório "Este campo é obrigatório."
And o sistema Exibe a mensagem CEP Obrigatório "Este campo é obrigatório."
And o sistema Exibe a mensagem CEP Inválido "O CEP deve ter 8 caracteres."
And o sistema Exibe a mensagem Email Obrigatório "Este campo é obrigatório."
And o sistema Exibe a mensagem Email Inválido "Por favor, insira um email válido."
And o sistema Exibe a mensagem Termos Obrigatórios "Este campo é obrigatório."



Scenario: Realizar CheckOut Completo
Given que eu estou no site QA Commerce
When clico no menu Carrinho
And verifico total de produtos "Valor total do(s) Produto(s): R$118.00"
And verifico o valor do frete "Frete: R$19.90"
And verifico o valor total com frete "Valor total + Frete fixo: R$137.90"
Then clico em Ir Para o Checkout
When preencho o nome "Teste"
And preencho o sobrenome "da Silva"
And preencho o endereço "Rua Teste"
And preencho o número "321"
And preencho o CEP "87654321"
And preencho o telefone "1234567890"
And preencho o email "teste@teste.com"
And escolho a forma de pagamento Pix
And marco que li os termos e condições
And clico em Finalizar Pedido
Then o sistema exibe a mensagem "Obrigado pelo seu pedido Teste." 
And o sistema exibe a mensagem "R$137.90" 
And o sistema exibe a mensagem "Pagamento aprovado"
And o sistema exibe a mensagem "Agradecemos a sua preferência!"