import { ArtistDTO, PostArtistDTO } from '@/api/logics/dto/artist-dto';
import { Request, Response } from 'express';
import { mockRequest, mockResponse } from 'jest-mock-req-res';

/*************** POST ARTIST *****************/
interface PostArtistErrorTestCase {
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

interface PostArtistSuccessTestCase {
  params: {
    req: Request,
    res: Response,
  },
  expectedLogicCalledTimes: number,
  expectedLogicCalledWith: PostArtistDTO,
  expectedStatusCode: number,
  expectedMessage: ArtistDTO,
};

export const PostArtistNoParamErrorTestCases: PostArtistErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Artist 1',
          nationality: 'USA',
          albums: [1, 2],
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
          isGroup: false,
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

export const PostArtistWrongParamErrorTestCases: PostArtistErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Artist 1',
          isGroup: 0,
          nationality: 'USA',
          albums: [1, 2],
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
          name: 'Artist 1',
          isGroup: false,
          nationality: 5,
          albums: [1, 2],
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
          name: 'Artist 1',
          isGroup: false,
          nationality: 'USA',
          albums: [{ id: 1 }],
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

export const PostArtistSuccessTestCases: PostArtistSuccessTestCase[] = [
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Artist 1',
          isGroup: false,
          nationality: 'USA',
          albums: [1, 2],
        },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: {
      name: 'Artist 1',
      isGroup: false,
      nationality: 'USA',
      albums: [1, 2],
    },
    expectedStatusCode: 200,
    expectedMessage: {
      id: 1,
      name: 'Artist 1',
      isGroup: false,
      nationality: 'USA',
      albums: [1, 2],
    },
  },
  {
    params: {
      req: mockRequest({
        body: {
          name: 'Artist 2',
          isGroup: true,
          nationality: 'UK',
          albums: [3],
        }
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: {
      name: 'Artist 2',
      isGroup: true,
      nationality: 'UK',
      albums: [3],
    },
    expectedStatusCode: 200,
    expectedMessage: {
      id: 1,
      name: 'Artist 2',
      isGroup: true,
      nationality: 'UK',
      albums: [3],
    },
  },
];

/*************** GET ARTIST *****************/
interface GetArtistErrorTestCase {
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

interface GetArtistSuccessTestCase {
  params: {
    req: Request,
    res: Response,
  },
  expectedLogicCalledTimes: number,
  expectedLogicCalledWith: number,
  expectedStatusCode: number,
  expectedMessage: ArtistDTO,
};

export const GetArtistWrongParamErrorTestCases: GetArtistErrorTestCase[] = [
  {
    params: {
      req: mockRequest({
        query: { artistId: 'text' },
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

export const GetArtistSuccessTestCases: GetArtistSuccessTestCase[] = [
  {
    params: {
      req: mockRequest({
        query: { artistId: 1 }
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: 1,
    expectedStatusCode: 200,
    expectedMessage: {
      id: 1,
      name: 'Artist 1',
      isGroup: false,
      nationality: 'USA',
      albums: [1, 2],
    }
  },
  {
    params: {
      req: mockRequest({
        query: { artistId: 2 },
      }),
      res: mockResponse(),
    },
    expectedLogicCalledTimes: 1,
    expectedLogicCalledWith: 2,
    expectedStatusCode: 200,
    expectedMessage: {
      id: 2,
      name: 'Artist 2',
      isGroup: true,
      nationality: 'UK',
      albums: [3],
    },
  },
];
