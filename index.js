'use strict';

var moment = require('moment');

/**
 * Main function
 * @param  {String|Number|Date} birthDate Date picked by the user
 * @param  {String|Number|Date} now  	  Current date
 * @return {Date}            			  Math bday
 */
module.exports = function (birthDate, now) {
	var bday = moment(birthDate);
	var today = moment(now);
	var dayDifference = 0;
	var nextExponential = 0;
	var nextMathBdayDays = 0;

	if (!today.isValid() || !bday.isValid()) {
		throw new Error('Expected valid dates');
	}

	if (bday > today) {
		throw new Error('Birthdate is in the future');
	}

	dayDifference = today.diff(bday, 'days');
	nextExponential = String(dayDifference).length;
	nextMathBdayDays = Math.pow(10, nextExponential);

	return today.add(nextMathBdayDays, 'days').toDate();
};
