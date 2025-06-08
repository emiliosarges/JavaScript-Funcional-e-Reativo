# 📘 JavaScript Funcional e Reativo

Este repositório reúne estudos, exemplos e exercícios sobre **JavaScript Funcional**, **Programação Reativa** e **Manipulação Assíncrona com Promises**, voltado para quem deseja aprender de forma prática e progressiva.

---

## 🧠 Objetivo

A proposta é documentar o processo de aprendizagem com foco em:

- 🌀 **Funções puras e imutabilidade**
- 📦 **Métodos de array (`map`, `filter`, `reduce`, `find`, etc.)**
- ⚙️ **Composição e currying**
- 🔁 **Recursão**
- 📡 **Programação Reativa com RxJS (em breve)**
- ⏳ **Promises e tratamento assíncrono**

---

## 📂 Estrutura do Repositório

```
📁 JavaScript-Funcional-e-Reativo (pastas ainda não organizadas, apeans os arquivos soltos)
├── 📁 reduce               → Exemplos e exercícios sobre reduce
├── 📁 map                  → Exemplos usando map
├── 📁 filter               → Exercícios com filter
├── 📁 promises             → Como usar e encadear Promises
├── 📁 fundamentos          → Conceitos básicos de JS funcional
└── README.md              → Este arquivo
```

---

## ✍️ Conteúdo em Destaque

### 🔢 Reduce
> Aprenda como transformar arrays em valores únicos (somas, objetos, contagens, etc.)

- Explicações passo a passo
- Exercícios práticos
- Casos de uso reais

---

### 🧩 Map
> Transforma cada elemento de um array em um novo valor.

---

### 🧹 Filter
> Retorna apenas os elementos que satisfazem uma condição.

---

### ⏳ Promises
> Trabalhe com código assíncrono de forma mais legível.

- Criando Promises
- Encadeamento com `.then()` e `.catch()`
- Introdução ao `async/await`
- Tratamento de erros assíncronos

```javascript
const pegarDados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Dados recebidos!"), 1000);
  });
};

pegarDados()
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

---

### 📚 Fundamentos
> Conceitos essenciais como:
- Imutabilidade
- Funções puras
- Composição de funções
- Higher-Order Functions (HOFs)

---

## 🚧 Em breve

- 📡 Introdução ao RxJS e programação reativa
- 🧪 Desafios e mini-projetos funcionais
- 📖 Apostilas e PDFs para estudo

---

## 🤝 Contribuindo

Sinta-se à vontade para abrir issues com dúvidas ou sugestões, ou enviar pull requests com melhorias e novos exemplos!

---

## 🧑‍💻 Autor

**Emílio Sarges**  
[GitHub](https://github.com/emiliosarges) 

---

> 📌 _Este repositório é parte do meu estudo contínuo de JavaScript moderno com foco em paradigmas funcionais, reativos e assíncronos._
