const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'instructor', 'admin'], required: true },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    createdCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    dateJoined: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
