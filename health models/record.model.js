const medicalRecordSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    consultations: [{ type: Schema.Types.ObjectId, ref: 'Consultation' }],
    labTests: [{
        testName: { type: String },
        result: { type: String },
        dateConducted: { type: Date }
    }],
    allergies: [{ type: String }],
    surgeries: [{
        surgeryName: { type: String },
        date: { type: Date },
        doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' }
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
