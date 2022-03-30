import { Funcionario } from "./Funcionario";

export class Empresa {
  public funcionarios: Funcionario[] = [];
  
  constructor(
    public readonly id: string,
    public readonly nome: string
  ) {}

  public AdicionarFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }
}