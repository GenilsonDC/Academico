import { db } from "../db";
import { ArtistDTO } from "../logics/dto/artist-dto";

class ArtistRepository {
  // função que retorna o número de artistas cadastrados
  async count(): Promise<number> {
    // utiliza a função find do db para recuperar todos os artistas cadastrados
    const artists: ArtistDTO[] = await db.find("artists.json");

    // retorna o tamanho da lista de artistas recuperados
    return artists.length;
  }

  // função que salva um novo artista
  async create(newArtist: ArtistDTO): Promise<void> {
    // utiliza a função find do db para recuperar todos os artistas cadastrados
    const artists: ArtistDTO[] = await db.find("artists.json");

    // atualiza os artistas cadastrados, inserindo o novo artista ao final da lista
    await db.update("artists.json", [...artists, newArtist]);
  }

  // função que recupera as informações de um artista
  async find(artistId: number): Promise<ArtistDTO> {
    // utiliza a função find do db para recuperar todos os artistas cadastrados
    const artists: ArtistDTO[] = await db.find("artists.json");

    // procura o artista pelo id
    const artist = artists.find((artist) => {
      return artist.id === artistId;
    });

    // retorna o artista encontrado (ou undefined)
    return artist;
  }

  async update(updatedArtist: ArtistDTO): Promise<void> {
    // utiliza a função find do db para recuperar todos os artistas cadastrados
    const artists: ArtistDTO[] = await db.find("artists.json");

    // procura o artista pelo id
    const artistIndex = artists.findIndex((artist) => {
      return artist.id === updatedArtist.id;
    });

    // atualiza as informações do artista na lista
    artists[artistIndex] = updatedArtist;

    // atualiza os artistas cadastrados
    await db.update("artists.json", artists);
  }
}

export = new ArtistRepository();
