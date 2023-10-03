"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbumTestCases = exports.artistMock = exports.CreateAlbumTestCases = void 0;
;
exports.CreateAlbumTestCases = [
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
exports.artistMock = {
    id: 1,
    name: 'Artist 1',
    isGroup: false,
    nationality: 'USA',
    albums: [],
};
;
exports.GetAlbumTestCases = [
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
//# sourceMappingURL=album-logic.mock.js.map