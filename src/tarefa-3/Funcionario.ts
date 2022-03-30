import { EPeriodoContratacao } from "./EPeriodoContratacao";

export class Funcionario{
    nome: string;
    idade: number;
    periodoContratacao: EPeriodoContratacao;
    
    public validar()
    {
        const menorQueDezesseisAnos = this.idade < 16;
        if (menorQueDezesseisAnos)
            throw new Error("Idade não pode ser menor que 16 anos.");
        const entre16e18anosDiferenteTempoParcial = this.idade <= 18 && this.periodoContratacao != EPeriodoContratacao.parcial;
        if (entre16e18anosDiferenteTempoParcial)
            throw new Error("Entre 16 e 18 anos só é permitido contratação em tempo parcial.");
        const entre18e55anosDiferenteIntegral = this.idade >= 18
            && this.idade <= 55
            && this.periodoContratacao != EPeriodoContratacao.integral;
        if (entre16e18anosDiferenteTempoParcial)
            throw new Error("Entre 18 e 55 anos só é permitido contratação em tempo integral.");
        const acimaDe55Anos = this.idade > 55;
        if (acimaDe55Anos)
            throw new Error("Não é permitido contratação de pessoas com mais de 55 anos.");
    }

    constructor(nome:string, idade: number, periodoContratacao: EPeriodoContratacao) {
        this.validar();
        this.nome = nome;
        this.idade = idade;
        this.periodoContratacao = periodoContratacao;

    }   
}