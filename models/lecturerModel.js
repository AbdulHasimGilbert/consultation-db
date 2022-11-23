const mongoose = require("mongoose");
const lecturerSchema = new mongoose.Schema(
    {   userId:{
        type: String,
        required: true,
        },
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        subject:{
            type: String,
            required: true,
        },
        faculty:{
            type: String,
            required: true,
        },
        campus:{
            type: String,
            required: true,
        },
        availability:{
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const lecturerModel = mongoose.model("lecturers", lecturerSchema);
module.exports = lecturerModel;