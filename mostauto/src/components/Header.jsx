import { useState } from "react";
import headerlogo from "../img/headerLogo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import menuIcon from "../img/menuicon.png";
import logo from "../img/Logo.png";
import Arrow2 from "../img/Arrow2.png";
import arrow from "../img/Arrow.png";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
	  setMenuActive(!menuActive);

	  if (menuActive) {
		  document.body.classList.remove("lock"); // Убираем класс при закрытии
	  } else {
		  document.body.classList.add("lock"); // Добавляем класс при открытии
	  }
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
	  <header>
		  <img className={`headerLogo ${menuActive ? "active" : ""}`} src={headerlogo} alt="Logo"/>
		  <div className={`header-description ${menuActive ? "active" : ""}`}>АВТОМОБИЛИ ИЗ ЕВРОПЫ И США</div>

		  {/* СЛАЙДЕР */}
		  {/*<Slider {...sliderSettings} className="header-slider">*/}
		  {/*  <div>*/}
		  {/*    <h2>АВТОМОБИЛИ ИЗ ЕВРОПЫ И США</h2>*/}
		  {/*  </div>*/}
		  {/*  <div>*/}
		  {/*    <h2>ПОМОЖЕМ ВЫБРАТЬ ЛУЧШИЙ ВАРИАНТ</h2>*/}
		  {/*  </div>*/}
		  {/*  <div>*/}
		  {/*    <h2>ГАРАНТИЯ НАДЕЖНОСТИ И КАЧЕСТВА</h2>*/}
		  {/*  </div>*/}
		  {/*</Slider>*/}

		  <div className={`headerMenu ${menuActive ? "active" : ""}`}>
			  <div className={`header-burger header-burger-close ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
				  <span></span>
			  </div>

			  <div className={`header-menu ${menuActive ? "active" : ""}`}>
				  <div className="header-list">
					  <img className="headerLogo-open" src={headerlogo} alt="Logo"/>
					  <div className={`header-burger header-burger-open ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
						  <span></span>
					  </div>
					  <div className="header-list-item header-list-item-main"><a href="#">Главная</a></div>
					  <hr className="header-list-item-main-hr"/>
					  <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
						  <hr/>
						  <a href="#">Популярные авто</a></div>
					  <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
						  <hr/>
						  <a href="#Delivery">Подбор и доставка</a></div>
					  <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
						  <hr/>
						  <a href="#Tariffs">Тарифы</a></div>
					  <div className={`header-list-item ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
						  <hr/>
						  <a href="#footer">Контакты</a></div>
				  </div>
			  </div>

			  <div className={`menu-menu ${menuActive ? "active" : ""}`}>
				  <div>MENU</div>
			  </div>
		  </div>

		  <div className={`navbar ${menuActive ? "active" : ""}`}>
			  <div className="navbar-left">
				  <div className={`header-burger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
					  <span></span>
				  </div>
				  MENU
			  </div>
			  <div className="navbar-right">
				  <img className="logo-navbar" src={logo} alt=""/>
				  <div className="navbar-tittle">ПОДОБРАТЬ АВТО<img src={Arrow2} alt=""/></div>
				  <div className="navbar-contact-us">
					  <div className="number"><b>+375 (29) 857-68-96</b></div>
					  <div className="arrow"><img src={arrow} alt=""/></div>
					  <div className="description">ПОЗВОНИТЬ</div>
				  </div>
			  </div>

		  </div>
	  </header>
  );
}

export default Header;
