export function getItemById(id, list) {
    return list.find(item => item.id === id);
}
