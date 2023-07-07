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
    email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;
      const user = users.find((user) => user.email === data.email && user.password === data.password);

      if (user) {
        console.log(user)
        Cookies.set('mixfooduser', user);
        toast.success('Đăng nhập thành công');
        setTimeout(() => {
          window.location.href = '/';
        }, 4000)
      } else {
        toast.error('Đăng nhập thất bại');
      }
    } catch (error) {
      toast.error('Đăng nhập thất bại');
      console.log('Đăng nhập thất bại:', error);
    }
  };


  return (
    <FormProvider {...methods}>
      <div className={classNames(styles.wrapper)}>
        <form onSubmit={methods.handleSubmit(onSubmit)} method='POST' className={`${styles.formWrapper}`}>
          <span className={classNames(styles.title)}>Đăng nhập</span>
          <div className={classNames(styles.InputWrapper)}>
            <label className={classNames(styles.labelInput)} htmlFor='email'>
              Email
            </label>
            <InputForm
              type='text'
              id='email'
              name='email'
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