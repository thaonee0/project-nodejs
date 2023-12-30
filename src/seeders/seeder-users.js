'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', //plain text sdnejbfjbfjsvjsvejv11334 -> hash password for privacy
      firstName: 'thao',
      lastName: 'phg',
      address: 'vn',
      gender: 0,
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAT: new Date()
    }]);
  }, 
  
  //rollback to previous

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
