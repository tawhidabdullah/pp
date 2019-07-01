const mongoose = require("mongoose");
const { Schema } = mongoose;

// creat question schema
const questionSchema = new Schema({
    title: { type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    user: {type: Schema.Types.ObjectId , ref: 'users'}
});

// with question schema , load the question model for question collection
const Question = mongoose.model("rentals", questionSchema);
module.exports = Question;
