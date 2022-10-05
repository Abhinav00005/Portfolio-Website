import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuopen }) {
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">
						genius.
					</a>
					<div className="itemContainer">
						<PersonIcon className="icon" />
						<span>+91 97846 55544</span>
					</div>
					<div className="itemContainer">
						<EmailIcon className="icon" />
						<span>
							<a href="abhinavkabra217@gmail.com" className="email">abhinavkabra217@gmail.com</a>
						</span>
					</div>
				</div>
				<div className="right">
					<div className="hamburger" onClick={() => setMenuopen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
				</div>
			</div>
		</div>
	);
}
