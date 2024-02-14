import React from "react";
import st from "./formadd.module.css";
import { Buttons } from "../Fragments/Buttons";

function FormAdd({
	current = "",
	language = {},
	add = () => {},
	close = () => {},
}) {
	const { INPUT_1_placeholder, INPUT_1_title, LABEL_text, BUTTON } = language;
	return (
		<form
			action=""
			name="NewiItemForm"
			className={st.container}
			onSubmit={(event) => {
				event?.preventDefault();
				add(current, event?.target[0]?.value, event?.target[1]?.value);
				close();
			}}>
			<label>
				{LABEL_text}
				<input
					required
					type="text"
					name={INPUT_1_title}
					title={INPUT_1_title}
					placeholder={INPUT_1_placeholder}
				/>
			</label>
			<Buttons
				BUTTON_type="submit"
				BUTTON_title={BUTTON.title}
				BUTTON_leyend={BUTTON.leyend}
			/>
		</form>
	);
}

export { FormAdd };
