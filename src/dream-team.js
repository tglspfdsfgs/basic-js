const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;

	members = members.filter(member => typeof member == "string");

	for (let i = 0; i < members.length; i++) {
		members[i] = members[i].trim();
	}

	members.sort((a, b) => a.localeCompare(b));

	let result = "";
	
	for (let i = 0; i < members.length; i++) {
		result += members[i][0].toUpperCase();
	}

	return result;
}

module.exports = {
  createDreamTeam
};
