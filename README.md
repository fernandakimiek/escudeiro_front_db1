# Projeto Mestre dos Códigos - DB1 GROUP
Projeto feito em HTML, CSS e Javascript sem frameworks. Estilo baseado na tela da Netflix. 

Desenvolver uma landing page, baseada na página principal do Youtube Music e Netflix.

A página pode ser do tema que o candidato preferir, devendo apenas seguir e a mesma estrutura visual e contendo os itens apresentados nos requisitos a seguir.

## Requisitos:

- Header com logo da aplicação, itens do menu e item de menu do usuário (avatar). O Header deve ter fundo transparente quando o scroll da página estiver no topo e alterar para um fundo opaco quando for realizado o scroll
- Um item principal em destaque
- Listagem dos itens organizados em Carrossel
- Footer contendo informações do desenvolvedor
- Layout responsivo para as resoluções mais utilizadas (Ex: 1366x768, 360x640, 768x1024)


## Perguntas de Javascript:

1 - Explique com suas palavras a diferença entre a utilização de var, const e let?

var: variável global que funciona mesmo fora de blocos; não é muito utilizado;

let: variável que funciona somente dentro do bloco onde ele foi criado. 
Não é possivel declarar mesmo nome de variável no mesmo bloco porém é possivel criar mesmo nome em blocos separados; 
só é possivel modificar o valor dele dentro do próprio bloco;

const: é uma constante; 
só funciona dentro do bloco porém é imutável. 
Não é possivel reatribuir um valor porém é possivel modificar o valor dele se for um objeto ou array; é o mais utilizado;

2 - Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?

    Funções normais não guardam escopo
[x] Funções normais guardam escopo x
    Arrow function são mais rápidas
    Arrow function podem ser instanciadas
[x] Arrow function não guardam escopo x
 
3 - qual o valor da constante name após a execução da função?
 content = {
  name: "John",
  getName: function() {
    this.name = "James"
    return this.name
  }
}

userData = {
  name: "Luke",
  getName: content.getName
}
this.name = "Walter"
const name = userData.getName()

    John
    Luke
 [x]James
    Walter
 
4 - Qual o retorno da função event.getTitle()
function Event(name, day) {
  this.date = day
  this.name = name

  this.getName = function() {
    return this.name
  }
  this.getDate = function() {
    return this.date
  }
}

const event = new Event("04/02/2019", "Event Test")

Event.prototype.getTitle = function() {
  return `The event ${this.name} will take place on ${this.date} `
}
event.getTitle()

 [x] The event 04/02/2019 will take place on Event Test
    The event undefined will take place on undefined
    Uncaught TypeError
    The event null will take place on null
 
 
5 - Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

- document.getElementById(): é o mais utilizado e para selecionar o elemento é preciso passar o id referente ao elemento que quer selecionar;
- document.getElementsByTagName(): é utilizado quando precisa selecionar todos elementos com a mesma tag, por exemplo uma tag <span>;
- document.getElementsByClassName(): é utilizado para selecionar os elementos que tem a mesma classe no atributo 'class';

6 - Como inserir um evento em determinado elemento?

- Utilizando addEventListener() passando o evento e o elemento dentro da função;

7 - Como remover um evento em determinado elemento?

- Utilizando removeEventListener() passando o evento e o elemento que deseja remover;


8 - Descreva com suas palavras o que é event bubbling?

O bubbling ocorre basicamente quando tem elementos aninhados e ocorre um efeito "borbulhamento", 
um evento que é acionado no último elemento será propagado nos elementos aninhados a ele em ordem crescente;
Para que não ocorra esse bubbling é usado o event.stopPropagation(), como o nome ja diz ele 'para a propagação' e o evento ocorre somente no elemento que está vinculado a ele;


9 - Descreva qual a diferença nos métodos de declaração de objetos?

const object = {} --> Cria um objeto vazio;
const object = new Object() --> Cria uma nova instância de um objeto baseado no construtor;
const object = Object.create() --> Cria um novo objeto que recebe parâmetros.É passado como parâmetro o protótipo do novo objeto a ser criado.


10 - Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?

As duas opções são possíveis realizar requisições assíncronas, porém a Fetch API é uma versão melhorada do XMLHttpRequest.

XMLHttpRequest: O nome é XML mas ela pode resgatar qualquer tipo de dado. É criado um objeto XMLHttpRequest, onde adiciona um listener que ficará escutando quando a requisição for lida. E envia a requisição com método 'send'. Trabalha com 2 tipos de response: responseXML e responseText e também trabalha com 5 tipos de eventos: progress, error, abort, load e loadend.

Fetch: Trabalha com interface para administrar as requisições de recursos na rede, assim é possível ter objetos específicos para requisições(request) e respostas(response).Fetch usa Promises, evitando assim o callback que acontece no XMLHttpRequest. Infelizmente o Fetch não funciona nos browsers IE 11 e Edge 13 ou inferior.

Fetch é muito mais fácil e simples de utilizar tanto para as requisições como para tratamento das respostas.

11 - O que são Promises ? Como podemos declarar uma promise em javascript ?

Promise é um objeto usado geralmente para realizar processamentos assíncronos e tratamentos de eventos. Podemos colocar esse objeto quando tem que aguardar o retorno de sucesso de algo para poder continuar a ação seguinte.Geralmente é utilizado os 2 estados que seria o resolvido e o rejeitado usando as funções 'then' e 'catch'.
Para criar uma Promise é só inicializar com 'new Promise' que recebe uma função como parâmetro e esta função tem as assinaturas (resolve,reject). quando o retorno é sucesso fica resolve(resultado) e quando dá erro fica reject(erro).

ex: uma função que aguarda se o teste deu positivo ou não;

function testeGravidez(resultado = false) {
    return new Promise((resolve, reject) => {
            if (resultado) {
              resolve("Parabéns você está grávida!");
            }
			      reject("Teste negativo");;
    });

    e para usar a função chamar passando o resultado:

    testeGravidez(resultado)
      .then(sonsole.log)
      .catch(console.error)
}

12 - Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

As 3 formas mais comuns de iterar array em javascript é usando o for, while e do...while, porém atualmente são utilizados outras formas mais modernas como forEach, map, filter que vem do EcmaScript.

for: Um laço for é repetido até que a condição especificada seja falsa;  
caso o resultado de condicao seja verdadeiro, o laço é executado. Se o valor de condicao é falso, então o laço terminará. 

while: Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. 
O teste da condição ocorre antes que o laço seja executado.

do...while: A instrução do...while repetirá até que a condição especificada seja falsa. Ao final de cada execução, a condicao é verificada. 


13 - Quando utilizar map, reduce ou filter ?

map: É usado quando é preciso traduzir/mapear todos os elementos em um array para criar um novo array passando por uma função pra cada item do array;
ex:
const valoresOriginais = [100, 200, 300];

const valoresComJuros = valoresOriginais.map( valor => valor * 0,3)

reduce: Pode ser usado quando desejamos realizar alguma somatória ou então quando desejamos mesclar vários arrays em um único. 
 O primeiro parâmetro representa o resultado final da redução do array. Esse valor é incrementado ao longo do processo do reduce(), a cada volta desse laço de repetição. O segundo parâmetro envolve o valor de cada índice do array.

ex:
const salarios = [1200, 1250, 1300, 1300, 1350]
const totalSalarios = salarios.reduce((total, current) => total + current)

filter: Ele filtra os dados de um array por um determinado valor. 
ex: 
const pessoas = [{nome: 'Joao', genero: 'masculino'}, {nome: 'Maria', genero: 'feminino'}, {nome: 'Ana', genero: 'feminino'}]
const mulheres = pessoas.filter((pessoa) => pessoa.genero === 'feminino')


14 - Qual o método do Array é mais indicado para remover elementos ?

O método mais simples e utilizado para remover elementos do array é o .splice() que funciona de forma semelhante que outras linguagens de programação.
As entradas para a função splice() são o ponto de índice para iniciar em e o número de elementos a serem removidos.
ex: list.splice(2,1) --começando na posição do indice 2, removendo 1 elemento;

15 - Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

- método length() : usado para contar quantidades de caracteres em um determinado valor:
const texto = "ABCDEFG";
const contagem = txt.length;
resultado: contagem = 7;

- método slice(): é usado para recortar um valor passando no primeiro parâmetro o inicio do index e no segundo parâmetro o ultimo index:
const frutas = "Apple, Banana, Kiwi";
const frutaPreferida = frutas.slice(7, 13);
resultado: frutaPreferida = 'Banana'

- método replace(): é usado para substituir um valor pelo outro, passando no primeiro parâmetro o valor que será substituido e no segundo passando o valor que substituirá;
const fraseErrada = "A maçã é azul"
const fraseCerta = fraseErrada.replace('azul', 'vermelha');
resultado: fraseCerta = 'A maçã é vermelha';

- método toUpperCase() : é usado para deixar todas as letras em caixa alta;
const minusculo = "Hello World";
const maiusculo = minusculo.toUpperCase();
resultado: maiusculo = "HELLO WORLD";

16 - Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage
O código funciona tanto quanto para LocalStorage ou SessionStorage mudando apenas o funcionamento dele onde o localStorage armazena o valor sem expiração, somente quando limpar o cache e o sessionStorage armazena o valor enquanto tiver com a sessao/browser aberta;

Para iniciar um storage basta adicionar um código:
localStorage.setItem('campoArmazenado', 'valor') -- No lugar do 'locaStorage' pode ser substituido por 'sessionStorage'. 
No primeiro parâmetro é adicionado o campo a ser inserido o valor e no segundo parâmetro o valor;

Para resgatar o valor:
localStorage.getItem('campoArmazenado') -- passa o campo que quer resgatar o valor;


17 - Qual a melhor forma para definir um cookie utilizando javascript ?
A melhor forma de armazenar valores no navegador na minha opinião é usando o localStorage ou sessionStorage porém é possivel utilizar o document.cookie do Javascript para armazenar cookies;
O problema é que ele armazena em uma única linha todos os valores dos cookies;

Para inserir um cookie basicamente é só passar o código : document.cookie = 'chave = valor'
é possivel passar a data de expiração do cookie passando ';expires = data-em-formato-GMTString' -- se não passar data ele expira quando o browser é fechado

para visualizar os cookies armazenados é somente inserir o código document.cookie;
e para apagar passar o document.cookie('chave';expires=data-antiga) -- passando uma data de expiração antiga no parametro 'expires';

18 - Quais os tipos de Loops existentes em javascript ?

Os Loops existentes no Javascript são:
- for
- do...while
- while
- label
- break
- continue
- for...in
- for...of

19 - Descreva com suas palavras o que é hoisting ?

O hoisting é o que acontece quando você tem declarações de variáveis(var) e no momento da compilação do código essas declarações sobem acima de todo código. Apenas a declaração que sobe mas o valor dela continua na mesma linha do código. Ou seja, se tentar fazer um console.log de uma variável antes de ela receber valor, o retorno será 'undefined';

20 - Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

    window
    global
 [x]undefined
    null
 
 
21 - Quando eu posso utilizar o "Use-strict" no meu código ?

 [x] No ínicio do meu código
 No inicio do block if
 No inicio de um loop
 [x] no inicio de uma função