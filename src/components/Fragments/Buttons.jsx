import React from "react";

function Buttons({
	BUTTON_type,
	BUTTON_title = "",
	BUTTON_icon = null,
	BUTTON_leyend = "",
	BUTTON_click = () => {},
}) {
	return (
		<button type={BUTTON_type} title={BUTTON_title} onClick={BUTTON_click}>
			{BUTTON_icon ? BUTTON_icon : BUTTON_leyend}
		</button>
	);
}

export { Buttons };
