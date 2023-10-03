"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetArtistTestCases = exports.CreateArtistTestCases = void 0;
;
exports.CreateArtistTestCases = [
    {
        params: {
            artist: {
                name: 'Artist 1',
                isGroup: false,
                nationality: 'USA',
                albums: [1, 2],
            },
        },
        expectedReturnValue: {
            id: 1,
            name: 'Artist 1',
            isGroup: false,
            nationality: 'USA',
            albums: [1, 2],
        },
        expectedCountCalledTimes: 1,
        expectedCreateCalledTimes: 1,
        expectedCreateCalledWith: {
            id: 1,
            name: 'Artist 1',
            isGroup: false,
            nationality: 'USA',
            albums: [1, 2],
        },
    },
    {
        params: {
            artist: {
                name: 'Artist 2',
                isGroup: true,
                nationality: 'UK',
                albums: [3],
            },
        },
        expectedReturnValue: {
            id: 2,
            name: 'Artist 2',
            isGroup: true,
            nationality: 'UK',
            albums: [3],
        },
        expectedCountCalledTimes: 1,
        expectedCreateCalledTimes: 1,
        expectedCreateCalledWith: {
            id: 2,
            name: 'Artist 2',
            isGroup: true,
            nationality: 'UK',
            albums: [3],
        },
    },
];
;
exports.GetArtistTestCases = [
    {
        params: {
            artistId: 1,
        },
        expectedReturnValue: {
            id: 1,
            name: 'Artist 1',
            isGroup: false,
            nationality: 'USA',
            albums: [1, 2],
        },
        expectedFindCalledTimes: 1,
        expectedFindCalledWith: 1,
    },
    {
        params: {
            artistId: 2,
        },
        expectedReturnValue: {
            id: 2,
            name: 'Artist 2',
            isGroup: true,
            nationality: 'UK',
            albums: [3],
        },
        expectedFindCalledTimes: 1,
        expectedFindCalledWith: 2,
    },
];
//# sourceMappingURL=artist-logic.mock.js.map