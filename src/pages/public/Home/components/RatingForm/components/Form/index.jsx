import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import InputForm from '@/components/InputForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import styles from './Form.module.scss';
import { memo, useRef } from 'react';

function Form() {
    const textArea = useRef()
    const validationSchema = yup.object().shape({
        name: yup.string().required('Họ và tên là bắt buộc'),
        phone: yup
            .string()
            .required('Số điện thoại là bắt buộc')
            .matches(/^(0|\+84)[1-9][0-9]{8}$/, 'Số điện thoại không hợp lệ'),
        title: yup.string().required('Tiêu đề là bắt buộc'),
    });

    const methods = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        data.rating = textArea.current.value;
        console.log(data);

        try {
            const response = await axios.post('http://localhost:3001/api/review/send-review', data);
            console.log(response.data);

            toast.success(
                'Đã gửi đánh giá. Chúng tôi sẽ tiếp nhận và phát triển thêm dựa trên đánh giá của bạn'
            );
        } catch (error) {
            console.error('Error sending review', error);
            toast.error('Gửi đánh giá thất bại. Vui lòng thử lại sau');
        }
    };

    return (
        <FormProvider {...methods}>
            <div className={classNames(styles.wrapper)}>
                <form
                    id='ratingForm'
                    onSubmit={handleSubmit(onSubmit)}
                    method='POST'
                    className={classNames(styles.formWrapper)}
                >
                    <div
                        className={classNames(
                            styles.InputWrapper,
                            'grid',
                            'md:grid-cols-2',
                            'md:gap-[50px]',
                            'xs:gap-[24px]'
                        )}
                    >
                        <InputForm
                            type='text'
                            name='name'
                            className={classNames(styles.FormInput)}
                            placeholder='Nhập họ và tên'
                        />
                        <InputForm
                            type='text'
                            name='phone'
                            className={classNames(styles.FormInput)}
                            placeholder='Nhập số điện thoại'
                        />
                    </div>
                    <div className={classNames(styles.InputWrapper)}>
                        <InputForm
                            type='text'
                            name='title'
                            className={classNames(styles.FormInput)}
                            placeholder='Tiêu đề'
                        />
                    </div>
                    <div className={classNames(styles.InputWrapper)}>
                        <textarea
                            ref={textArea}
                            form='ratingForm'
                            className={classNames(styles.FormInput, 'h-[120px]')}
                            name='rating'
                            placeholder='Nhập đánh giá của bạn tại đây ...'
                        />
                    </div>
                    <ToastContainer />
                    <button type='submit' className={classNames(styles.formBtn)}>
                        Gửi
                    </button>
                </form>
            </div>
        </FormProvider>
    );
}

export default memo(Form);
