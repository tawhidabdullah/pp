const Question = require("../models/question");
const User = require("../models/user");

// importing validation
const validateQuestionInput = require("../validation/question");
const validateUpdateQuestionInput = require("../validation/updateQuestion");

// importing mongoose error  
const mongooseError = require("../helpers/mongoose");     


exports.get_single_question_by_id = (req, res) => {
    const questionId = req.params.id; 

    Question.findById(questionId)
        .populate("user", 'name -_id avatar')
        .exec((err, question) => {
            if (err) {
                res.status(404).send({
                    errors: [{
                        title: "Question Error!"
                    }, {
                        detail: "Could not found Question!"
                    }]
                })
            }
            return res.json(question);
        })
};

exports.getimgofAQuestion = (req,res) => {
    const questionId = req.params.id; 
   
    Question.findById(questionId)
    .select('image')
        .exec((err, question) => {
            if (err) {
                res.status(404).send({
                    errors: [{
                        title: "Question Error!"
                    }, {
                        detail: "Could not found Question!"
                    }]
                })
            }
            return res.json(question.image);
        })
}


exports.get_single_question_by_id_verify_user = (req, res) => {
    const user = req.user.id;

    Question.findById(req.params.id)
        .populate('user')
        .exec((err, question) => {
            if (err) {
                return res.status(422).send({
                    errors: mongooseError.normalizeMongooseError(err.errors)
                })
            };

            if (question.user._id.toString() !== user) {
                res.status(404).send({
                    errors: [{
                        title: "Invalid User!"
                    }, {
                        detail: "You are not the owner of this question!"
                    }]
                })
            };

            return res.json({ status: 'verified' })
        })
}




exports.getQuestion_OR_getQuestionsByQueryCity = (req, res) => {

    const city = req.query.city;
    const query = city ? {  
        city: city.toLowerCase()
    } : {};
    Question.find(query)
        .populate('user')
        .exec((err, foundQuestions) => {
            if (err) {
                return res.status(404).send({
                    errors: [{
                        title: "Question Error!"
                    }, {
                        detail: "Something went wrong for searching question by city!"
                    }]
                })
            }
            if (city && foundQuestions.length === 0) {
                return res.status(404).send({
                    errors: [{
                        title: "no questions Found!"
                    }, {
                        detail: `There are no questions for the city ${city}`
                    }]
                })
            }

            return res.json(foundQuestions);

        })


}



exports.createQuestion = (req, res) => {
    // bringing the validations : error , isValid
    const {
        errors,
        isValid
    } = validateQuestionInput(req.body);

    let image = req.file;

    if (!image) {
        errors.imgError = "img shoud be send buddy";
    }

    // if input is not valid then send and error response
    if (!isValid) {
        return res.status(400).json(errors);
    }

   
    let imgUrl = image.path;

    const {
        city,
        title,
        category,
        description
    } = req.body;

    const user = req.user.id;
    const question = new Question({
        city,
        title,
        category,
        image: imgUrl,
        description
    });

    question.user = user;

    question.save((err, newQuestion) => {
        if (err) {
            console.log(err);
            return res.status(404).send({
                errors: [{
                    title: "Question Error!"
                }, {
                    detail: "Something went wrong while saving the question!"
                }]
            })
        }

        User.update({
            _id: user
        }, {
                $push: {
                    questions: newQuestion
                }
            }, () => { });

        return res.json(newQuestion);
    })
};


exports.deleteQuestion = (req, res) => {
    const user = req.user.id;
    Question.findById(req.params.id)
        .populate("user", '_id')
        .exec((err,  question) => {
            if (err) {
                return res.status(422).send({
                    errors: "something went wrong from controller/ question"
                })
            }

            if ( question.user._id.toString() !== user) {
                return res.status(404).send({
                    errors: [{
                        title: "Invalid User",
                        detail: "You are not  question owner!"
                    }]
                });
            }


            question.remove((err) => {
                if (err) {
                    return res.status(422).send({
                        errors: "something went wrong from controller/question after removing rental!"
                    })
                }
            });

            return res.json({
                'status': " question deleted"
            })


        })
};

exports.manageQuestions = (req, res) => {
    const user = req.user.id;

    Question.where({
        user
    })
        .exec((err,  questions) => {
            if (err) {
                return res.status(422).send({
                    errors: "something went wrong from controller/ question manging rentals!"
                })
            }
            return res.json( questions);
        });
};


exports.updateQuestion = (req, res) => {
   
   
    const  questionBody = Object.assign({},req.body); 

    let image = req.file;

    const {
        errors,
        isValid
    } = validateUpdateQuestionInput( questionBody);

    
    if (!image) {
        errors.imgError = "img shoud be send buddy";
    }

    // if input is not valid then send and error response
    if (!isValid) {
        return res.status(400).json(errors);
    }


    let  questionData  = req.body;

    let imgUrl = image.path;

    if(imgUrl){
        questionData = {
            image: imgUrl
        }; 
    }; 


    const user = req.user.id;
    const  questionId = req.params.id;

    Question.findById( questionId)
        .populate("user")
        .exec((err,  question) => {
            if (err) {
                return res.status(422).send({
                    errors: mongooseError.normalizeMongooseError(err.errors)
                }); 
            };
            if (question.user.id !== user) {
                return res.status(404).send({
                    errors: [{
                        title: "Invalid User",
                        detail: "You are not question owner!"
                    }]
                });
            };

             question.set(questionData);

             question.save((err => {
                if (err) {
                    return res.status(422).send({
                        errors: mongooseError.normalizeMongooseError(err.errors)
                    })
                };
            }));

            res.status(200).send(question);
        })
};

