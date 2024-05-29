const submissions = [
    { name: "Jane", score: 95, passed: true },
    { name: "Joe", score: 77, passed: true },
    { name: "Jack", score: 59, passed: false },
    { name: "Jill", score: 88, passed: true }
]

const addSubmission = (array, newName, newScore) => {
    const passed = newScore >= 60 ? true : false;
    array.push({ name: newName, score: newScore, passed });
}

const deleteSubmissionByIndex = (array, index) => {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    } else {
        console.log("Index out of bounds");
    }
}

const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(submission => submission.name === name);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log("Name not found");
    }
}

const editSubmission = (array, index, score) => {
    if (index >= 0 && index < array.length) {
        array[index].score =score;
        array[index].passed = score >= 60;
    }  else {
        console.log("Index out of bounds");
    }
}

const findSubmissionByName = (array, name) => {
    return array.find(submission => submission.name === name);
}

const findLowestScore = (array) => {
    if (array.length === 0) {
        return null; 
    }
    return array.reduce((lowest, current) => {
        return (current.score < lowest.score) ? current : lowest;
    })
}

const findAverageScore = (array) => {
    if (array.length === 0) {
        return 0; 
    }
    const totalScore = array.reduce((sum, submission) => sum + submission.score, 0);
    return totalScore / array.length;
}

const filterPassing = (array) => {
    return array.filter(submission => submission.score >= 60);
}

const filter90AndAbove = (array) => {
    return array.filter(submission => submission.score >= 90);
}











