const Sequelize = require('sequelize');
const sequelizeCon = require('../utils/sdbconnection');
const Exam = require("./exam");

const MCQQAs = sequelizeCon.define('MCQQAs', { // Change the model name to Exam
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
  //  emailid: {
  //   type: Sequelize.STRING,
  //   references: {
  //     model: Exam,
  //     key: 'emailid'
  //   }
  // },
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
  optionC: {
    type: Sequelize.STRING,
    allowNull: false
  },
  optionD: {
    type: Sequelize.STRING,
    allowNull: false
  },
  answer: {
    type: Sequelize.ENUM('A', 'B', 'C', 'D'),
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
    await MCQQAs.sync({ force: false });
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
    const result = await MCQQAs.create({
      examid: 1, // Replace with the actual examid you want to associate
      question: 'What is the capital of USA?',
      optionA: 'London',
      optionB: 'Washington D.C',
      optionC: 'Berlin',
      optionD: 'Rome',
      answer: 'B',
      reason: 'Washington D.c is the capital of USA.'
    });

    console.log('Data inserted successfully:', result.toJSON());
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

//insertData();

module.exports = MCQQAs;