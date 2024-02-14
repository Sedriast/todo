import { language_keys } from "./keys";

const es = {
    [language_keys.NAVMENU]: {
        INPUT_placeholder: "Buscar",
        INPUT_title: "Buscar elemento",
        BUTTON_title: "Iniciar busqueda",
    },
    [language_keys.ADDITION_BUTTON]: {
        BUTTON_title: "Agregar item",
    },
    [language_keys.PANEL]: {
        LEYEND_panel: '¡Crea tu peldaño al exito!',
        ITEM: {
            BUTTON_CHECK_title: "Hecho",
            BUTTON_DELETE_title: "Eliminar item",
        }
    },
    [language_keys.MODAL]: {
        BUTTON_title: "Cerrar",
    },
    [language_keys.FORM_ADD]: {
        LABEL_text: "Item",
        INPUT_1_placeholder: "Nombre del item",
        INPUT_1_title: "Ingreso titulo del item",
        BUTTON: {
            title: "Crear item",
            leyend: "✨Crear item✨",
        }
    },
};

const en = {
    [language_keys.NAVMENU]: {
        INPUT_placeholder: "Search",
        INPUT_title: "Search item",
        BUTTON_title: "Start search",
    },
    [language_keys.ADDITION_BUTTON]: {
        BUTTON_title: "Add item",
    },
    [language_keys.PANEL]: {
        LEYEND_panel: 'Create your path to success!',
        ITEM: {
            BUTTON_DELETE_title: "Delete item",
            BUTTON_CHECK_title: "Done",
        }
    },
    [language_keys.MODAL]: {
        BUTTON_title: "Close",
    },
    [language_keys.FORM_ADD]: {
        LABEL_text: "Item",
        INPUT_1_placeholder: "Item name",
        INPUT_1_title: "Enter item title",
        BUTTON: {
            title: "Create item",
            leyend: "✨Create item✨",
        }
    },
};


export { es, en };
