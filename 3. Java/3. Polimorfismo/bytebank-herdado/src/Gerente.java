// EXTENDS -> Gerente herda da class Funcionario
public class Gerente extends Funcionario {

    private int senha;

    public boolean autentica(int senha) {
        if(this.senha == senha) {
            return true;
        } else {
            return false;
        }
    }

    //entra com a senha que se quer cadastrar para o gerente
    public void setSenha(int senha) {
        this.senha = senha;
    }

    // Cálculo de bonificação do gerente -> usando o mesmo método da classe mãe (reescrita)
    public double getBonificacao() {
        //super -> significa this para referenciar a classe mãe (superclass)
        //super.getBonificacao() -> reaproveitando o método definido na classe mãe
        //super.getSalario() -> pega o método getSalario() da classe mãe, sem precisar mudar a visibilidade de private para protected
        return super.getBonificacao() + super.getSalario();
    }

}