// * new Conta Corrente
public class ContaCorrente extends Conta {
    
    public ContaCorrente(int agencia, int numero) {
        super(agencia, numero);
    }

    @Override // Configuração para o compilador de que esse é um método de sobreescrever o que está na classe mãe
    public boolean saca(double valor) {
        double valorASacar = valor + 0.2;
        return super.saca(valorASacar);
    }
}
