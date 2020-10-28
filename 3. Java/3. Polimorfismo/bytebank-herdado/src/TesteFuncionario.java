public class TesteFuncionario {

    public static void main(String[] args) {
        
        Gerente kadu = new Gerente();
        kadu.setNome("Kadu Lemos");
        kadu.setCpf("739907994");
        kadu.setSalario(3000);

        System.out.println(kadu.getNome());
        System.out.println(kadu.getBonificacao());
    }
}
