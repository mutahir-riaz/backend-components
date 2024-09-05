const reviewSchema = new Schema({
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
