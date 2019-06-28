import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTION_BY_ID_SUCCESS,
    FETCH_QUESTIONS_INIT,
    FETCH_QUESTIONS_FAIL,
    UPDATE_QUESTION_SUCCESS,
    UPDATE_QUESTION_FAIL,
    RESET_QUESTION_ERRORS
} from "../actions/types";


const initialState = {
    rentals: {
        data: [],
        errors: []
    },
    rental: {
        data: {},
        errors: []
    } 
}

export const questionReducer = (state = initialState.rentals, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state, data: action.rentals
            };
        case FETCH_QUESTIONS_INIT:
            return {
                ...state, data: [], errors: []
            };
        case FETCH_QUESTIONS_FAIL:
            return {
                ...state, data: [], errors: action.errors
            }
            default:
                return state;
    };
};

export const selectedQuestionReducer = (state = initialState.rental, action) => {
    switch (action.type) {
        case FETCH_QUESTION_BY_ID_SUCCESS:
            return {
                ...state, data: action.rental
            };
        case UPDATE_QUESTION_SUCCESS:
            return {
                ...state, data: action.rental
            };
        case UPDATE_QUESTION_FAIL:
            return {
                ...state, errors: action.errors
            };
        case RESET_QUESTION_ERRORS:
            return {
                ...state, errors: []
            };
        default:
            return state;
    };
};