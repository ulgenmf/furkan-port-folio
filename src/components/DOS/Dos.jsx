import React from "react";
import Draggable from "react-draggable";

function Dos() {
	return (
		<Draggable>
			<iframe
				width="680"
				height="400"
				frameborder="0"
				src="https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Fcustom%2Fdos%2Fdoom.jsdos?anonymous=1"
				allowfullscreen
			></iframe>
		</Draggable>
	);
}

export default Dos;
