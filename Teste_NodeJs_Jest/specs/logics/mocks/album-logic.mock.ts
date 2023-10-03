import { AlbumDTO, PostAlbumDTO } from "@/api/logics/dto/album-dto";
import { ArtistDTO } from "@/api/logics/dto/artist-dto";

/*************** CREATE ALBUM *****************/
interface CreateAlbumTestCase {
  params: {
    album: PostAlbumDTO,
  },
  expectedReturnValue: AlbumDTO,
  expectedCountCalledTimes: number,
  expectedCreateCalledTimes: number,
  expectedCreateCalledWith: AlbumDTO,
};

export const CreateAlbumTestCases: CreateAlbumTestCase[] = [
  {
    params: {
      album: {
        name: 'Album 1',
        artistId: 1,
        label: 'Label 1',
        year: 2008,
        songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
      },
    },
    expectedReturnValue: {
      id: 1,
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    },
    expectedCountCalledTimes: 1,
    expectedCreateCalledTimes: 1,
    expectedCreateCalledWith: {
      id: 1,
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    },
  },
  {
    params: {
      album: {
        name: 'Album 2',
        artistId: 1,
        label: 'Label 1',
        year: 2009,
        songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
      },
    },
    expectedReturnValue: {
      id: 2,
      name: 'Album 2',
      artistId: 1,
      label: 'Label 1',
      year: 2009,
      songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
    },
    expectedCountCalledTimes: 1,
    expectedCreateCalledTimes: 1,
    expectedCreateCalledWith: {
      id: 2,
      name: 'Album 2',
      artistId: 1,
      label: 'Label 1',
      year: 2009,
      songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
    },
  },
];

export const artistMock: ArtistDTO = {
  id: 1,
  name: 'Artist 1',
  isGroup: false,
  nationality: 'USA',
  albums: [],
}

/*************** GET ALBUM *****************/
interface GetAlbumTestCase {
  params: {
    albumId: number,
  },
  expectedReturnValue: AlbumDTO,
  expectedFindCalledTimes: number,
  expectedFindCalledWith: number,
};

export const GetAlbumTestCases: GetAlbumTestCase[] = [
  {
    params: {
      albumId: 1,
    },
    expectedReturnValue: {
      id: 1,
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    },
    expectedFindCalledTimes: 1,
    expectedFindCalledWith: 1,
  },
  {
    params: {
      albumId: 2,
    },
    expectedReturnValue: {
      id: 2,
      name: 'Album 2',
      artistId: 1,
      label: 'Label 1',
      year: 2009,
      songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
    },
    expectedFindCalledTimes: 1,
    expectedFindCalledWith: 2,
  },
];
