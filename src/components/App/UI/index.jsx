import React from "react";
import st from "../app.module.css";

import { useContext } from "react";
import { HomeContext } from "../../../hooks/useContexts";
import { icon_keys, language_keys } from "../../../constants/keys";

import { Panel } from "./Panel";
import { Modal } from "../../Modal";
import { FormAdd } from "../../FormAdd";
import { Navmenu } from "../../Navmenu";
import { Buttons } from "../../Fragments/Buttons";

function UI() {
	const {
		ico,
		error,
		loading,
		addITEM,
		language,
		checkITEM,
		searchITEM,
		deleteITEM,
		activeModal,
		defuseModal,
		generateUUID,
		searchedITEM,
		isActiveModal,
	} = useContext(HomeContext);

	return (
		<>
			<main>
				<Navmenu
					FORM_submit={searchITEM}
					language={language[language_keys.NAVMENU]}
					BUTTON_icon={ico(icon_keys.MAGNIFYING_GLASS)}
				/>
				<Buttons
					BUTTON_click={activeModal}
					BUTTON_icon={ico(icon_keys.PLUS)}
					BUTTON_title={language[language_keys.ADDITION_BUTTON].BUTTON_title}
				/>
				<Panel
					style={st.scrollP}
					language={language[language_keys.PANEL]}
					itemIcons={{
						ICO_check: ico(icon_keys.CHECK),
						ICO_delete: ico(icon_keys.TRASH),
					}}
					context={{
						error,
						loading,
						checkITEM,
						deleteITEM,
						searchedITEM,
					}}
				/>
			</main>
			{isActiveModal && (
				<Modal
					defuceAction={defuseModal}
					BUTTON_icon={ico(icon_keys.CLOSE)}
					language={language[language_keys.MODAL]}>
					<FormAdd
						add={addITEM}
						close={defuseModal}
						current={generateUUID()}
						language={language[language_keys.FORM_ADD]}
					/>
				</Modal>
			)}
		</>
	);
}

export { UI };
