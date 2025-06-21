// Code your solution in this file!
// Headquarters is always on 42nd Street
const hq = 42;

/**
 * Returns the number of Manhattan blocks between 42nd Street and `pickup`.
 */
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - hq);
}

/**
 * Same idea as above, but converted to feet (1 block = 264 ft).
 */
function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

/**
 * Raw distance travelled in feet between `start` and `destination`,
 * regardless of direction.
 */
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

/**
 * Fare calculator:
 * • First 400 ft are free.  
 * • Next stretch up to 2000 ft costs ¢2 per foot.  
 * • Between 2001 ft and 2500 ft: flat $25.  
 * • Beyond 2500 ft is not allowed.
 */
function calculatesFarePrice(start, destination) {
  const totalFeet = distanceTravelledInFeet(start, destination);

  if (totalFeet <= 400) {
    return 0;
  } else if (totalFeet <= 2000) {
    return (totalFeet - 400) * 0.02;
  } else if (totalFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Export (if your test runner expects CommonJS modules)
// module.exports = {
//   distanceFromHqInBlocks,
//   distanceFromHqInFeet,
//   distanceTravelledInFeet,
//   calculatesFarePrice,
// };
