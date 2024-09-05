const doctorSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    specialty: { type: String, required: true },
    qualifications: { type: String },
    experience: { type: Number }, // Years of experience
    availability: [{
        day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
        startTime: { type: String },  // e.g., '09:00 AM'
        endTime: { type: String }     // e.g., '05:00 PM'
    }],
    ratings: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, rating: Number, comment: String }],
    consultations: [{ type: Schema.Types.ObjectId, ref: 'Consultation' }]
});

module.exports = mongoose.model('Doctor', doctorSchema);
