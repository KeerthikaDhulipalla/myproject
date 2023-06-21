const sequelize = require('../utils/sdbconnection');
const PublicExams = require('../models/publicexam');
//inserting data into table
async function insertData() {
  try {
    await sequelize.sync();
    console.log('Exams table created successfully!');

    const examData = [ 
      {
        title: 'Economics',
        description: 'To test the knowledge in Economics.',
        tags: 'Arts,Economics',
        createdBy: 'Gloria',
        numberOfAttempts: 150,
        numberOfLikes: 99,
        averageScore: 88,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'English',
        description: 'Test your understanding of English grammar.',
        tags: 'English',
        createdBy: 'John',
        numberOfAttempts: 50,
        numberOfLikes: 25,
        averageScore: 75.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    const exams = await PublicExams.bulkCreate(examData);

    console.log('Exams inserted successfully:', exams.map((exam) => exam.toJSON()));
  } catch (error) {
    console.error('Error inserting data into PublicExams table:', error);
  } finally {
    sequelize.close();
  }
}
//insertData();
// module.exports = {
//   insertData,
// };
//createTable();
//retrieving data from table
async function retrieveDataByCreatedBy(createdBy) {
    try {
      await sequelize.sync();
      console.log('Exams table created successfully!');
  
      const exams = await PublicExams.findAll({
        where: {
          createdBy: createdBy, // Array of id values to retrieve
        },
      });
  
      console.log('Exams retrieved successfully:', exams.map((exam) => exam.toJSON()));
    } catch (error) {
      console.error('Error retrieving data from PublicExams table:', error);
    } finally {
      sequelize.close();
    }
  }
  const namesToRetrieve = ['john']; // Modify the array with the desired id values to retrieve
  retrieveDataByCreatedBy(namesToRetrieve); 
  
  // module.exports = {
  //   retrieveDataByCreatedBy,
  // };

