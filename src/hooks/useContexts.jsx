import React from "react";
import { createContext, useReducer } from "react";

import { reducer } from "./reducer";
import { en } from "../constants/i18n";
import { Icon } from "../constants/Icon";
import { reducer_keys } from "../constants/keys";
import { useLocalStorage } from "./useLocalStorage";

function generateUUID() {
	var d = new Date().getTime();
	var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
	});
	return uuid;
}

/****************************************************************************************************
 *
 *
 * 							Home
 *
 
 ****************************************************************************************************/

const HomeContext = createContext();

function HomeProvider({ children }) {
	const {
		item: localItems,
		saveItem: saveItems,
		loading,
		error,
	} = useLocalStorage("rewV1", []);

	const [state, dispatch] = useReducer(reducer, {
		search: "",
		isActiveModal: false,
	});

	const activeModal = () => dispatch({ type: reducer_keys.activeModal });
	const defuseModal = () => dispatch({ type: reducer_keys.difuseModal });
	const searchITEM = (searchValue) => {
		dispatch({
			type: reducer_keys.search,
			payload: searchValue,
		});
	};

	const searchedITEM = localItems.filter(({ title }) => {
		const todoText = title.toLowerCase();
		const searchText = state.search.toLowerCase();
		return todoText.includes(searchText);
	});

	const addITEM = (id_, title_, decription_) => {
		const newITEM = [...localItems];
		newITEM.push({
			id: id_,
			title: title_,
			description: decription_,
			isComplete: false,
		});
		saveItems(newITEM);
	};

	const checkITEM = (id_) => {
		const newITEM = [...localItems];
		const index_ = newITEM.findIndex(({ id }) => id === id_);
		newITEM[index_].isComplete = !newITEM[index_].isComplete;
		saveItems(newITEM);
	};

	const deleteITEM = (id_) => {
		const newITEM = [...localItems];
		const index_ = newITEM.findIndex(({ id }) => id === id_);
		newITEM.splice(index_, 1);
		saveItems(newITEM);
	};

	return (
		<HomeContext.Provider
			value={{
				error,
				loading,
				addITEM,
				checkITEM,
				ico: Icon,
				searchITEM,
				deleteITEM,
				activeModal,
				defuseModal,
				language: en,
				searchedITEM,
				generateUUID,
				searchValue: state.search,
				isActiveModal: state.isActiveModal,
			}}>
			{children}
		</HomeContext.Provider>
	);
}

export { HomeContext, HomeProvider };
