import handleRetrieveData from '../../thunks/handleRetrieveData';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ mockKey: 'mockValue'}]),
  })
);

describe('The Thunk handleRetrieveData', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn(x => x);
        fetch.mockClear();
    });

    it('should call API successfully', () => {
        handleRetrieveData() (dispatch);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/cones');
    });
})
