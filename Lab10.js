let subjects = [];

function Subjects() {
  subjects = [];
  let numberOfSubjects = parseInt(prompt("Enter how many subjects you take:"));

  for (let i = 0; i < numberOfSubjects; i++) {
    let result = parseInt(prompt("Enter the result you got for subject " + (i + 1) + ":"));
    subjects.push(result);
  }

  let total = subjects.reduce((sum, result) => sum + result, 0);
  let average = total / subjects.length;

  function findResult(result) {
    if (score >= 70) {
      return 'A';
    } else if (result >= 60) {
      return 'B';
    } else if (result >= 50) {
      return 'C';
    } else if (result >= 40) {
      return 'D';
    } else {
      return 'F';
    }
  }

  let resultsHTML = "Results:";
  for (let i = 0; i < subjects.length; i++) {
    resultsHTML += "Subject " + (i + 1) + ": " + subjects[i] + ". Result: " + findResult(subjects[i]);
  }

  resultsHTML += "Total Average:";
  resultsHTML += average + " Result: " + findResult(average);

  document.getElementById('main').innerHTML = resultsHTML;
}