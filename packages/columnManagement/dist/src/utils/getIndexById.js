export function getIndexById(id, items) {
    return items.findIndex(item => item.id === id);
}
