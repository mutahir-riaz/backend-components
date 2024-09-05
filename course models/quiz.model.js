const quizSchema = new Schema({
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, required: true },
    questions: [{
        question: { type: String, required: true },
        options: [{ type: String }],
        correctAnswer: { type: String, required: true }
    }],
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);
