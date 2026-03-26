const listCustomer =[
    {id:1,
    name:"customer1"
    },
    {id:2,
        name:"customer2"
    }
]
export function getAll(){
    return listCustomer;
}
export function deleteById(id){
    for (let i = 0; i <listCustomer.length ; i++) {
        if(listCustomer[i].id ==id){
            listCustomer.splice(i, 1);
            break;
        }
    }
}