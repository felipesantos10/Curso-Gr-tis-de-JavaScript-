<p align="center">
<img src="../images/Header-modulo-C.png">
</p>

### Document Object Model
- DOM significa Document Object Model (Modelo de Objeto de Documento) e é uma representação estruturada de um documento HTML (ou XML) que fornece uma maneira de acessar e interagir com os elementos de um documento da web. O DOM trata o documento como uma árvore de objetos, onde cada elemento, atributo e texto no documento é representado como um nó na árvore.

- Por meio do DOM, os desenvolvedores podem acessar, manipular e modificar elementos HTML, estilos CSS e conteúdo textual de uma página da web dinamicamente usando JavaScript. Isso permite que páginas da web interajam com os usuários, respondam a eventos e atualizem o conteúdo de forma dinâmica, sem a necessidade de recarregar a página inteira.

- Em resumo, o DOM é essencial para criar aplicativos da web interativos e dinâmicos, pois fornece uma interface de programação que permite manipular a estrutura, estilo e conteúdo de uma página da web.

### Seleção de Elementos no DOM

**Método `getElementById()`**: Este método seleciona um elemento pelo seu ID exclusivo.
```javascript
   var elemento = document.getElementById('id-do-elemento');
```

**Método `getElementsByClassName()`**: Este método retorna uma lista de elementos que possuem uma determinada classe

 ```javascript
var elementos = document.getElementsByClassName('nome-da-classe');
```

**Método ``getElementsByTagName()``:** Este método retorna uma lista de elementos com um determinado nome de tag.
```javascript
var elementos = document.getElementsByTagName('tag');

```

**Método ``querySelector()``:** Este método retorna o primeiro elemento que corresponde a um seletor CSS especificado.


```javascript
var elemento = document.querySelector('seletor-css');
```

**Método ``querySelectorAll()``:** Este método retorna todos os elementos que correspondem a um seletor CSS especificado, em uma NodeList.

```javascript
var elementos = document.querySelectorAll('seletor-css');
```