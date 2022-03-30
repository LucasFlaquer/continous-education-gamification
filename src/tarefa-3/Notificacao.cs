namespace EngenhariaSoftwareII.Models
{
    public class Notificacao
    {
        public Notificacao(int codigo, string erro)
        {
            Codigo = codigo;
            Erro = erro;
        }

        public int Codigo { get; private set; }
        public string Erro { get; private set; }
    }
}
