    const listCitiesInVietNam =[
        {
            id:1,
            name:"Hà Nội"
        },
        {
            id: 2,
            name: "TP. Hồ Chí Minh"
        },
        {
            id: 3,
            name: "Huế"
        },
        {
            id: 4,
            name: "Đà Nẵng"
        },
        {
            id: 5,
            name: "Hải Phòng"
        },
        {
            id: 6,
            name: "Cần Thơ"
        },
    ]

    export function getAll(){
        // call API của backend
        return [...listCitiesInVietNam];
    }