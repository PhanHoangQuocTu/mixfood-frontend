import { memo, useRef } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import InputForm from '@/components/InputForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import styles from './BookForm.module.scss';

function BookForm() {
    const textArea = useRef();

    const validationSchema = yup.object().shape({
        name: yup.string().required('Họ và tên là bắt buộc'),
        phone: yup.string().required('Số điện thoại là bắt buộc'),
        email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
        date: yup.string().required('Ngày là bắt buộc'),
        time: yup.string().required('Giờ là bắt buộc'),
    });

    const methods = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        data.note = textArea.current.value;
        console.log(data);

        try {
            const response = await axios.post('http://127.0.0.1:3001/api/booking/book', data);
            console.log(response.data);

            toast.success(
                'Đặt bàn thành công. Chúng tôi sẽ gọi xác nhận trong vài phút nữa. Cảm ơn Bạn đã ủng hộ'
            );
        } catch (error) {
            console.error('Error creating booking', error);
            toast.error('Đặt bàn thất bại. Vui lòng thử lại sau');
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
                            name='email'
                            className={classNames(styles.FormInput)}
                            placeholder='Nhập email'
                        />
                    </div>
                    <div className={classNames(styles.InputWrapper)}>
                        <InputForm
                            type='date'
                            name='date'
                            className={classNames(styles.FormInput)}
                            placeholder='Ngày'
                        />
                    </div>
                    <div className={classNames(styles.InputWrapper)}>
                        <InputForm
                            type='time'
                            name='time'
                            className={classNames(styles.FormInput)}
                            placeholder='Giờ'
                        />
                    </div>
                    <div className={classNames(styles.InputWrapper)}>
                        <textarea
                            ref={textArea}
                            name='note'
                            className={classNames(styles.FormInput, 'h-[120px]')}
                            placeholder='Ghi chú'
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

export default memo(BookForm);
