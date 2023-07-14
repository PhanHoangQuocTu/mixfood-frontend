function AccoutTable() {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="whitespace-nowrap" scope="col">STT</th>
              <th className="whitespace-nowrap" scope="col">Họ và tên</th>
              <th className="whitespace-nowrap" scope="col">Số điện thoại</th>
              <th className="whitespace-nowrap" scope="col">Email</th>
              <th className="whitespace-nowrap" scope="col">Xác thực</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AccoutTable;
  