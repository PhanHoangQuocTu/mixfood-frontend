import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState, useEffect } from 'react';

function AccoutTable() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/getAllAccount');
        setAccounts(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching accounts', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table table-striped table-hover">
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
          {accounts.map((account, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{account.name}</td>
              <td>{account.phone}</td>
              <td>{account.email}</td>
              <td>{account.isVerified ? <FontAwesomeIcon icon={faCheck} className='text-success'/> : <FontAwesomeIcon icon={faClose} className='text-danger'/>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccoutTable;
