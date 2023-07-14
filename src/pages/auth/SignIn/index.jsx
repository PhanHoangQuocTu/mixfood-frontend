import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import Cookies from 'js-cookie';
import axios from 'axios';
import InputForm from '@/components/InputForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import styles from './SignIn.module.scss';
import { memo } from 'react';

function SignIn() {
  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .required('Số điện thoại là bắt buộc')
      .matches(/^(0|\+84)[1-9][0-9]{8}$/, 'Số điện thoại không hợp lệ'),
    password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/api/auth/sign-in', data);
      const user = response.data;

      if (user) {
        console.log(user)
        Cookies.set('mixfooduser', JSON.stringify(user));
        toast.success('Đăng nhập thành công');
        setTimeout(() => {
          window.location.href = '/';
        }, 4000)
      } else {
        toast.error('Đăng nhập thất bại');
      }
    } catch (error) {
      toast.error('Đăng nhập thất bại');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={classNames(styles.wrapper)}>
        <form onSubmit={methods.handleSubmit(onSubmit)} method='POST' className={`${styles.formWrapper}`}>
          <span className={classNames(styles.title)}>Đăng nhập</span>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='phone'>
              Số điện thoại
            </label>
            <InputForm
              type='text'
              id='phone'
              name='phone'
              className={`${styles.signInFormInput}`}
              placeholder='Phone Number'
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
              className={`${styles.signInFormInput}`}
              placeholder='Password'
            />
          </div>
          <div className={`${styles.SignInFormBtnWrapper}`}>
            <button className={`font-poppins ${styles.SignInFormSubmitBtn}`} type='submit'>
              Đăng nhập
            </button>
            <Link to='/signin' className={`${styles.SignInFormForgotPass} font-poppins`}>
              Quên mật khẩu?
            </Link>
            <div className={classNames(styles.linkWrapper)}>
              <Link to='/' className={classNames(styles.LinkHome)}>
                Trang chủ
              </Link>
              <Link to='/signup' className={classNames(styles.LinkSignUp)}>
                Đăng ký
              </Link>
            </div>
          </div>
          <ToastContainer />

        </form>
      </div>
    </FormProvider>
  );
}

export default memo(SignIn)