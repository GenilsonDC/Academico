import { AlbumDTO, PostAlbumDTO } from '@/api/logics/dto/album-dto';
import { Request, Response } from 'express';
import { mockRequest, mockResponse } from 'jest-mock-req-res';

/*************** POST ALBUM *****************/
interface PostAlbumErrorTestCase {
  params: {
    req: Request,
    res: Response,
  },
  expectedLogicCalledTimes: number,
  expectedLogicCalledWith?: PostAlbumDTO,
  returnFromLogic?: { createdAlbum: AlbumDTO, err: string },
  expectedStatusCode: number,
  expectedMessage: {
    statusCode: number,
    message: string,
  },
};

interface PostAlbumSuccessTestCase {
  params: {
    req: Request,
    res: Response,
  },
  expectedLogicCalledTimes: number,
  expectedLogicCalledWith: PostAlbumDTO,
  returnFromLogic?: { createdAlbum: AlbumDTO, err: string },
  expectedStatusCode: number,
  expectedMessage: AlbumDTO,
};

export const PostAlbumNoParamErrorTestCases: PostAlbumErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          artistId: 1,
          label: 'Label 1',
          year: 2008,
          songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 0,
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'Parameter missing!',
    },
  },
  {
    params: {
      req: mockRequest({
        body: {
          year: 2008,
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 0,
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'Parameter missing!',
    },
  },
];

export const PostAlbumWrongParamErrorTestCases: PostAlbumErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Album 1',
          artistId: 'Artist 1',
          label: 'Label 1',
          year: 2008,
          songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 0,
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'Parameter is not of expected type!',
    },
  },
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Album 1',
          artistId: 1,
          label: 'Label 1',
          year: 'dois mil e oito',
          songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 0,
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'Parameter is not of expected type!',
    },
  },
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Album 1',
          artistId: 1,
          label: 'Label 1',
          year: 2008,
          songs: [{ id: 'um', name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 0,
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'Parameter is not of expected type!',
    },
  },
];

export const PostAlbumLogicErrorTestCases: PostAlbumErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Album 1',
          artistId: 1,
          label: 'Label 1',
          year: 2008,
          songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: {
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    },
    returnFromLogic: { createdAlbum: null, err: 'error message 1' },
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'error message 1',
    },
  },
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Album 1',
          artistId: 1,
          label: 'Label 1',
          year: 2008,
          songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: {
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    },
    returnFromLogic: { createdAlbum: null, err: 'error message 2' },
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'error message 2',
    },
  },
];

export const PostAlbumSuccessTestCases: PostAlbumSuccessTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Album 1',
          artistId: 1,
          label: 'Label 1',
          year: 2008,
          songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: {
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    },
    returnFromLogic: {
      createdAlbum: {
        id: 1,
        name: 'Album 1',
        artistId: 1,
        label: 'Label 1',
        year: 2008,
        songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
      },
      err: null,
    },
    expectedStatusCode: 200,
    expectedMessage: {
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
      req: mockRequest({
        body: {
          name: 'Album 2',
          artistId: 1,
          label: 'Label 1',
          year: 2009,
          songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
        }
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: {
      name: 'Album 2',
      artistId: 1,
      label: 'Label 1',
      year: 2009,
      songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
    },
    returnFromLogic: {
      createdAlbum: {
        id: 1,
        name: 'Album 2',
        artistId: 1,
        label: 'Label 1',
        year: 2009,
        songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
      },
      err: null,
    },
    expectedStatusCode: 200,
    expectedMessage: {
      id: 1,
      name: 'Album 2',
      artistId: 1,
      label: 'Label 1',
      year: 2009,
      songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
    },
  },
];

/*************** GET ALBUM *****************/
interface GetAlbumErrorTestCase {
  params: {
    req: Request,
    res: Response,
  },
  expectedLogicCalledTimes: number,
  expectedStatusCode: number,
  expectedMessage: {
    statusCode: number,
    message: string,
  },
};

interface GetAlbumSuccessTestCase {
  params: {
    req: Request,
    res: Response,
  },
  expectedLogicCalledTimes: number,
  expectedLogicCalledWith: number,
  expectedStatusCode: number,
  expectedMessage: AlbumDTO,
};

export const GetAlbumWrongParamErrorTestCases: GetAlbumErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        query: { albumId: 'text' },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 0,
    expectedStatusCode: 400,
    expectedMessage: {
      statusCode: 400,
      message: 'Parameter is not of expected type!',
    },
  },
];

export const GetAlbumSuccessTestCases: GetAlbumSuccessTestCase[] = [
  {
    params: {
      req: mockRequest({
        query: { albumId: 1 }
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: 1,
    expectedStatusCode: 200,
    expectedMessage: {
      id: 1,
      name: 'Album 1',
      artistId: 1,
      label: 'Label 1',
      year: 2008,
      songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
    }
  },
  {
    params: {
      req: mockRequest({
        query: { albumId: 2 },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: 2,
    expectedStatusCode: 200,
    expectedMessage: {
      id: 2,
      name: 'Album 2',
      artistId: 1,
      label: 'Label 1',
      year: 2009,
      songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
    },
  },
];
