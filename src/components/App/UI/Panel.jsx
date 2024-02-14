import React from "react";
import { Item } from "../../Item";
import { ItemSquelleton } from "../../Fragments/Squeletons/ItemSquelelon";

const loadArray_ = [{}, {}, {}, {}, {}, {}];

export function Panel({
	style = "",
	context = {},
	language = {},
	itemIcons = {},
}) {
	const { error, loading, checkITEM, deleteITEM, searchedITEM } = context;
	return (
		<section className={style}>
			{!loading && searchedITEM?.length === 0 && (
				<h1>{language.LEYEND_panel}</h1>
			)}
			<div>
				{loading &&
					loadArray_?.map((obj, index) => (
						<ItemSquelleton key={index} obj={obj} />
					))}

				{searchedITEM?.map((todo, index) => (
					<Item
						key={index}
						icons={itemIcons}
						style={todo.isComplete}
						click={{
							check_: () => checkITEM(todo.id),
							delete_: () => deleteITEM(todo.id),
						}}
						language={{
							...language.ITEM,
							ITEM_title: todo.title,
						}}
					/>
				))}
				{error && <h1>Error</h1>}
			</div>
		</section>
	);
}
