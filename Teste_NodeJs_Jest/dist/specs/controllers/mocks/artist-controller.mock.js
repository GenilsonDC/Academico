"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistSuccessTestCases = exports.GetArtistWrongParamErrorTestCases = exports.PostArtistSuccessTestCases = exports.PostArtistWrongParamErrorTestCases = exports.PostArtistNoParamErrorTestCases = void 0;
const jest_mock_req_res_1 = require("jest-mock-req-res");
;
;
exports.PostArtistNoParamErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Artist 1',
                    nationality: 'USA',
                    albums: [1, 2],
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
                    isGroup: false,
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
exports.PostArtistWrongParamErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Artist 1',
                    isGroup: 0,
                    nationality: 'USA',
                    albums: [1, 2],
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
                    name: 'Artist 1',
                    isGroup: false,
                    nationality: 5,
                    albums: [1, 2],
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
                    name: 'Artist 1',
                    isGroup: false,
                    nationality: 'USA',
                    albums: [{ id: 1 }],
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
exports.PostArtistSuccessTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Artist 1',
                    isGroup: false,
                    nationality: 'USA',
                    albums: [1, 2],
                },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                body: {
                    name: 'Artist 2',
                    isGroup: true,
                    nationality: 'UK',
                    albums: [3],
                }
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
;
;
exports.GetArtistWrongParamErrorTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                query: { artistId: 'text' },
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
exports.GetArtistSuccessTestCases = [
    {
        params: {
            req: (0, jest_mock_req_res_1.mockRequest)({
                query: { artistId: 1 }
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
            req: (0, jest_mock_req_res_1.mockRequest)({
                query: { artistId: 2 },
            }),
            res: (0, jest_mock_req_res_1.mockResponse)(),
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
//# sourceMappingURL=artist-controller.mock.js.map