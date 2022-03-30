using System;
using System.Collections.Generic;
using System.Linq;

namespace EngenhariaSoftwareII.Models
{
    public abstract class BaseModel
    {
        public Guid Id { get; protected set; }
        public bool Invalido => Erros is null ? false : Erros.Any();
        public bool Valido => Erros is null ? true : !Erros.Any();
        public List<Notificacao> Erros { get; protected set; }

        public void AdicionaErro(string mensagem)
        {
            if (Erros is null)
                Erros = new List<Notificacao>();

            Erros.Add(new Notificacao(Erros.Count() + 1, mensagem));
        }
    }
}
