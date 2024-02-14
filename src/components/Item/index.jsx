import React from "react";
import st from "./item.module.css";

import { Buttons } from "../Fragments/Buttons";

export function Item({ style = false, icons = {}, click = {}, language = {} }) {
	const { check_, delete_ } = click;
	const { ICO_check, ICO_delete } = icons;
	const { BUTTON_CHECK_title, BUTTON_DELETE_title, ITEM_title } = language;
	return (
		<>
			<div className={style ? st.off : st.container}>
				<Buttons
					BUTTON_click={check_}
					BUTTON_icon={ICO_check}
					BUTTON_title={BUTTON_CHECK_title}
				/>
				<article>
					<h1>{ITEM_title}</h1>
				</article>
				<Buttons
					BUTTON_click={delete_}
					BUTTON_icon={ICO_delete}
					BUTTON_title={BUTTON_DELETE_title}
				/>
			</div>
		</>
	);
}
