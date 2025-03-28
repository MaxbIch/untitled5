import footerlogo from "../img/headerLogo.png";

function Footer() {
    return (
        <footer id="footer" className="footer">
            <h4>КОНТАКТЫ</h4>
            <div className="footer-container">
                <div className="footer-left">
                    <div>Время работы: <br/>пн - пт, 10:00 - 19:00</div>
                    <div>E-mail:<br/>mostauto@gmail.com</div>
                    <div>Телефон:<br/>+375 (29) 957-67-75<br/>+375 (44) 857-86-68<br/></div>
                </div>
                <div className="footer-right">
                    <img className="footerLogo" src={footerlogo} alt=""/><br/>
                    <a href="">MOSTAUTO.by</a>
                    <div>Все права защищены</div>
                    <div>Политика конфиденциальности</div>
                    <div>Информация на сайте носит ознакомительный характер и не является публичной офертой</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;