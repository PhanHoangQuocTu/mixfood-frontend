import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import InputForm from '@/components/InputForm';
import 'react-toastify/dist/ReactToastify.css';

import styles from './SignUp.module.scss';
import { memo } from 'react';

function SignUp() {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập tên'),
    phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
    email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận phải giống mật khẩu')
      .required('Vui lòng nhập lại mật khẩu'),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    // Gửi dữ liệu đăng ký đi
    console.log(data)
  };

  return (
    <FormProvider {...methods}>
      <div className={classNames(styles.wrapper)}>
        <form onSubmit={methods.handleSubmit(onSubmit)} method='POST' className={`${styles.formWrapper}`}>
          <span className={classNames(styles.title)}>Đăng ký</span>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='name'>
              Tên
            </label>
            <InputForm
              type='text'
              id='name'
              name='name'
              className={`${styles.signUpFormInput}`}
              placeholder='Tên'
            />
          </div>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='phoneNumber'>
              Số điện thoại
            </label>
            <InputForm
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              className={`${styles.signUpFormInput}`}
              placeholder='Số điện thoại'
            />
          </div>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='email'>
              Email
            </label>
            <InputForm
              type='text'
              id='email'
              name='email'
              className={`${styles.signUpFormInput}`}
              placeholder='Email'
            />
          </div>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='password'>
              Mật khẩu
            </label>
            <InputForm
              type='password'
              id='password'
              name='password'
              className={`${styles.signUpFormInput}`}
              placeholder='Mật khẩu'
            />
          </div>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='confirmPassword'>
              Xác nhận mật khẩu
            </label>
            <InputForm
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className={`${styles.signUpFormInput}`}
              placeholder='Xác nhận mật khẩu'
            />
          </div>
          <div className={`${styles.SignUpFormBtnWrapper}`}>
            <button className={`font-poppins ${styles.SignUpFormSubmitBtn}`} type='submit'>
              Đăng ký
            </button>
            <div className={classNames(styles.linkWrapper)}>
              <Link to='/' className={classNames(styles.LinkHome)}>
                Trang chủ
              </Link>
              <Link to='/signin' className={classNames(styles.LinkSignUp)}>
                Đăng nhập
              </Link>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default memo(SignUp);