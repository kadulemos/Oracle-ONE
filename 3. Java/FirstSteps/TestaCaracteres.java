public class TestaCaracteres {
    
    public static void main(String[] args) {
        
        char letra = 'a';
        System.out.println(letra);

        char valor = 65; //Compila -> faz referência ao valor que significa aquele caractere
        System.out.println(valor);

        //valor = valor + 1; //Não compila -> porque o Java referência para o maior tipo (que no caso é o de número inteiro)
        //System.out.println(valor);

        valor = (char) (valor + 1); //Dessa forma compila, pois houve a referência
        System.out.println(valor);

        String palavra = "Aqui está escrito uma frase.";
        System.out.println(palavra);

        palavra = palavra + 2020;
        System.out.println(palavra);
    }
}