**1FN**: Estabelece que cada valor em uma tabela deve ser atômico/indivisível.
Nenhum campo deve conter múltiplos valores ou listas. O campo **endereco** contem múltiplos valores como rua, numero, cidade e estado. Para garantir a **1FN**, é necessário dividir o campo em colunas separadas.

**2FN**: Uma tabela deve estar na 1FN e todos os atributos não chave devem depender totalmente da chave primária.
	*Dica*: *se sua tabela tem uma **PK** simples não existe a possibilidade de termos dependência parcial e por tanto*
	*ela já se encontra na 2FN.*

**3FN**: Uma tabela deve estar na 2FN e **nenhuma** coluna não chave depende de outra coluna não chave.
 nosso exemplo --> Relação: Estado -> Cidade
elimina dependências transitivas entre os atributos não chave, garantindo que cada atributo não chave dependa apenas da chave primária, não havendo dependências entre eles.

**LEFT JOIN**: retorna as linhas da tabela à esqueda da junção e as linhas correspondentes da teable à direita. Se **não** houver correspondência, os valores da tabela à direita serão **NULL**.