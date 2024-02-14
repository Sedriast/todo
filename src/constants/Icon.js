import React from "react";

import { ReactComponent as Plus } from "./assets/plus_0911227.svg";
import { ReactComponent as Close } from "./assets/close_0911320.svg";
import { ReactComponent as Trash } from "./assets/trash_0911329.svg";
import { ReactComponent as Check } from "./assets/check_0911348.svg";
import { ReactComponent as MagnifyingGlass } from "./assets/magnifying_glass_0911308.svg";

import { icon_keys } from "./keys";

const type_ = {
    [icon_keys.PLUS]: <Plus />,
    [icon_keys.CLOSE]: <Close />,
    [icon_keys.TRASH]: <Trash />,
    [icon_keys.CHECK]: <Check />,
    [icon_keys.MAGNIFYING_GLASS]: <MagnifyingGlass />,
};

export function Icon(type = "") {
    return (
        <picture>
            {type_[type]}
        </picture>
    );
}