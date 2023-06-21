const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sdbconnection');

const User = sequelize.define('USERS', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  familyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emailid: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
//insert data
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Synchronize the model with the database and create the table
    await sequelize.sync({ force: true });
    console.log('USERS table created.');

    const users = await User.bulkCreate([
      {
        fullName:'Chris Wayne',
        firstName: 'Chris',
        familyName: 'Wayne',
        emailid: 'chriswayne@gmail.com',
        password: 'password345',
      },
      {
        fullName: 'Elizabeth Taylor',
        firstName: 'Elizabeth',
        familyName: 'Taylor',
        emailid: 'Elizabeth@example.com',
        password: 'password123',
      },
      {
        fullName:'John Doe',
        firstName: 'John',
        familyName: 'Doe',
        emailid: 'john@gmail.com',
        password: 'password456',
      },
      // Add more user objects as needed
    ]);

    console.log('Users created:', users.map(user => user.toJSON()));

    // Other code or operations with the USERS table can be performed here

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
//retrieve data
// async function retrieveRowsByName(fullName) {
//     try {
//       await sequelize.authenticate();
//       console.log('Connected to the database.');
  
//       const users = await User.findAll({
//         where: {
//           fullName: fullName,
//         },
//       });
  
//       console.log('Users retrieved successfully:', users.map(user => user.toJSON()));
//     } catch (error) {
//       console.error('Error retrieving data from USERS table:', error);
//     } finally {
//       sequelize.close();
//     }
//   }
  
//   const namesToRetrieve = ['Chris Wayne']; // Modify the array with the desired first names to retrieve
//   retrieveRowsByName(namesToRetrieve);
//   module.exports = user;

