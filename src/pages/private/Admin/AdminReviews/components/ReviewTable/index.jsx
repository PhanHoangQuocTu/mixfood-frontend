import axios from 'axios';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';

function ReviewTable() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/admin/getAllReviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = async (reviewId) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/admin/updateReview`, { _id: reviewId });
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error updating review status', error);
    }
  }

  return (
    <div className="overflow-x-auto">
      <ToastContainer />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="whitespace-nowrap" scope="col">STT</th>
            <th className="whitespace-nowrap" scope="col">Họ và tên</th>
            <th className="whitespace-nowrap" scope="col">Số điện thoại</th>
            <th className="whitespace-nowrap" scope="col">Đánh giá</th>
            <th className="whitespace-nowrap" scope="col">Tiêu đề</th>
            <th className="whitespace-nowrap" scope="col">Nội dung</th>
            <th className="whitespace-nowrap" scope="col">Ngày đánh giá</th>
            <th className="whitespace-nowrap" scope="col">Hiển thị</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{review.name}</td>
              <td>{review.phone}</td>
              <td>{review.isGood ? <span className="text-success">Tích cực</span> : <span className="text-danger">Tiêu cực</span>}</td>
              <td>{review.title}</td>
              <td className="max-w-[250px] break-all">{review.rating}</td>
              <td>{format(new Date(review.createdAt), 'dd/MM/yyyy HH:mm:ss')}</td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={review.isShow}
                  onChange={() => handleCheckboxChange(review._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewTable;
