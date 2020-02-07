export const updateObjectInArray = (items, itemId, objPropName, newOjectProps) => {
    items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newOjectProps}
        }
        return u;
    });
}