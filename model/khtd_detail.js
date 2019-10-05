const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let khtdDetailSchema = new Schema({
    khtd_id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    number: {
        type: Number,
        required: false
    },
    department_id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    position_id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    min_salary: {
        type: Number,
        required: false
    },
    max_salary: {
        type: Number,
        required: false
    },
    type_employee_id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    education_level_id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    speciality_id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    language_level: {
        type: String,
        required: false
    },
    licensed: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('khtd_detail', khtdDetailSchema);