/**
 *
 * @param {number[]} scores
 * @returns number
 */
function getAverage(scores) {
  const sum = scores.reduce((prev, current) => prev + current);
  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/**
 *
 * @param {number} score
 * @returns string
 */
function getGrade(score) {
  if (score === 100) {
    return 'A++';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/**
 *
 * @param {number} score
 * @returns boolean
 */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));


/**
 * 
 * @param {number[]} totalScores 
 * @param {number} studentScore 
 * @returns string
 */
function studentMsg(totalScores, studentScore) {
    const grade = getGrade(studentScore)
    const average = getAverage(totalScores)
    const message = "Class average: " + average + ". Your grade: " + grade + ". ";
    if (studentScore < average) {
        return message + "You failed the course.";
    }
    return message + "You passed the course.";
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
