const enrollmentSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    status: { type: String, enum: ['enrolled', 'in-progress', 'completed'], default: 'enrolled' },
    progress: { type: Number, default: 0 },  // Percentage of course completion
    dateEnrolled: { type: Date, default: Date.now },
    dateCompleted: { type: Date }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
