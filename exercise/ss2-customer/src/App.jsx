import './App.css'

function App() {

  const customers = [
    {
      id: 1,
      code: "C001",
      name: "Nguyễn Văn A",
      address: "Đà Nẵng",
      type: "VIP"
    },
    {
      id: 2,
      code: "C002",
      name: "Trần Thị B",
      address: "Hà Nội",
      type: "Thường"
    },
    {
      id: 3,
      code: "C003",
      name: "Lê Văn C",
      address: "TP.HCM",
      type: "VIP"
    }
  ];

  return (
      <>
        <h1>Danh sách khách hàng</h1>

        <table border="1">
          <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Loại KH</th>
          </tr>
          </thead>

          <tbody>
          {
            customers.map((customer, index) => (
                <tr key={customer.id}>
                  <td>{index + 1}</td>
                  <td>{customer.id}</td>
                  <td>{customer.code}</td>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.type}</td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </>
  )
}

export default App