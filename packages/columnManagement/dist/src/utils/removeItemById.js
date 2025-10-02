export function removeItemById(list, id) {
    return list.filter((item) => item.id !== id);
}
