import artistRepository from "../repositories/artist-repository";
import { ArtistDTO, PostArtistDTO } from "./dto/artist-dto";

class ArtistLogic {
  // função para criar um novo artista
  async createArtist(artist: PostArtistDTO): Promise<ArtistDTO> {
    // conta quantos artistas já existem no banco
    const count = await artistRepository.count();

    // atribui um novo ID com base no número de artistas no banco
    // note que isto só é possível porque não existe a função de deletar em nosso banco
    const newArtist = {
      id: count + 1,
      ...artist,
    };

    // inicia a criação do novo artista, com id, no repositório de artistas
    await artistRepository.create(newArtist);

    // retorna o novo artista criado
    return newArtist;
  }

  // função para buscar um artista
  async getArtist(artistId: number): Promise<ArtistDTO> {
    // busca o artista no repositório de artistas
    const artist = await artistRepository.find(artistId);

    // retorna o artista encontrado
    return artist;
  }
}

export = new ArtistLogic();
