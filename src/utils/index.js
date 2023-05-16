// Select specific fields from a query object
const selectQueryFields = (queryObj, fields = []) => {
    const selectedFields = {};

    for (const field of fields) {
        const value = queryObj[field];
        if(value) {
            // If query value is an array, return the first element in the array
            if(Array.isArray(value)) {
                selectedFields[field] = value[0];
                continue;
            }
            selectedFields[field] = value;
        }
    }

    return selectedFields;
}

module.exports = {
    selectQueryFields
}