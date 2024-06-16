package src;

public class FormataCEP {
    public static void main(String[] args) {
        try {
            String cepFormatado = formatarCep("12123123");
            System.out.println("\nCEP formatado: " + cepFormatado + "\n");

        } catch (CepInvalidoException e) {
            System.err.println("\nCEP invalido! \n" + e + "\n");
        }
    }

    static String formatarCep(String cep) throws CepInvalidoException {
        if (cep.length() != 8)
            throw new CepInvalidoException();

        // simulando um cep formatado
        return "00.000-000";
    }

}
