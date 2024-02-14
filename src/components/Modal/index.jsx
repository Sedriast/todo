import React from "react";
import st from "./modal.module.css";

import { createPortal } from "react-dom";
import { Buttons } from "../Fragments/Buttons";

function Modal({
	language = {},
	children = <></>,
	BUTTON_icon = <></>,
	defuceAction = () => {},
}) {
	return createPortal(
		<section className={st.container}>
			<Buttons
				BUTTON_icon={BUTTON_icon}
				BUTTON_click={defuceAction}
				BUTTON_title={language.BUTTON_title}
			/>
			{children}
		</section>,
		document.getElementById("modal")
	);
}

export { Modal };
