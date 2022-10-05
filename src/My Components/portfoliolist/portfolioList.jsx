import "./portfolioList.scss";

export default function portfolioList({ title, active, setSelected, id }) {
	return (
		<li
			className={active ? "portfolioList active" : "portfolioList"}
			onClick={() => setSelected(id)}
		>
			{title}
		</li>
	);
}
