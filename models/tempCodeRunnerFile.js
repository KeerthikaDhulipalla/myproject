async function createTable() {
  try {
    await sequelize.sync();
    console.log('Exams table created successfully!');
  } catch (error) {
    console.error('Error creating Exams table:', error);
  } finally {
    sequelize.close();
  }
}

createTable();