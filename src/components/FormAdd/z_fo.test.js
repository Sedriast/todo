import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { FormAdd } from '.';
import { language_keys } from "../../constants/keys";
import { HomeProvider, HomeContext } from "../../hooks/useContexts";

describe('Form for addition', () => {
	let component;
	let language_ = {};

	const mockCloseAcction = jest.fn();
	const mockHandlerSubmit = jest.fn();

	function Component_() {
		const {
			lang,
		} = React.useContext(HomeContext);
		language_ = lang[language_keys.FORM_ADD];
		return <FormAdd
			add={mockHandlerSubmit}
			close={mockCloseAcction}
			current="id_1_ref"
			language={lang[language_keys.FORM_ADD]}
		/>
	};

	beforeEach(() => {
		component = render(<HomeProvider><Component_ /></HomeProvider>);
	});

	test('Render content', () => {
		const { LABEL_text, INPUT_1_placeholder, INPUT_1_title, BUTTON, } = language_;

		component.getByRole("form");
		component.getByRole("textbox");
		component.getAllByRole("button");

		component.getByText(LABEL_text);
		component.getByText(BUTTON.leyend);
		component.getByPlaceholderText(INPUT_1_placeholder);

		component.getByTitle(BUTTON.title);
		component.getByTitle(INPUT_1_title);
	});

	test('Send form content and close modal', () => {
		const { INPUT_1_title, BUTTON, } = language_;

		let input_ = component.getByTitle(INPUT_1_title);
		input_.focus();
		input_.value = "Test_item_1";
		expect(input_.value).toBe("Test_item_1");

		let button_ = component.getByTitle(BUTTON.title);
		fireEvent.click(button_);
		expect(mockCloseAcction).toHaveBeenCalledTimes(1);
		expect(mockHandlerSubmit).toHaveBeenCalledTimes(1);
	});
});
