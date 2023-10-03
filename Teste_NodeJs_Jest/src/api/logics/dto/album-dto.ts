interface Songs {
  id: number,
  name: string,
}

export interface AlbumDTO {
  id: number,
  name: string,
  artistId: number,
  label: string,
  year: number,
  songs: Array<Songs>,
}

export interface PostAlbumDTO {
  name: string,
  artistId: number,
  label: string,
  year: number,
  songs: Array<Songs>,
}
