export interface PostArtistDTO {
  name: string,
  isGroup: boolean,
  nationality: string,
  albums: Array<number>,
}

export interface ArtistDTO {
  id: number,
  name: string,
  isGroup: boolean,
  nationality: string,
  albums: Array<number>,
}
