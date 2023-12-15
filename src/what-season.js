const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  const day = date.getDate();

  if (month < 0 || month > 11) {
    throw new Error('Invalid date! Month should be between 0 and 11.');
  }

  if (day < 1 || day > 31) {
    throw new Error('Invalid date! Day should be between 1 and 31.');
  }

  if (
    (month === 0 && day >= 1 && day <= 31) ||  // January
    (month === 1 && day >= 1 && day <= 28) ||  // February
    (month === 2 && day >= 1 && day <= 31) ||  // March
    (month === 3 && day >= 1 && day <= 30) ||  // April
    (month === 4 && day >= 1 && day <= 31) ||  // May
    (month === 5 && day >= 1 && day <= 30) ||  // June
    (month === 6 && day >= 1 && day <= 31) ||  // July
    (month === 7 && day >= 1 && day <= 31) ||  // August
    (month === 8 && day >= 1 && day <= 30) ||  // September
    (month === 9 && day >= 1 && day <= 31) ||  // October
    (month === 10 && day >= 1 && day <= 30) || // November
    (month === 11 && day >= 1 && day <= 31)    // December
  ) {
    if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    } else {
      return 'winter';
    }
  } else {
    throw new Error('Invalid date! Day is out of range for the given month.');
  }
}

module.exports = {
  getSeason
};

