const Sequelize = require('sequelize');
const sequelizeCon = require('../utils/sdbconnection');
const Exam = require("./exam");

const SAFB = sequelizeCon.define('SAFB', { // Change the model name to Exam
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
  questionFB: {
    type: Sequelize.STRING,
    allowNull: false
  },
  questionSA: {
    type: Sequelize.STRING,
    allowNull: false
  },
  answerSA: {
    type: Sequelize.STRING(1000),
    allowNull: false
  },
  answerFB: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reasonFB: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reasonSA: {
    type: Sequelize.STRING(1000),
    allowNull: false
  },
});
//creation and insertion of table
async function createTableAndInsertExam() {
  try {
    await SAFB.sync({ force: false });
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
    const result = await SAFB.create({
        examid: 1, // Replace with the actual examid you want to associate
        questionFB: 'Fill in the blank: OpenAI is an ________ learning model.',
        questionSA: 'What is the capital of Germany?',
        answerSA: 'Berlin',
        answerFB: 'artificial intelligence',
        reasonFB: 'OpenAI is an artificial intelligence learning model.',
        reasonSA: 'Berlin is the capital of Germany.',
    });

    console.log('Data inserted successfully:', result.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

//insertData();
module.exports = SAFB;
