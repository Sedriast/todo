import React from "react";
import st from "./navmenu.module.css";

import { Buttons } from "../Fragments/Buttons";

export function Navmenu({
	language = {},
	BUTTON_icon = <></>,
	FORM_submit = () => {},
}) {
	const { INPUT_placeholder, INPUT_title, BUTTON_title } = language;
	return (
		<header className={st.content}>
			<form
				action=""
				onSubmit={(event) => {
					event.preventDefault();
					FORM_submit(event?.target[0]?.value);
				}}>
				<input
					type="search"
					name={INPUT_title}
					title={INPUT_title}
					placeholder={INPUT_placeholder}
				/>
				<Buttons
					BUTTON_type="submit"
					BUTTON_icon={BUTTON_icon}
					BUTTON_title={BUTTON_title}
				/>
			</form>
		</header>
	);
}
