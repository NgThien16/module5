// gọi API

const listStudent =[
    {
        id:1,
        name:"Thiện"
    },
    {
        id: 2,
        name: "Dương"
    }
]

export function getAll(){
    // call API của backend
    return [...listStudent];
}