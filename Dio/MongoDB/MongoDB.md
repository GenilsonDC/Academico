O MongoDB é um banco de dados NoSQL orientado a documentos.
Grandes volumes de dados, escalabilidade horizontal e modelagem flexível.
Não exige esquema
Permite que os documentos sejam armazenados em formato BSON (Binary JSON), proporcionando uma estrutura semiestruturada.
Comunidade ativa e recursos de suporte.

É utilizado para aplicações **WEB**, onde a flexibilidade e a escalabilidade são cruciais para lidar com volumes de variáveis de dados.
**Análise de Big Data**: análise de grandes volumes de dados não estruturados ou semiestruturados, fornecendo uma plataforma para armazenar e processar esses dados.
**Armazenamento de dados semiestruturados**: Permite a inserção de documetos com estruturas diferente em uma mesma coleção.

​	**Desvantagens**
Menor consistência imediata em comparação com bancos de dados relacionais.
Consultas complexas podem exigir um maior conhecimento e planejamento adequado.
Maior consumo de espaço de armazenamento em comparação com banco de dados relacionais devido à flexibilidades dos documentos.

**Casos de uso**
Geolocalização: com suas funcionalidades de consulta geoespacial, é adequado para casos de uso que envolvem dados baseados em localização, como aplicativos de mapeamento e rastreamento.

**Estrutura**: Baseado em documentos, o database é baseado em um agrupamento lógico de documentos que são as coleções.

**Coleções** não exigem esquema ou que os documentos tenham a mesma estrutura.

​	*Obs. o MongoDB não faz validações dos documentos, não verifica se são distintos*

​	**Características**: Os nomes das coleções devem seguir algumas regras:

- Devem começar com uma letra ou um undercore _
- Podem conter letras, números ou underscores
- não podem ser vazios
- Não podem ser mais de 64bytes de comprimento

**Documentos** são armazenados em BSON (Binary JSON), que são estruturas flexíveis e semiestruturadas

Cada documento possui um identificador único chamado "**_id**"

é composto de Key-Value

Tamanho máximo: cada documento no MongoDB pode ter um tamanho máximo de 16MB

de documentos

Flexibilidade na evolução do esquema

**Tipos de dados simples**

- String

- Number

- Boolean

- Date

- Null

- ObjectdiD

  

**tipos de dados complexos**

- Array
- Documento Embutido(Embedded Document)
- Referência (Reference)
- GeoJSON

> 

**Estratégia de modelagem de dados**
A modelagem de dados no MongoDB deve ser orientadas palas consultas que serão realizadas com mais frequência.
	**Inner Documents**: no MongoDB, é comun desnormalizazr os dados para evitar operações de junção(join)
	custosas. Isso significa que os dados relacionados podem ser armazenados juntos em um início documento, em
	vez de serem distribuídos em varias coleções.
	**Quando usar**: Os dados aninhados são sempre acessados juntamente como o documento pai,
				Os dados aninhados são específicos para o documento pai.
				A cardinalidade do relacionamento é 1:N 

> **Estrutura**
>
> {
> "_id":"fe323f",
> "nome":"Genilson do Carmo",
> "email":"email@com.br",
> "data_nacimento":"1991-11-10",
> "enderecos":[{
> "rua":"Rua A",
> "numero":"123",
> "cidade":"Cidade X",
> "estado":"Estado EX",
> }],
> "reservas":[{
> "data":"2023-11-05",
> "status":"PENDENTE",
> "destino":"**objectID**("112")"
> }],
>
> }

​	**Referências**: Forma de relacionar os documentos entra si.
​		**Quando usar:** Os dados tem seu próprio significado e podem ser acessados independentemente do
​					documento pai.
​					Os dados tem uma cardinalidade mais alta (vários usuários podem ter reservas).
​		**Quando não usar**: Se os dados aninhados precisam ser consultados e atualizados independentemente do
​					documento pai, é mais adequado utilizar coleções separadas.



> **Estrutura**
>
> {
> "_id":objectID("112"),
> "destino":objectID("715"),
> "data":"2014-12-03",
> "status":"ATIVA",
> "usuario":objectID("2215")
> }

**Operações**

​	**Collection**
​	A criação de coleções pode ser via interface gráfica ou shell **`>_MONGOSH`**: db.createCollection("Usuarios")
​	**Shell comands**
​	*Pode utilizar no terminal de preferencia basta digitar `mongosh`, mas perde o auto complete*

	- ![image-20240508084137092](C:\Git\Academico\Dio\MongoDB\image-20240508084137092.png)


​	

​	**Document**
​	Pode ser por interface grafica ou  shell **`>_MONGOSH`**: 
​	**db.Usuarios.insertOne({})** para inserir um documento ou
​	**db.Usuarios.insertMany([{}])** para inserir dois ou mais documentos.

```
db.usuarios.insertMany([
{
	"nome":"Genilson do Carmo",
	"email":"genilsonemail@com.br",
	"data_nacimento":"1991-11-10",
	"enderecos":[{
	"rua":"Rua A",
	"numero":"123",
	"cidade":"Cidade X",
	"estado":"Estado EX"
}]
},
{
	"nome":"Natalia do Carmo",
	"email":"nataliaemail@com.br",
	"data_nacimento":"1995-01-10",
	"enderecos":[{
	"rua":"Rua A",
	"numero":"123",
	"cidade":"Cidade X",
	"estado":"Estado EX"}]
	},
]
)
```

![image-20240508085111785](C:\Git\Academico\Dio\MongoDB\image-20240508085111785.png)

**Consultando Documment**

> ​	**Find**
>  *Consulta todos os documentos em uma coleção*
> **db.minha_colecao.find()**
>
>  *Consulta documentos com um filtro específico*
> **db.minha_colecao.find**( chave: valor })
>
>  *Consulta documentos com projeção (exibindo apenas certos campos)*
> **db.minha_colecao.find**({}, { campo1: 1, campo2: 1 })

> ​	**Update**
>
> *Atualiza um único documento que corresponde ao filtro*
> **db.minha_colecao.updateOne**({ filtro }, { **$set**: { campo: novo_valor } })
>
> *Atualiza todos os documentos que correspondem ao filtro*
> **db.minha_colecao.updateMany**({ filtro }, { **$set**: { campo: novo_valor } })

> ​	**Delete**
> Exclui um único documento que corresponde ao filtro*
> **db.minha_colecao.deleteOne**({ filtro })
>
> *Exclui todos os documentos que correspondem ao filtro*
> **db.minha_colecao.deleteMany**({ filtro })

> ​	**Replace**
>
>  *Substitui um único documento que corresponde ao filtro*
> **db.minha_colecao.replaceOne**({ filtro }, { novo_documento })

Podemos adicionar os operadores lógicos: **and, or, not**
Operadores de comparação: **$eq: $ne: $gt: $gte $lt: $lte: $in: $nin**

**Projeções** se asemelha ao select
**Ordenação Sorch**
**Paginação** db.usuarios.find().skip(10).limit(5)