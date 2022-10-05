import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
	const [email, setEmail] = useState("");
	const [desc, setDesc] = useState("");
	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !desc) {
			setMessage(false);
			alert("Email or Message can't be blank");
		} else {
			setEmail("");
			setDesc("");
			setMessage(true);
		}
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/shake.svg" alt="" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Email"
						htmlFor="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<textarea
						placeholder="Message"
						value={desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
					></textarea>
					<button type="submit">Send</button>
					{message && <span>Thanks, I'll reply ASAP :)</span>}
				</form>
			</div>
		</div>
	);
}
