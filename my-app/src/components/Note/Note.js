import React from "react";
import "./Note.css";

export const Note = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? "modal active" : "modal"}
			onClick={() => setActive(false)}
		>
			<div
				className="modal__content"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
