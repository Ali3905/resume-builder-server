const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema({
    given_name : String,
    sur_name : String,
    father_name : String,
    address : String,
    contact_number : String,
    email : String,
    birth_date : String,
    place_of_birth : String,
    marital_status : String,
    gender : String,
    computer_skills : Array,
    hobbies : Array,
    candidate_photo : String,
    english_level : String,
    mother_tongue : String,
    german : {
        level : String,
        from : String,
        to : String,
        certification_date : String
    },
    post_graduate : [{
        course : String,
        institute : String,
        year_no : String,
        from_date : String,
        to_date : String,
        marksheet : String
    }],
    under_graduate : [{
        course : String,
        institute : String,
        year_no : String,
        from_date : String,
        to_date : String,
        marksheet : String
    }],
    twelweth : {
        institute : String,
        from_date : String,
        to_date : String,
        marksheet : String
    },
    eleventh : {
        institute : String,
        from_date : String,
        to_date : String,
        marksheet : String
    },
    tenth : {
        institute : String,
        from_date : String,
        to_date : String,
        marksheet : String
    },
    first_to_ninth : {
        institute : String,
        from_date : String,
        to_date : String,
    },
    blank_year : [{
        reason : String,
        from_date : String,
        to_date : String,
    }],
    languages : [{}],
    internship : [{
        hospital_name : String,
        department : String,
        from_date : String,
        to_date : String,
        internship_certificate : String
    }],
    work_experience : [{
        hospital_name : String,
        department : String,
        from_date : String,
        to_date : String,
        work_experience : String
    }],
    declaration : {
        place : String,
        country : String,
        date : String,
        signature_photo : String
    }
}, {timeStamps : true})

const resume = mongoose.model("resume", resumeSchema)
module.exports = resume