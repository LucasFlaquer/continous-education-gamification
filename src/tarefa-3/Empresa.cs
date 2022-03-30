using System;
using System.Collections.Generic;

namespace EngenhariaSoftwareII.Models
{
    public class Empresa : BaseModel
    {
        public Empresa(Guid id, string nome)
        {
            Id = id;
            Nome = nome;
            Funcionarios = new List<Funcionario>();
        }

        public string Nome { get; private set; }
        public List<Funcionario> Funcionarios { get; private set; }

        public void AdicionarFuncionario(Funcionario funcionario)
        {
            Funcionarios.Add(funcionario);
        }
    }
}
