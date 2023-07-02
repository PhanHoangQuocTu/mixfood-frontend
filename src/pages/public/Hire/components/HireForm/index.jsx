import { memo, useRef } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import InputForm from '@/components/InputForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './HireForm.module.scss';

function HireForm() {
    const textArea = useRef();

    const validationSchema = yup.object().shape({
        name: yup.string().required('Họ và tên là bắt buộc'),
        phone: yup.string().required('Số điện thoại là bắt buộc'),
        email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
        question: yup.string().required('Bạn hãy trả lời câu hỏi')
    });

    const methods = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data) => {
        data.note = textArea.current.value;
        console.log(data)
        toast.success(
            'Chúng tôi đã nhận được thông tin. Chúng tôi sẽ sớm liên hệ đến bạn sớm nhất'
        );
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
                            type='text'
                            name='question'
                            className={classNames(styles.FormInput)}
                            placeholder='Bạn có thể linh động thời gian làm việc được không ?'
                        />
                    </div>
                    <div className={classNames(styles.InputWrapper)}>
                        <textarea
                            ref={textArea}
                            name='note'
                            className={classNames(styles.FormInput, 'h-[120px]')}
                            placeholder='Bạn có mong muốn gì sau khi vào làm việc không ?'
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

export default memo(HireForm);
