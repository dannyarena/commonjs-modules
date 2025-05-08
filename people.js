const createName = require('./names.js');
const createHobbies = require('./hobbies.js');

function createPerson ( ) {
    const fullName = createName ('Danny', 'Arena');
    const hobbies = createHobbies ('calcio', 'musica', 'lettura');

    return {
        fullName: fullName,
        hobbies: hobbies
    };
}