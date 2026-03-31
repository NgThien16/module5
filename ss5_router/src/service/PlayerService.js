
const listPlayer = [
    { id: 1, playerCode: "PLA001", name: "Neymar", birthday: "01/01/1989", transfer: 100, position: "Left Winger" },
    { id: 2, playerCode: "PLA002", name: "Ronaldo", birthday: "01/01/1985", transfer: 100, position: "Striker" },
    { id: 3, playerCode: "PLA003", name: "Messi", birthday: "01/01/1987", transfer: 100, position: "Right Winger" }
];

export function getAll() {
    return [...listPlayer];
}

export function deleteById(id) {
    return listPlayer.find(e=>e.id==id);
}

export function addNew(player) {

    listPlayer.push(player);
}
