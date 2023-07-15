import { memo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "react-hook-form";
import * as Yup from "yup";
import styles from './AdminLoginForm.module.scss'
import classNames from "classnames";
import InputForm from "@/components/InputForm";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
    username: Yup.string().required("Vui lòng nhập tài khoản"),
    password: Yup.string().required("Vui lòng nhập mật khẩu"),
});


function AdminLoginForm() {
    const navigate = useNavigate()
    const methods = useForm({
        resolver: yupResolver(schema),
    });

    const { handleSubmit } = methods;

    const onSubmit = (data) => {
        if (data.username === 'admin' && data.password === 'admin') {
            toast.success("Đăng nhập thành công")
            setTimeout(() => {
                navigate('/admin/home')
            }, 2000)
        }
        else {
            toast.error('Sai tài khoản hoặc mật khẩu')
        }
    };

    return (
        <FormProvider {...methods}>
            <ToastContainer />
            <form className={classNames(styles.wrapper)} onSubmit={handleSubmit(onSubmit)}>
                <span className={classNames(styles.heading)}>Hello admin</span>
                <div className={classNames(styles.form)}>
                    <div className={classNames(styles.item)}>
                        <label className={classNames(styles.label)} htmlFor="username">Tài khoản:</label>
                        <InputForm
                            name="username"
                            type="text"
                            className={classNames(styles.input)}
                            placeholder="Nhập tài khoản"
                        />
                    </div>
                    <div className={classNames(styles.item)}>
                        <label className={classNames(styles.label)} htmlFor="password">Mật khẩu:</label>
                        <InputForm
                            name="password"
                            type="password"
                            className={classNames(styles.input)}
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <button type="submit" className={classNames(styles.btnLogin)}>Đăng nhập</button>
                </div>
            </form>
        </FormProvider>
    );
}

export default memo(AdminLoginForm);
