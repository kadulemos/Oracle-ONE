public class TestaLacos {
    public static void main(final String[] args) {
        
        for (int linha = 1; linha <= 10; linha++) {
            for(int coluna = 0; coluna <= linha; coluna ++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }    
}