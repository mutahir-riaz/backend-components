const labTestSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
    testName: { type: String, required: true },
    dateOrdered: { type: Date, default: Date.now },
    result: { type: String },  // Result of the test
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    dateCompleted: { type: Date }
});

module.exports = mongoose.model('LabTest', labTestSchema);
