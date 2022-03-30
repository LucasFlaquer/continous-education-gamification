import { Empresa } from "./src/tarefa-3/Empresa"
import { Funcionario } from "./src/tarefa-3/Funcionario";

describe('Company Hiring process', () => {
  it('shoult not hire person with invalid age', () => {
    const company = new Empresa('1', 'Company');
    const employee = new Funcionario('Joao', 15, )
    company.AdicionarFuncionario()
    

  })
  it('should hire as parttime if employee age is between 16 and 18', () => {

  })
  it('should be able to hire employee as fulltime', () => {

  })
})

