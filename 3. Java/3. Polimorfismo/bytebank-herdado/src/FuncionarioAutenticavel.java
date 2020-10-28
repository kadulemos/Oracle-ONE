public abstract class FuncionarioAutenticavel extends Funcionario  {

    private int senha;
    
    //entra com a senha que se quer cadastrar
    public void setSenha(int senha) {
        this.senha = senha;
    }

    public boolean autentica(int senha) {
        if(this.senha == senha) {
            return true;
        } else {
            return false;
        }
    }
}
