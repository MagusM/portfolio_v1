export const getFullCssClassName = (funcName, className) => {
    if (className === undefined)
        return `sm__${funcName.toLowerCase()}`;
    return `sm__${funcName.toLowerCase()}-${className}`;
}