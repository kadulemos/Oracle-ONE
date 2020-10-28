// EXTENDS -> Gerente herda da class FuncionarioAutenticavel
public class Gerente extends FuncionarioAutenticavel {


    // Cálculo de bonificação do gerente -> usando o mesmo método da classe mãe (reescrita)
    public double getBonificacao() {

        System.out.println("Chamando o método de bonificação do Gerente");
        //super -> significa this para referenciar a classe mãe (superclass)
        //super.getBonificacao() -> reaproveitando o método definido na classe mãe
        //super.getSalario() -> pega o método getSalario() da classe mãe, sem precisar mudar a visibilidade de private para protected
        return super.getSalario();
    }

}