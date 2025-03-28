import arrow7 from '../img/Arrow7.svg'
import { useState } from "react";

const TELEGRAM_USER_ID = "@Maxon4ick"; // Твой user_id

function Form() {
	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [time, setTime] = useState("");

	const sendMessage = async () => {
	const message = `📩 *Новая заявка!*  
	📞 *Телефон:* ${phone}  
	👤 *Имя:* ${name}  
	⏰ *Время связи:* ${time}`;

	const url = `https://api.telegram.org/bot${TELEGRAM_USER_ID}/sendMessage`;

	await fetch(url, {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },
	  body: JSON.stringify({
		chat_id: TELEGRAM_USER_ID,
		text: message,
		parse_mode: "Markdown",
	  }),
	});

	alert("Заявка отправлена!");
	};

	return (
        <>
            <h5 className="form_tittle">Оставляте заявку сейчас и получите <b>бесплатную консультацию</b> специалиста и бонус-подбор согласно
            вашему запросу!</h5>
            <div className="form container form-container">
				<div className="row">
					<div className="form-description-tittle">ЗАЯВКА НА <b>БЕСПЛАТНЫЙ</b> ПОДБОР АВТОМОБИЛЯ <hr/>
						<div className="form-description">Я ознакомился с условиями <a href="">политики
							конфиденциальности</a> и согласен на обработку моих персональных данных
						</div>
					</div>
					<div className="input-group">
						<input type="text" placeholder="Номер телефона" value={phone}
							   onChange={(e) => setPhone(e.target.value)}/>
						<input type="text" placeholder="Ваше имя" value={name}
							   onChange={(e) => setName(e.target.value)}/>
						<input type="text" placeholder="Удобное время для связи" value={time}
							   onChange={(e) => setTime(e.target.value)}/>
					</div>
					<div className="zak_pod" onClick={sendMessage}>
						ЗАКАЗАТЬ <br/> ПОДБОР <img src={arrow7} alt=""/>
					</div>

				</div>
			</div>
		</>
	)
}

export default Form;