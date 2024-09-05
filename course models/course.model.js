const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    categories: [{ type: String }],
    content: [{
        type: { type: String, enum: ['video', 'text', 'quiz'], required: true },
        title: { type: String, required: true },
        body: { type: String },
        url: { type: String },  // For video or any external links
        quiz: [{ question: String, options: [String], correctAnswer: String }]
    }],
    price: { type: Number, required: true },
    ratings: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, rating: Number, comment: String }],
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
