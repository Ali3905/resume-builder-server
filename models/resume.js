const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema({
    given_name : String,
    sur_name : String,
    father_name : String,
    address : String,
    contact_number : String,
    email : String,
    birth_date : Date,
    place_of_birth : String,
    marital_status : String,
    gender : String,
    computer_skills : Array,
    hobbies : Array,
    candidate_photo : String,
    post_graduate : {
        course : String,
        institute : String,
        current_year : String,
        from_date : Date,
        to_date : Date,
        marksheet : String
    },
    under_graduate : {
        course : String,
        institute : String,
        current_year : String,
        from_date : Date,
        to_date : Date,
        marksheet : String
    },
    twelweth : {
        institute : String,
        from_date : Date,
        to_date : Date,
        marksheet : String
    },
    eleventh : {
        institute : String,
        from_date : Date,
        to_date : Date,
        marksheet : String
    },
    tenth : {
        institute : String,
        from_date : Date,
        to_date : Date,
        marksheet : String
    },
    first_to_ninth : {
        institute : String,
        from_date : Date,
        to_date : Date,
    },
    blank_year : {
        reason : String,
        from_date : Date,
        to_date : Date,
    },
    languages : [{}],
    internship : {
        hospital_name : String,
        department : String,
        from_date : Date,
        to_date : Date,
        internship_certificate : String
    },
    work_experience : {
        hospital_name : String,
        department : String,
        from_date : Date,
        to_date : Date,
        work_experience : String
    },
}, {timeStamps : true})

const resume = mongoose.model("resume", resumeSchema)
module.exports = resume