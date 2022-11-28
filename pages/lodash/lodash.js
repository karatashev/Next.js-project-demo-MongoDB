import _ from 'lodash';

export default function prepareForSerializatoin(obj) {
    return obj.mapValues(obj, value => typeof value === 'undefined' ? null : value);
}

