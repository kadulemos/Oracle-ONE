public class ControleBonificacao {

    private double soma;

    //Referência genérica que pode apontar para tipos de pbjetos diferentes (estão definidas numa herarquia)
    public void registra(Funcionario f) {
        double boni = f.getBonificacao();
        this.soma = this.soma + boni;
    }

    public double getSoma() {
        return soma;
    }
    
}
