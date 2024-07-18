"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillVariantValues = exports.createSlug = void 0;
const createSlug = (name) => {
    return name.toLowerCase().replace(/ /g, '-');
};
exports.createSlug = createSlug;
// export const fillVariantValues = (attributes: Attribute[], obj: any, index: number, values: any[]) => {
//   if (index === attributes.length) {
//     values.push(obj)
//     return
//   }
//   attributes[index].options.forEach(option => {
//     fillVariantValues(attributes, {...obj, [attributes[index].name]: option.name}, index + 1, values)
//   })
// }
const fillVariantValues = (arrays, index, current, result) => {
    if (index === arrays.length) {
        result.push([...current]);
        return;
    }
    for (let i = 0; i < arrays[index].options.length; i++) {
        current.push(arrays[index].options[i].id);
        (0, exports.fillVariantValues)(arrays, index + 1, current, result);
        current.pop();
    }
};
exports.fillVariantValues = fillVariantValues;
