export const findContainer = (id, items) => {
    const keys = Object.keys(items);
    if (id in items) {
        return id;
    }
    for (const key of keys) {
        const container = items[key];
        const foundItem = container.find(item => item.id === id);
        if (foundItem) {
            return key;
        }
    }
    return undefined;
};
