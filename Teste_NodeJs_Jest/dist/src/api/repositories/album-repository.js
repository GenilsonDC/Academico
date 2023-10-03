// import { db } from '../db';
// import { AlbumDTO } from '../logics/dto/album-dto';
// class AlbumRepository {
//   // função que retorna o número de álbuns cadastrados
//   async count(): Promise<number> {
//     // utiliza a função find do db para recuperar todos os álbuns cadastrados
//     const albums: AlbumDTO[] = await db.find('albums.json');
//     // retorna o tamanho da lista de álbuns recuperados
//     return albums.length;
//   }
//   // função que salva um novo álbum
//   async create(newAlbum: AlbumDTO): Promise<void> {
//     // utiliza a função find do db para recuperar todos os álbuns cadastrados
//     const albums: AlbumDTO[] = await db.find('albums.json');
//     // atualiza os álbuns cadastrados, inserindo o novo álbum ao final da lista
//     await db.update('albums.json', [...albums, newAlbum]);
//   }
//   // função que recupera as informações de um álbum
//   async find(albumId: number): Promise<AlbumDTO> {
//     // utiliza a função find do db para recuperar todos os álbuns cadastrados
//     const albums: AlbumDTO[] = await db.find('albums.json');
//     // procura o álbum pelo id
//     const album = albums.find((album) => { return album.id === albumId });
//     // retorna o álbum encontrado (ou undefined)
//     return album;
//   }
// }
// export = new AlbumRepository();
//# sourceMappingURL=album-repository.js.map