const express = require("express");
const passport = require("passport");
const router = express.Router();


// import rental controllers 
const QuestionControllers = require("../../controllers/question");


// @route GET /api/questions/manage
// @decription get all the questions of logged in user it self 
// @access Private
router.get('/manage', passport.authenticate("jwt", {
    session: false
}), QuestionControllers.manageQuestions);


 
// @route POST /api/questions/:id 
// @decription getting a single question by id 
// @access Public
router.get('/:id', QuestionControllers.get_single_question_by_id);


 
// @route POST /api/questions/:id
// @decription getting a single question by id 
// @access Public
router.get('/:id/image',passport.authenticate("jwt", {
    session: false
}), QuestionControllers.getimgofAQuestion);



// @route POST /api/:id/verify-user
// @decription getting a single question for update and verify the user 
// @access Private
router.get('/:id/verify-user', passport.authenticate("jwt", {
    session: false
}), QuestionControllers.get_single_question_by_id_verify_user);



// @route GET /api/questions
// @decription get all the questions if we have query-city or get all the questions 
// @access Public
router.get('/', QuestionControllers.getQuestion_OR_getQuestionsByQueryCity);





// @route POST /api/questions
// @decription Create questions  
// @access Private
router.post('/', passport.authenticate("jwt", {
        session: false
    }),
    QuestionControllers.createQuestion);



// @route PATCH /api/questions/:id
// @decription Update questions    
// @access Private
router.patch('/:id', passport.authenticate("jwt", {
        session: false
    }),
    QuestionControllers.updateQuestion);


// @route DELETE /api/rentals
// @decription DELETE rental  
// @access Private
router.delete('/:id', passport.authenticate("jwt", {
    session: false
}), QuestionControllers.deleteQuestion);




module.exports = router;