import { Livro } from "./livro";

export class LivroCategoria extends Livro {
    categoria: string;

    constructor(titulo: string, autor: string, ano: number, categoria: string){
        super(titulo, autor, ano)
        this.categoria = categoria
    }

    exibirDetalhes(): void{
        console.log(`O título do livro é ${this.titulo}, o autor se chama ${this.autor}, o ano de criação é ${this.ano} e a categoria do livro é ${this.categoria}`)
    };

    eAntigo(): boolean{
        if(this.ano < 2000){
            return true;
        }
        else{
            return false;
        };
    };
};
