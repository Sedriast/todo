import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import { Item } from '.';
import { language_keys, icon_keys } from "../../constants/keys";
import { HomeProvider, HomeContext } from "../../hooks/useContexts";

describe('Item', () => {
    let component;
    let language_ = {};

    const ITEM_values = {
        isComplete: false,
        title: "testITEM",
    }
    const mockCheck = jest.fn();
    const mockDelete = jest.fn();

    function Component_() {
        const {
            ico,
            lang,
        } = React.useContext(HomeContext);
        language_ = lang[language_keys.PANEL].ITEM;
        return <Item
            style={ITEM_values.isComplete}
            icons={{
                ICO_check: ico(icon_keys.CLOSE),
                ICO_delete: ico(icon_keys.CLOSE),
            }}
            click={{
                check_: mockCheck,
                delete_: mockDelete,
            }}
            language={{
                ...language_,
                ITEM_title: ITEM_values.title,
            }}
        />
    };

    beforeEach(() => {
        component = render(<HomeProvider><Component_ /></HomeProvider>);
    });

    test('Render content', () => {
        const { BUTTON_DELETE_title, BUTTON_CHECK_title, } = language_;

        component.getByRole("article");
        component.getByRole("heading");
        component.getAllByRole("button");

        component.getByText(ITEM_values.title);
        component.getByTitle(BUTTON_CHECK_title);
        component.getByTitle(BUTTON_DELETE_title);
    });

    test('Is check?', () => {
        const { BUTTON_CHECK_title, } = language_;
        const button_ = component.getByTitle(BUTTON_CHECK_title);

        fireEvent.click(button_);
        expect(mockCheck).toHaveBeenCalledTimes(1);
    });

    test('Is delete?', () => {
        const { BUTTON_DELETE_title, } = language_;
        const button_ = component.getByTitle(BUTTON_DELETE_title);

        fireEvent.click(button_);
        expect(mockDelete).toHaveBeenCalledTimes(1);
    });
});
