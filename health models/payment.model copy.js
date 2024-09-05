const paymentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    appointment: { type: Schema.Types.ObjectId, ref: 'Appointment' },
    consultation: { type: Schema.Types.ObjectId, ref: 'Consultation' },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    paymentDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, enum: ['credit_card', 'debit_card', 'insurance', 'cash'], required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);
