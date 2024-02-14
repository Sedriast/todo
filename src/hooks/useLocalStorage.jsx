import React from "react";
import { reducer } from "./reducer";
import { reducer_keys } from "../constants/keys";

function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = React.useReducer(reducer, {
		item: initialValue,
		loading: true,
		error: false,
	});

	const defuseLoading = () => dispatch({ type: reducer_keys.defuseLoading });
	const activeError = () => dispatch({ type: reducer_keys.activeError });
	const updateItem = (newItem) => {
		dispatch({ type: reducer_keys.localSaveItem, payload: newItem });
	};

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);

				let parsedItem = "";

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
					updateItem(parsedItem);
				}
				defuseLoading();
			} catch (error) {
				activeError();
			}
		}, 2000);
		// eslint-disable-next-line
	}, []);

	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		updateItem(newItem);
	};

	return {
		...state,
		saveItem,
	};
}

export { useLocalStorage };
