import React from 'react';
import '../../../styles/views/header-nav.scss';


const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="header-nav__container">
        <div className="header-nav__logo">
          <a className="header-nav__logo-link" href="https://www.agoda.com/vi-vn/?cid=1415320&tag=33d4f1d9-7d9e-63d7-0831-f7a258232cd1&gclid=Cj0KCQiAn4PkBRCDARIsAGHmH3dNvpO3eodwa0igvOP55ZyyIMGMBa74LKZfPME89a0tOhEswKnMkuUaAsBqEALw_wcB">
            <img src="https://cdn6.agoda.net/images/MVC/default/agoda-logo.svg?f=webp" alt="Agoda" />
          </a>
        </div>
        <ul className="header-nav__menu">
          <li className="header-nav__menu-item">
            <a href="https://www.agoda.com/vi-vn/?cid=1415320&tag=33d4f1d9-7d9e-63d7-0831-f7a258232cd1&gclid=Cj0KCQiAn4PkBRCDARIsAGHmH3dNvpO3eodwa0igvOP55ZyyIMGMBa74LKZfPME89a0tOhEswKnMkuUaAsBqEALw_wcB">
              <span>Chỗ ở</span>
            </a>
          </li>
          <li className="header-nav__menu-item">
            <a href="https://flights.agoda.com/in?lc=vi&cc=vn&url=%2fflights&mc=VND&p=header">
              <span>Chuyến bay</span>
            </a>
          </li>
          <li className="header-nav__menu-item">
            <a href="https://agoda.mozio.com/vi-vn?currency=VND&ref=agoda&utm_campaign=1793794&utm_source=1793794">
              <span>Taxi sân bay</span>
            </a>
          </li>
          <li className="header-nav__menu-item">
            <a href="https://www.agoda.com/vi-vn/deals?asq=72CyIT9hEOOlu0bIDXZndl8SPUCS79CWCSp98aqBrznvgYj8tpJJ54MhdKNaxh5GuGXvKXkF%2b7TmdXkc3kvkmjFYcB%2fQufK56VfmO9EYHbozZv5gg4Te4W62Ux3BSdYuHDlyrWajqwBRixu9eeBeqGCUc5vNOQ5bDhPcQgO1d3S5N5Gog1BD1vByUJvIXWdJCpAzJy%2bIPcIhZIlXClDyylgcxQIEmaCEggy3jGouu3Q%3d&amp;city=16552&amp;cid=1415320&amp;tick=636876053735&amp;languageId=24&amp;userId=48df9c48-07fa-4f6a-9629-d7eeb9d05e2a&amp;sessionId=m31qcjbfiovl4jivy0psvvjq&amp;pageTypeId=1&amp;origin=VN&amp;locale=vi-VN&amp;tag=33d4f1d9-7d9e-63d7-0831-f7a258232cd1&amp;gclid=Cj0KCQiAn4PkBRCDARIsAGHmH3dNvpO3eodwa0igvOP55ZyyIMGMBa74LKZfPME89a0tOhEswKnMkuUaAsBqEALw_wcB&amp;aid=82672&amp;currencyCode=VND&amp;htmlLanguage=vi-vn&amp;cultureInfoName=vi-VN&amp;ckuid=48df9c48-07fa-4f6a-9629-d7eeb9d05e2a&amp;prid=0&amp;checkIn=2019-03-24&amp;checkOut=2019-04-10&amp;rooms=1&amp;adults=2&amp;children=0&amp;priceCur=VND&amp;los=17&amp;textToSearch=H%E1%BB%99i+An&amp;productType=-1&amp;travellerType=1">
              <span>Ưu đãi cho hôm nay</span>
            </a>
          </li>
          <li className="header-nav__menu-item">
            <a href="https://www.agoda.com/vi-vn/?cid=1415320&tag=33d4f1d9-7d9e-63d7-0831-f7a258232cd1&gclid=Cj0KCQiAn4PkBRCDARIsAGHmH3dNvpO3eodwa0igvOP55ZyyIMGMBa74LKZfPME89a0tOhEswKnMkuUaAsBqEALw_wcB#homes">
              <span>agoda homes</span>
            </a>
          </li>
          <li className="header-nav__menu-item">
            <i className="header-nav__button">...</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;