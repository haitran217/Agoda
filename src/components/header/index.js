import React from 'react';
import HeaderNavContainer from './Container/HeaderNav.Container';
import HeaderLoginContainer from './Container/HeaderLogin.Container';
import '../../styles/views/header.scss'
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <HeaderNavContainer />
                <HeaderLoginContainer />
            </div>
        );
    }
}

export default Header;