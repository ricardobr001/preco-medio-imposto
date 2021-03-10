# Calculador de preço médio de ações

### Por que foi feito?
Ninguém merece ficar abrindo a nota de corretagem e ficar calculado o preço médio das ações que você só comprou pra **buy & hold**, então surgiu a idéia de fazer um programa de ler a nota de corretagem e calcular o preço médio das ações.

### Como funciona?
O programa lê o pdf disponibilizado pela corretora, extrai o nome de uma ação (ou parte do nome), extrai o preço da compra e a quantidade.


Caso alguma ação se repita, ele calcula o preço médio da compra baseado na ação já encontrada anteriormente com a que acabou de ser encontrada.


Após ler todas as notas o programa ira criar um arquivo csv com o nome **preco-medio.csv** na raiz desse projeto.

### Suporte
Atualmente o programa suporta algumas ações especificas e as notas de corretagem da corretora **Rico e XP Investimentos**.


**Não há garantia** de que os valores encontrados por esse programa estejam 100% corretos, por isso verifique se os valores encontrados por este estão aceitáveis ou próximo de valores plausíveis.

### Como usar
- O projeto foi feito utilizando node 12
- Clone o projeto
- Crie uma pasta na raiz do projeto com o nome `files`
- Adicione as nota de negociação dentro da pasta `files`
- `npm install`
- `npm run build`
- `npm run execute`

### Melhorias
- Adicionar testes automatizados
- Melhorar a legibilidade do código em algumas partes
- Caso queira fazer algum ajuste, basta abrir um PR =)
