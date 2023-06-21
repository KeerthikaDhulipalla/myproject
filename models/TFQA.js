const Sequelize = require('sequelize');
const sequelizeCon = require('../utils/sdbconnection');
const Exam = require("./exam");

const TFQA = sequelizeCon.define('TFQA', { // Change the model name to Exam
  Qid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  examid: {
    type: Sequelize.INTEGER,
    references: {
      model: Exam,
      key: 'examid'
    }
  },
//    emailid: {
//     type: Sequelize.STRING,
//     references: {
//       model: Exam,
//       key: 'emailid'
//     }
//   },
  question: {
    type: Sequelize.STRING,
    allowNull: false
  },
  optionA: {
    type: Sequelize.STRING,
    allowNull: false
  },
  optionB: {
    type: Sequelize.STRING,
    allowNull: false
  },
  answer: {
    type: Sequelize.ENUM('True','False'),
    allowNull: false
  },
  reason: {
    type: Sequelize.STRING,
    allowNull: false
  },

});
//creation and insertion of table
async function createTableAndInsertExam() {
  try {
    await TFQA.sync({ force: false });
    console.log('table created successfully!');
  } catch (error) {
    console.error('Error creating  table:', error);
  }
}

//createTableAndInsertExam();

// Function to insert data into the table
async function insertData() {
  try {
    await sequelizeCon.sync(); // Sync all defined models with the database

    // Insert a row into the table
    const result = await TFQA.create({
      examid: 1, // Replace with the actual examid you want to associate
      question: 'Paris is the capital of France?',
      optionA: 'True',
      optionB: 'False',
      answer: 'True',
      reason: 'Paris is the capital of France.'
    });

    console.log('Data inserted successfully:', result.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

//insertData();
module.exports = TFQA;
