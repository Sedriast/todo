import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { Navmenu } from ".";
import { HomeProvider, HomeContext } from "../../hooks/useContexts";
import { language_keys, icon_keys } from "../../constants/keys";

describe('Navmenu', () => {
    let component;
    let language_ = {};

    const mockHandlerSubmid = jest.fn();

    const Component_ = () => {
        const { ico, lang, } = React.useContext(HomeContext);

        language_ = lang[language_keys.NAVMENU];
        return (
            <Navmenu
                FORM_submit={mockHandlerSubmid}
                BUTTON_icon={ico(icon_keys.CLOSE)}
                language={language_}
            />
        );
    };

    beforeEach(() => {
        component = render(
            <HomeProvider>
                <Component_ />
            </HomeProvider>
        );
    });

    test('Render content', () => {
        const { INPUT_placeholder, INPUT_title, BUTTON_title, } = language_;

        component.getByTitle(BUTTON_title);
        component.getByTitle(INPUT_title);

        component.getByPlaceholderText(INPUT_placeholder);

        component.getByDisplayValue("");
        component.getByPlaceholderText(INPUT_placeholder);
    });

    test('Search request', () => {
        const { INPUT_title, BUTTON_title, } = language_;

        const input_ = component.getByTitle(INPUT_title);
        const button_ = component.getByTitle(BUTTON_title);

        input_.focus();
        input_.value = "test";
        expect(input_.value).toBe("test");

        fireEvent.click(button_);
        expect(mockHandlerSubmid).toHaveBeenCalledTimes(1);
    });
});
