"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbumSuccessTestCases = exports.GetAlbumWrongParamErrorTestCases = exports.PostAlbumSuccessTestCases = exports.PostAlbumLogicErrorTestCases = exports.PostAlbumWrongParamErrorTestCases = exports.PostAlbumNoParamErrorTestCases = void 0;
const jest_mock_req_res_1 = require("jest-mock-req-res");
;
;
exports.PostAlbumNoParamErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    artistId: 1,
                    label: 'Label 1',
                    year: 2008,
                    songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    year: 2008,
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
        },
        expectedLogicCalledTimes: 0,
        expectedStatusCode: 400,
        expectedMessage: {
            statusCode: 400,
            message: 'Parameter missing!',
        },
    },
];
exports.PostAlbumWrongParamErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 1',
                    artistId: 'Artist 1',
                    label: 'Label 1',
                    year: 2008,
                    songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 1',
                    artistId: 1,
                    label: 'Label 1',
                    year: 'dois mil e oito',
                    songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 1',
                    artistId: 1,
                    label: 'Label 1',
                    year: 2008,
                    songs: [{ id: 'um', name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
        },
        expectedLogicCalledTimes: 0,
        expectedStatusCode: 400,
        expectedMessage: {
            statusCode: 400,
            message: 'Parameter is not of expected type!',
        },
    },
];
exports.PostAlbumLogicErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 1',
                    artistId: 1,
                    label: 'Label 1',
                    year: 2008,
                    songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 1',
                    artistId: 1,
                    label: 'Label 1',
                    year: 2008,
                    songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
exports.PostAlbumSuccessTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 1',
                    artistId: 1,
                    label: 'Label 1',
                    year: 2008,
                    songs: [{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Album 2',
                    artistId: 1,
                    label: 'Label 1',
                    year: 2009,
                    songs: [{ id: 1, name: 'Song 3' }, { id: 2, name: 'Song 4' }],
                }
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
;
;
exports.GetAlbumWrongParamErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                query: { albumId: 'text' },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
        },
        expectedLogicCalledTimes: 0,
        expectedStatusCode: 400,
        expectedMessage: {
            statusCode: 400,
            message: 'Parameter is not of expected type!',
        },
    },
];
exports.GetAlbumSuccessTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                query: { albumId: 1 }
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                query: { albumId: 2 },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
//# sourceMappingURL=album-controller.mock.js.map