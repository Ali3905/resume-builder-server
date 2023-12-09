const express = require("express")
const router = express.Router()
const file = require("../models/file")
const fetchUser = require("../middleware/fetchUser")
const fs = require("fs")

const multer = require('multer')
const resume = require("../models/resume")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      // return cb(null, `./public/${req.body._id}/`)
      const path = `./public/${req.body._id}/`
      fs.mkdirSync(path, { recursive: true })
      return cb(null, path)
    },
    filename: function (req, file, cb) {
      return cb(null, `${file.fieldname}.${file.originalname.split(".")[file.originalname.split(".").length-1]}`)
    }
  })
  
  const upload = multer({storage})

router.post("/createResume", upload.fields([{ name: 'passport', maxCount: 1 }, { name: 'candidate', maxCount: 1 }, { name: 'post_graduate_marksheet', maxCount: 1 }, { name: 'under_graduate_marksheet', maxCount: 1 }, { name: 'twelweth_marksheet', maxCount: 1 }, { name: 'eleventh_marksheet', maxCount: 1 }, { name: 'tenth_marksheet', maxCount: 1 },]), async(req, res)=>{
    const { given_name, sur_name , father_name, address, contact_number , email, birth_date, place_of_birth, marital_status, gender, computer_skills, hobbies, candidate_photo, post_graduate, under_graduate, twelweth, eleventh, first_to_ninth, tenth, work_experience, internship, languages, blank_year } = req.body
    
    // if ( given_name, sur_name , father_name, address, contact_number , email, birth_date, place_of_birth, marital_status, gender, computer_skills, hobbies, candidate_photo, post_graduate, under_graduate, twelweth, eleventh, first_to_ninth, tenth, work_experience, internship, languages, blank_year ) {
      const Resume = await resume.create(
        { given_name, sur_name , father_name, address, contact_number , email, birth_date, place_of_birth, marital_status, gender, computer_skills, hobbies, candidate_photo, post_graduate, under_graduate, twelweth, eleventh, first_to_ninth, tenth, work_experience, internship, languages, blank_year }
      )
      console.log(req.body);
      res.send("files")
    // }
})

module.exports = router