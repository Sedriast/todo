import { reducer_keys } from "../constants/keys";

const object_reducer = (state, payload) => ({
    [reducer_keys.activeOpt]: {
        ...state,
        opt: payload
    },
    [reducer_keys.activeModal]: {
        ...state,
        isActiveModal: true
    },
    [reducer_keys.difuseModal]: {
        ...state,
        isActiveModal: false
    },
    [reducer_keys.search]: {
        ...state,
        search: payload
    },
    [reducer_keys.localSaveItem]: {
        ...state,
        item: payload
    },
    [reducer_keys.defuseLoading]: {
        ...state,
        loading: false
    },
    [reducer_keys.activeError]: {
        ...state,
        loading: false,
        error: true,
    },
});

function reducer(state, { type, payload }) {
    if (object_reducer(state)[type]) {
        return (object_reducer(state, payload)[type])
    } else {
        return (state);
    }
};

export { reducer };