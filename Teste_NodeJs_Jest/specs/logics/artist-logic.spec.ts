import { ArtistDTO } from "../../src/api/logics/dto/artist-dto";
import artistLogic from "../../src/api/logics/artist-logic";
import artistRepository from "../../src/api/repositories/artist-repository";
import {
  CreateArtistTestCases,
  GetArtistTestCases,
} from "./mocks/artist-logic.mock";

// cria uma falsificação da classe ArtistRepository, importada pelo Logic
jest.mock("../../src/api/repositories/artist-repository", () => {
  return {
    // falsificação do método count, que retorna sempre 0
    count: async (): Promise<number> => {
      return 0;
    },
    // falsificação do método create, que não faz nada
    create: async (): Promise<void> => {},
    // falsificação do método find, que retorna null pois seu retorno será implementado individualmente nos testes
    find: async (): Promise<ArtistDTO> => {
      return null;
    },
  };
});

// nomeia a coleção de testes
describe("Suit Test for Artist Logic", () => {
  // testa se método createArtist obtém um Id de acordo com o esperado
  test("createArtist - Should get a proper Id for new Artist", async () => {
    for (let i = 0; i < CreateArtistTestCases.length; i++) {
      const test = CreateArtistTestCases[i];

      // cria as variáveis espiãs do jest
      const countSpy = jest.spyOn(artistRepository, "count");

      // força o retorno da função count
      countSpy.mockResolvedValueOnce(i);

      // chama o método createArtist com os parâmetros de teste
      const createdArtist = await artistLogic.createArtist(test.params.artist);

      // testa o comportamento do método createArtist através das variáveis espiãs
      expect(countSpy).toBeCalledTimes(1);
      expect(createdArtist.id).toBe(i + 1);

      // limpa os contadores da variável espiã
      countSpy.mockClear();
    }
  });

  // testa se método createArtist cria um novo artista e o retorna
  test("createArtist - Should save new artist to Repository", async () => {
    for (let i = 0; i < CreateArtistTestCases.length; i++) {
      const test = CreateArtistTestCases[i];

      // cria as variáveis espiãs do jest
      const createSpy = jest.spyOn(artistRepository, "create");
      const countSpy = jest.spyOn(artistRepository, "count");

      // força o retorno da função count
      countSpy.mockResolvedValueOnce(i);

      // chama o método createArtist com os parâmetros de teste
      const createdArtist = await artistLogic.createArtist(test.params.artist);

      // testa o comportamento do método createArtist através das variáveis espiãs
      expect(createSpy).toBeCalledTimes(1);
      expect(createdArtist).toStrictEqual(test.expectedReturnValue);

      // limpa os contadores das variáveis espiãs
      countSpy.mockClear();
      createSpy.mockClear();
    }
  });

  // testa se método getArtist retorna o artista corretamente
  test("getArtist - Should get artist from Repository", async () => {
    for (const test of GetArtistTestCases) {
      // cria as variáveis espiãs do jest
      const findSpy = jest.spyOn(artistRepository, "find");

      // força o retorno da função find
      findSpy.mockResolvedValueOnce(test.expectedReturnValue);

      // chama o método getArtist com os parâmetros de teste
      const artist = await artistLogic.getArtist(test.params.artistId);

      // testa o comportamento do método getArtist através das variáveis espiãs
      expect(findSpy).toBeCalledTimes(1);
      expect(artist).toStrictEqual(test.expectedReturnValue);

      // limpa os contadores da variável espiã
      findSpy.mockClear();
    }
  });
});
