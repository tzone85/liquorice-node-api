'use strict';
const moment = require('moment');
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('users', [
            {
                firstName: 'Bronwyn',
                lastName: 'Lasarow',
                totalScore: 23210,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Robert',
                lastName: 'Alers',
                totalScore: 22072,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Rene',
                lastName: 'Sekese',
                totalScore: 22510,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Sizwe Mabaso',
                lastName: 'Ngcobo',
                totalScore: 21701,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Yajna',
                lastName: 'Maharaj',
                totalScore: 21110,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Gloria N',
                lastName: 'Moputo',
                totalScore: 20002,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Ray',
                lastName: 'Sadhey',
                totalScore: 19920,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            },
            {
                firstName: 'Alexandra',
                lastName: 'Leung',
                totalScore: 19562,
                createdAt: moment().format('YYYY-MM-DD'),
                updatedAt: moment().format('YYYY-MM-DD')
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('users', null, {});
    }
};
