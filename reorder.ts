import { QuizQuestion, quizData } from './lib/quiz-data';

// Map original IDs to questions for easy lookup
const questionsById: Record<number, QuizQuestion> = {};
quizData.forEach(q => {
    if (q.type === 'single' || q.type === 'multi') {
        questionsById[q.id] = q;
    }
});

// New Sequence based on the plan
const newOrderIds = [
    1, 12, 2, 14, 3, 15, 5, 13, 6, 16, 7, 18, 8, 20, 9, 22, 10, 24, 11, 17, 4, 19, 21, 23, 25, 26
];

const newQuizData: QuizQuestion[] = [];

// Keep intro
const intro = quizData.find(q => q.type === 'intro');
if (intro) newQuizData.push(intro);

// Add questions in new order and update IDs
newOrderIds.forEach((id, index) => {
    const q = questionsById[id];
    if (q) {
        newQuizData.push({
            ...q,
            id: index + 1
        });
    }
});

// Keep finale
const finale = quizData.find(q => q.type === 'finale');
if (finale) {
    newQuizData.push({
        ...finale,
        id: newOrderIds.length + 1
    });
}

console.log(JSON.stringify(newQuizData, null, 4));
