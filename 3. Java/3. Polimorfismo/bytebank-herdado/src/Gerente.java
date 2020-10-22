// Gerente herda da class Funcionario
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

    //Cálculo de bonificação do gerente
    //public double getBonificacao() {
        //return this.salario;
    //}

}