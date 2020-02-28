import max from 'lodash/max';
import min from 'lodash/min';

const scaler = (dataset, _min = null, _max = null) => {
    _min = _min || min(dataset);
    _max = _max || max(dataset);

    if (dataset.length === 1) {
        _min = 0;
    }

    return dataset.map(normalize(_min, _max));
};

const normalize = (min, max) => (val) => (
    (val - min) / (max - min)
);

export default scaler;