let questions = [];

let getAll = () => {
    return Promise .resolve(questions);
}

let get = (id) => {
    questions.forEach((x) => {
        console.log(x.id);
    })
    const question = questions.find(x => x.id == id)
    if(question) {
        return Promise.resolve(question);
    }

    return Promise.reject('No question with that id exist');
}

let save = (question) => {
    const id = questions.length += 1;
    const savedQuestion = {
        id : id,
        question : question,
        answers : []
    }

    questions.push(savedQuestion)
    return Promise.resolve(savedQuestion);
}

let addAnswer = (questionId, answer) => {
    let question = get(questionId);
    console.log(question);
    if(question) {
        let savedAnswer = {
            id : question.answers.length += 1,
            answer
        }

        question.answers.push(savedAnswer);
       return Promise.resolve(savedAnswer);
    }

    return Promise.reject(`no question with id ${questionId} was found`);
}

module.exports = {
    getAll,
    get,
    save,
    addAnswer
}