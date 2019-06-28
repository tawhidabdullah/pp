import axios from "axios";
import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTION_BY_ID_SUCCESS,
  FETCH_QUESTIONS_FAIL,
  FETCH_QUESTIONS_INIT,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAIL,
  RESET_QUESTION_ERRORS
} from "./types";


// FETCH RENTAL AND RENTALS  //////////////////////////////////////////////////////


const fetchQuestionsInit = () => {
  return {
    type: FETCH_QUESTIONS_INIT,
  };
};

const fetchQuestionsFail = (errors) => {
  return {
    type: FETCH_QUESTIONS_FAIL,
    errors
  }
}


const fetchQuestionsByIdSuccess = (rental) => {
  return {
    type: FETCH_QUESTION_BY_ID_SUCCESS,
    rental
  }
}

const fetchQuestionsSuccess = (rentals) => {

  return {
    type: FETCH_QUESTIONS_SUCCESS,
    rentals
  }

}



export const fetchQuestions = (city) => dispatch => {
  dispatch(fetchQuestionsInit())
  const url = city ? `/api/rentals?city=${city}` : "/api/rentals";
  axios.get(url)
    .then(rentals => rentals.data)
    .then((rentals) => {
      return dispatch(fetchQuestionsSuccess(rentals));
    })
    .catch(({
      response
    }) => {
      return dispatch(fetchQuestionsFail(response.data.errors));
    })
}



export const createQuestion = (newRental) => {
  return axios.post('/api/rentals', newRental)
    .then(res => res.data)
    .catch(({
      response
    }) => Promise.reject(response.data.errors));
};





export const fetchQuestionsById = (id) => {
  return function (dispatch) {
    return axios.get(`/api/rentals/${id}`)
      .then(rental => rental.data)
      .then(rental => {
        dispatch(fetchQuestionsByIdSuccess(rental));
        return rental;
      })
  }

}; 

export const fetchQuestionImg = (rentalId) => {
  return axios.get(`/api/rentals/${rentalId}/image`)
    .then(res => res.data)
    .catch(({
      response
    }) => Promise.reject(response.data.errors));
};


export const verifiyQuestionOwner = (id) => {
  return axios.get(`/api/rentals/${id}/verify-user`); 
}





// GET USER RENTALS RENTAL //////////////////////////////////////////////////////

export const getUserQuestions = () => {
  return axios.get('/api/rentals/manage')
    .then(res => res.data)
    .catch(({
      response
    }) => Promise.reject(response.data.errors));
};

// DELETE RENTAL //////////////////////////////////////////////////////////////////

export const deleteQuestion = (rentalId) => {
  return axios.delete(`/api/rentals/${rentalId}`)
    .then(res => res.data)
    .catch(({
      response
    }) => Promise.reject(response.data.errors));
};


// UPDATE RENTAL //////////////////////////////////////////////////////////////////


const updateQuestionSuccess = (updatedRental) => {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    rental: updatedRental
  }
};

const updateQuestionFail = (errors) => {
  return {
    type: UPDATE_QUESTION_FAIL,
    errors
  }
};


export const updateQuestion = (rentalData, id ) => dispatch => {
  let formData = rentalData;
  console.log("formData",formData); 
  return axios.patch(`/api/rentals/${id}`, formData)
    .then(res => res.data)
    .then(updatedRental => dispatch(updateQuestionSuccess(updatedRental)))
    .catch(({
      response
    }) => {
      return dispatch(updateQuestionFail(response.data));
    })
}; 


export const resetQuestionErrorr  = () => {
  return {
    type: RESET_QUESTION_ERRORS
  }
}