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

const generateCacheKey = (req, obj) => {
    const path = req.path;
    // Checks if the object is empty and return a request path
    if(Object.keys(obj).length === 0) {
        return path;
    }
    
    // Stringify an object like this {start: 1, limit: 3} to become start=1&limit-3
    const stringifiedObj = new URLSearchParams(obj).toString();
    return `${path}?${stringifiedObj}`;
}


module.exports = {
    selectQueryFields,
    generateCacheKey
}