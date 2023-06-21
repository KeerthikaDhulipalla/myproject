const Sequelize = require('sequelize');
const sequelizeCon = require('../utils/sdbconnection');
const Exam = require("../models/exam");
const MCQQAs = require("../models/QAMCQ");
const TFQA = require("../models/TFQA");
const SAFB = require("../models/SAF");

// Define the retrieval function
async function retrieveExamData(email, examid) {
    try {
      const examData = await Exam.findOne({
        where: {
          emailid: email,
          examid: examid,
        },
        include: [
          {
            model: SAFB,
            attributes: [

              'questionFB',
              'questionSA',
              'answerSA',
              'answerFB',
              'reasonFB',
              'reasonSA',
            ],
          },
          {
            model: TFQA,
            attributes: ['question', 'optionA', 'optionB', 'answer', 'reason'],
          },
          {
            model: MCQQAs,
            attributes: [
              'question',
              'optionA',
              'optionB',
              'optionC',
              'optionD',
              'answer',
              'reason',
            ],
          },
        ],
        attributes: ['examid', 'emailid', 'type'],
      });
  
      if (examData) {
        console.log(examData.toJSON());
      } else {
        console.log('Exam not found.');
      }
    } catch (error) {
      console.error('Error retrieving exam data:', error);
    }
  }
  
  // Call the retrieval function
  retrieveExamData('harry@gmail.com', 1);
  
  
  
  
  
  
  
  