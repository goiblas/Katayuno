import scaler from './index';

it('should return an empty result for empty dataset', () => {
    expect(scaler([])).toHaveLength(0);
});

it('should return the same dataset for one identity element', () => {
    expect(scaler([1])).toMatchObject([1]);
});

it('should return the same dataset for already normalized elements', () => {
    expect(scaler([0, 1])).toMatchObject([0, 1]);
});

it('should normalize single element in dataset using it as a max', () => {
    expect(scaler([5])).toMatchObject([1]);
});

it('should normalize dataset using min and max from the dataset', () => {
    const scaled = scaler([0, 5, 10]);
    expect(scaled).toMatchObject([0, 0.5, 1]);
});

it('should normalize dataset using defined min and max', () => {
    const scaled = scaler([1, 2, 3, 4, 5], 1, 11);
    expect(scaled).toMatchObject([0, 0.1, 0.2, 0.3, 0.4]);
});