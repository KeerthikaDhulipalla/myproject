const Exam = require('../models/exam');
const sequelize = require('../utils/sdbconnection');

// Retrieving data based on email id
async function retrieveDataByemail(email) {
  try {
    await sequelize.sync();
    console.log('Exams table created successfully!');

    const exams = await Exam.findAll({
      where: {
        emailid: email, // Array of id values to retrieve
      },
    });

    console.log('Exams retrieved successfully:', exams.map((exam) => exam.toJSON()));
  } catch (error) {
    console.error('Error retrieving data from Exam table:', error);
  } finally {
    sequelize.close();
  }
}

// const emailToRetrieve = 'lee@gmail.com'; // Modify the email value with the desired email to retrieve
// retrieveDataByemail(emailToRetrieve);

 module.exports = {
    retrieveExamsByEmail
  };