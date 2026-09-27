//Definição dos dados
const catalogo = [
    {
        id: 1,
        titulo: "Inception",
        tipo: "filme",
        ano: 2010,
        generos: ["Ação", "Ficção Científica"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["Drama", "Crime"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 3,
        titulo: "The Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["Ação"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["Drama", "Terror"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 5,
        titulo: "Interstellar",
        tipo: "filme",
        ano: 2014,
        generos: ["Aventura", "Ficção Científica"],
        nota: 8.6,
        assistido: true
    },
    {
        id: 6,
        titulo: "Severance",
        tipo: "serie",
        ano: 2022,
        generos: ["Mistério"],
        nota: 9.1,
        assistido: false
    }
];

//Acesso e leitura dos dados
console.log("--- Dados do Catálogo ---");
console.log(catalogo);

// Título do primeiro item
console.log("Título do primeiro:", catalogo[0].titulo);

// Ano do último item
let ultimoIndice = catalogo.length - 1;
console.log("Ano do último:", catalogo[ultimoIndice].ano);

// Segundo gênero do terceiro item
let terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("O terceiro item só tem um gênero!");
}


// Iterações com iterators 

// A) Listagem com forEach
console.log("\n--- A) Lista de Títulos ---");
catalogo.forEach(function(item) {
    console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});

// B) Transformação com map
console.log("\n--- B) Títulos em Maiúsculo ---");
let titulosEmCaixaAlta = catalogo.map(function(item) {
    return item.titulo.toUpperCase();
});
console.log(titulosEmCaixaAlta);

// C) Seleção com filter
console.log("\n--- C) Não Assistidos ---");
let naoAssistidos = catalogo.filter(function(item) {
    return item.assistido === false;
});
console.log("Quantidade não assistidos:", naoAssistidos.length);

// D) Busca com find
console.log("\n--- D) Item com nota >= 9 ---");
let itemNotaAlta = catalogo.find(function(item) {
    return item.nota >= 9;
});

if (itemNotaAlta) {
    console.log("Achou:", itemNotaAlta.titulo, "- Nota:", itemNotaAlta.nota);
} else {
    console.log("Nenhum item encontrado com nota >= 9.");
}

// E) Agregação com reduce
console.log("\n--- E) Médias ---");
let somaTodasNotas = catalogo.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);
let mediaGeral = somaTodasNotas / catalogo.length;
console.log("Média geral:", mediaGeral.toFixed(2));

let assistidos = catalogo.filter(function(item) {
    return item.assistido === true;
});

let somaNotasAssistidos = assistidos.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);
let mediaAssistidos = somaNotasAssistidos / assistidos.length;
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

// F) Checagens com some e every
console.log("\n--- F) Checagens ---");
let temAntigo = catalogo.some(function(item) {
    return item.ano < 2000;
});
console.log("Tem algum item lançado antes de 2000?:", temAntigo);

let todosTemGenero = catalogo.every(function(item) {
    return item.generos.length >= 1;
});
console.log("Todos têm pelo menos 1 gênero?:", todosTemGenero);


// B.4. Saída na tela (DOM simples)
let totalFilmes = catalogo.filter(function(item) {
    return item.tipo === "filme";
}).length;

let totalSeries = catalogo.filter(function(item) {
    return item.tipo === "serie";
}).length;

// Ordenar para pegar os 3 melhores (top 3)
let catalogoCopia = [...catalogo];
catalogoCopia.sort(function(a, b) {
    return b.nota - a.nota;
});

let top1 = catalogoCopia[0];
let top2 = catalogoCopia[1];
let top3 = catalogoCopia[2];

let divOutput = document.getElementById("output");

divOutput.innerHTML = 
    "<h2>Resumo do Catálogo</h2>" +
    "<p>Total de itens: " + catalogo.length + "</p>" +
    "<p>Quantidade de filmes: " + totalFilmes + "</p>" +
    "<p>Quantidade de séries: " + totalSeries + "</p>" +
    "<p>Não assistidos: " + naoAssistidos.length + "</p>" +
    "<p>Média geral das notas: " + mediaGeral.toFixed(2) + "</p>" +
    "<h3>Top 3 Maiores Notas:</h3>" +
    "<ol>" +
        "<li>" + top1.titulo + " - Nota: " + top1.nota + "</li>" +
        "<li>" + top2.titulo + " - Nota: " + top2.nota + "</li>" +
        "<li>" + top3.titulo + " - Nota: " + top3.nota + "</li>" +
    "</ol>";