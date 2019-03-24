import React from 'react';
import '../../../styles/views/header-login.scss';

const HeaderLogin = () => {
    return (
        <div className="header-login">
            <div className="header-login__container">
                {/* <div className="header-login__container-language">
                    <img src='' alt=''/>
                    <span className="header-login__container-code">đ</span>
                </div> */}
                <div className="header-login__container-register">
                    <button className="header-login__button">
                        <strong>đăng nhập</strong>
                    </button>
                    <button className="header-login__button header-login__button--border">
                        <strong>tạo tài khoản</strong>
                    </button>
                </div>            
            </div>
        </div>
    );
};

export default HeaderLogin;