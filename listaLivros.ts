import { LivroCategoria } from "./livroCategoria";

const listaDeLivros : LivroCategoria[] = [

    new LivroCategoria('Harry Potter', 'J K Rowlling', 2001, 'Ficção Cientifica'),
    new LivroCategoria('Percy Jackson', 'Rick Riordan', 2005, 'Ficção Cientifica')

]

listaDeLivros.forEach(livro =>{
    livro.exibirDetalhes();
})