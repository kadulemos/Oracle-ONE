// abstract -> é uma classe que denomina um conceito (algo abstrato) - é relacionado com herança
public  abstract class Funcionario {

    private String nome;
    private String cpf;
    private double salario;

    //Cálculo de bonificação do funcionário
    // abstratct -> Método sem corpo, não há implementação
    
    public abstract double getBonificacao();
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}
	
	
	

}