import "./Intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/man.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi there, I'm</h2>
					<h1>Abhinav Kabra</h1>
					<h3>
						<span>
							<Typewriter
								options={{
									strings: ["IITian", "Web Developer", "Competitive Programmer"],
									autoStart: true,
									delay: 100,
									loop: true
								}}
							/>
						</span>
					</h3>
					<a href="#portfolio">
						<img src="assets/down.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
}
