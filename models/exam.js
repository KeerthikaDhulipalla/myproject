const Sequelize = require('sequelize');
const sequelize = require('../utils/sdbconnection');
const SAFB = require("../models/SAF");

const Exam = sequelize.define('Exam', { // Change the model name to Exam
    examid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }, 
      emailid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING(1000), // Increase the length of 'content' column
    allowNull: false,
  },
  numOfMCQ: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numOfTrueFlase: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numOfFill: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numOfShorts: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});
Exam.hasMany(SAFB);
//creation and insertion of table
async function createTableAndInsertExam() {
    try {
      await Exam.sync({ force: false });
      console.log('Exam table created successfully!');
  
      const examsData = [
        {
          
          emailid: 'harry@gmail.com',
          type: 'Algorithms',
          content: 'Exam 1 content...',
          numOfMCQ: 1,
          numOfTrueFlase: 3,
          numOfFill: 3,
          numOfShorts: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          emailid: 'lee@gmail.com',
          type: 'Mathematics',
          content: 'Exam 2 content...',
          numOfMCQ: 2,
          numOfTrueFlase: 2,
          numOfFill: 4,
          numOfShorts: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more exam objects as needed
      ];
  
      const exams = await Exam.bulkCreate(examsData);
  
      console.log('Inserted exams:', exams.map((exam) => exam.toJSON()));
    } catch (error) {
      console.error('Error creating Exam table:', error);
    }
  }
  //createTableAndInsertExam();
  //module.exports = Exam;
 //module.exports = { Exam, createTableAndInsertExam };

