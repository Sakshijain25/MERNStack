import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,

    section: {
        type: String,
        default: 'B'
    }
});

const StudentData = mongoose.model('students', studentSchema);
export default StudentData;
