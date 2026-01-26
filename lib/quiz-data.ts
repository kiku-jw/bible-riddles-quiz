export type QuestionType = 'single' | 'multi' | 'intro' | 'transition' | 'finale';

export interface QuizQuestion {
    id: number;
    type: QuestionType;
    text?: string;
    question?: string;
    options?: {
        text: string;
        isCorrect: boolean;
    }[];
    afterReveal?: string;
    part?: 'josiah' | 'jeremiah';
    bgImage?: string;
}

export const quizData: QuizQuestion[] = [
    // INTRO
    {
        id: 0,
        type: 'intro',
        text: 'Сьогодні ти вирушаєш у подорож у біблійні часи. Ти познайомишся з двома сміливими слугами Єгови — царем Йосією та пророком Єремією.',
        part: 'josiah'
    },

    // PART 1 - JOSIAH (12 questions)
    {
        id: 1,
        type: 'single',
        part: 'josiah',
        question: 'Хто такий Йосія?',
        options: [
            { text: 'Пророк', isCorrect: false },
            { text: 'Первосвященник', isCorrect: false },
            { text: 'Цар Юди', isCorrect: true },
            { text: 'Співак у храмі', isCorrect: false }
        ]
    },
    {
        id: 2,
        type: 'single',
        part: 'josiah',
        question: 'Скільки років було Йосії коли він став царем?',
        options: [
            { text: '8 років', isCorrect: true },
            { text: '16 років', isCorrect: false },
            { text: '20 років', isCorrect: false },
            { text: '26 років', isCorrect: false }
        ]
    },
    {
        id: 3,
        type: 'single',
        part: 'josiah',
        question: 'Що почав робити Йосія, коли йому було 16 років?',
        options: [
            { text: 'Став будувати дім', isCorrect: false },
            { text: 'Навчатись правильно поклонятися Єгові', isCorrect: true },
            { text: 'Почав займатися спортом', isCorrect: false },
            { text: 'Поїхав в Чехію на заробітки', isCorrect: false }
        ]
    },
    {
        id: 4,
        type: 'single',
        part: 'josiah',
        question: 'Що почав робити Йосія у 20 років?',
        options: [
            { text: 'Знищувати ідолів та жертовники', isCorrect: true },
            { text: 'Став пророком', isCorrect: false },
            { text: 'Писати псалми', isCorrect: false },
            { text: 'Став піонером', isCorrect: false }
        ]
    },
    {
        id: 5,
        type: 'single',
        part: 'josiah',
        question: 'Що розпочав Йосія у 26 років?',
        options: [
            { text: 'Бізнес', isCorrect: false },
            { text: 'Відновлення храму Єгови', isCorrect: true },
            { text: 'Створив сім\'ю', isCorrect: false },
            { text: 'Нову війну', isCorrect: false }
        ]
    },
    {
        id: 6,
        type: 'multi',
        part: 'josiah',
        question: 'Як народ Юди відносився до поклоніння Єгові коли Йосія став царем?',
        options: [
            { text: 'Виявляли зневагу', isCorrect: true },
            { text: 'Зовсім не служили', isCorrect: true },
            { text: 'Були ревні та духовні', isCorrect: false },
            { text: 'Гралися в роблокс', isCorrect: false }
        ]
    },
    {
        id: 7,
        type: 'single',
        part: 'josiah',
        question: 'Що знайшли у Храмі?',
        options: [
            { text: 'Біблію', isCorrect: false },
            { text: 'Сувій Закону', isCorrect: true },
            { text: 'Алмазну кірку', isCorrect: false },
            { text: '10 заповідей', isCorrect: false }
        ]
    },
    {
        id: 8,
        type: 'multi',
        part: 'josiah',
        question: 'Що зробив цар Йосія коли йому прочитали Закон?',
        options: [
            { text: 'Розірвав на собі одяг', isCorrect: true },
            { text: 'Пішов до храму', isCorrect: true },
            { text: 'Зібрав народ Юди', isCorrect: true },
            { text: 'Влаштував свято', isCorrect: true }
        ]
    },
    {
        id: 9,
        type: 'multi',
        part: 'josiah',
        question: 'Що пообіцяв народ Юди Єгові?',
        options: [
            { text: 'Слухатися Його', isCorrect: true },
            { text: 'Святкувати Пасху кожного року', isCorrect: true },
            { text: 'Нічого', isCorrect: false },
            { text: 'Не працювати у суботу', isCorrect: false }
        ]
    },
    {
        id: 10,
        type: 'multi',
        part: 'josiah',
        question: 'Що допомогло Йосії полюбити Закон Єгови?',
        options: [
            { text: 'Те, що Йосія читав Закон', isCorrect: true },
            { text: 'Розмірковував над Законом', isCorrect: true },
            { text: 'Бо всі навколо так робили', isCorrect: false },
            { text: 'Бо була нагорода', isCorrect: false }
        ]
    },
    {
        id: 11,
        type: 'single',
        part: 'josiah',
        question: 'Як Єгова ставився до Йосії?',
        options: [
            { text: 'Був дуже сердитий', isCorrect: false },
            { text: 'Покарав його', isCorrect: false },
            { text: 'Був задоволений його смиренням', isCorrect: true },
            { text: 'Не знав його', isCorrect: false }
        ]
    },
    {
        id: 12,
        type: 'single',
        part: 'josiah',
        question: 'Який урок можна взяти для себе з прикладу Йосії?',
        afterReveal: 'Насправді всі ці думки правильні',
        options: [
            { text: 'Служити Єгові можна з дитинства', isCorrect: true },
            { text: 'Дізнавшись правду, відразу почати діяти', isCorrect: true },
            { text: 'Служити Єгові незалежно від оточуючих', isCorrect: true },
            { text: 'Єгова цінує смирення і слухняність', isCorrect: true }
        ]
    },

    // TRANSITION 1 - JOSIAH END (Photo from folder 2)
    {
        id: 13,
        type: 'transition',
        text: 'Щоб краще все згадати, можна подивитися фільм про Йосію.',
        part: 'josiah',
        bgImage: '/bible-quiz-kids/images/josiah-king.jpg'
    },

    // TRANSITION 2 - TIME PASSING (Animation/Image from folder 1)
    {
        id: 14,
        type: 'transition',
        text: 'Час минав... І ось на сцену виходить новий пророк.',
        part: 'jeremiah',
        bgImage: '/bible-quiz-kids/images/transition.jpg'
    },

    // PART 2 - JEREMIAH (12 questions)
    {
        id: 15,
        type: 'single',
        part: 'jeremiah',
        question: 'Хто такий Єремія?',
        options: [
            { text: 'Цар Юди', isCorrect: false },
            { text: 'Пророк Єгови', isCorrect: true },
            { text: 'Священик', isCorrect: false },
            { text: 'Тіктокер', isCorrect: false }
        ]
    },
    {
        id: 16,
        type: 'single',
        part: 'jeremiah',
        question: 'До кого Єгова послав Єремію?',
        options: [
            { text: 'Єгиптян', isCorrect: false },
            { text: 'Самарян', isCorrect: false },
            { text: 'Юдеїв', isCorrect: true },
            { text: 'Чехів', isCorrect: false }
        ]
    },
    {
        id: 17,
        type: 'single',
        part: 'jeremiah',
        question: 'Чому Єремія спочатку хвилювався проповідувати?',
        options: [
            { text: 'Бо його хотіли вбити', isCorrect: false },
            { text: 'Бо не знав Закону', isCorrect: false },
            { text: 'Бо був ще молодий і не вмів говорити', isCorrect: true },
            { text: 'Бо боявся однокласників', isCorrect: false }
        ]
    },
    {
        id: 18,
        type: 'single',
        part: 'jeremiah',
        question: 'Що пообіцяв Єгова Єремії?',
        options: [
            { text: 'Що від нього вийде великий народ', isCorrect: false },
            { text: 'Що скаже, що говорити, і допоможе', isCorrect: true },
            { text: 'Що він побудує храм', isCorrect: false },
            { text: 'Що звільнить від служіння', isCorrect: false }
        ]
    },
    {
        id: 19,
        type: 'single',
        part: 'jeremiah',
        question: 'Що Єгова наказав зробити Єремії перед старійшинами?',
        options: [
            { text: 'Побудувати жертовник', isCorrect: false },
            { text: 'Заспівати пісню', isCorrect: false },
            { text: 'Розбити глиняний глечик', isCorrect: true },
            { text: 'Збрити бороду', isCorrect: false }
        ]
    },
    {
        id: 20,
        type: 'single',
        part: 'jeremiah',
        question: 'Що означав розбитий глечик?',
        options: [
            { text: 'Що Єрусалим буде знищений', isCorrect: true },
            { text: 'Що Єгова сердиться на глечики', isCorrect: false },
            { text: 'Що не буде води', isCorrect: false },
            { text: 'Що глечик був бракований', isCorrect: false }
        ]
    },
    {
        id: 21,
        type: 'multi',
        part: 'jeremiah',
        question: 'Куди посадили Єремію після цього?',
        options: [
            { text: 'У дерев\'яні колодки', isCorrect: true },
            { text: 'У глибокий колодязь з болотом', isCorrect: true },
            { text: 'У в\'язницю', isCorrect: false },
            { text: 'У яму із левами', isCorrect: false }
        ]
    },
    {
        id: 22,
        type: 'single',
        part: 'jeremiah',
        question: 'Що допомогло Єремії не припинити проповідувати?',
        options: [
            { text: 'Похвала людей', isCorrect: false },
            { text: 'Страх покарання', isCorrect: false },
            { text: 'Звістка Єгови, як вогонь у серці', isCorrect: true },
            { text: 'Він був говорливий', isCorrect: false }
        ]
    },
    {
        id: 23,
        type: 'single',
        part: 'jeremiah',
        question: 'Хто витягнув Єремію з колодязя?',
        options: [
            { text: 'Евед-Мелех', isCorrect: true },
            { text: 'Пашхур', isCorrect: false },
            { text: 'Цар', isCorrect: false },
            { text: 'Ангел Єгови', isCorrect: false }
        ]
    },
    {
        id: 24,
        type: 'multi',
        part: 'jeremiah',
        question: 'Чому, незважаючи на молодий вік, Єремія послухався Єгову?',
        options: [
            { text: 'Бо Єгова пообіцяв бути з ним', isCorrect: true },
            { text: 'Бо роздумував про доручення Єгови', isCorrect: true },
            { text: 'Бо боявся', isCorrect: false },
            { text: 'Бо всі пророки так робили', isCorrect: false }
        ]
    },
    {
        id: 25,
        type: 'multi',
        part: 'jeremiah',
        question: 'Хто не хотів, щоб Єремія проповідував?',
        options: [
            { text: 'Священики', isCorrect: true },
            { text: 'Неправдиві пророки', isCorrect: true },
            { text: 'Народ', isCorrect: false },
            { text: 'Евед-Мелех', isCorrect: false }
        ]
    },
    {
        id: 26,
        type: 'single',
        part: 'jeremiah',
        question: 'Який урок можна взяти з цієї історії?',
        afterReveal: 'Усі ці думки правильні',
        options: [
            { text: 'Нікому не під силу зупинити проповідь', isCorrect: true },
            { text: 'Єгова допомагає слухняним', isCorrect: true },
            { text: 'Навіть юні можуть бути прикладом', isCorrect: true },
            { text: 'Переслідування будуть, але Єгова допоможе', isCorrect: true }
        ]
    },

    // FINALE
    {
        id: 27,
        type: 'finale',
        text: 'Йосія і Єремія довіряли Єгові навіть тоді, коли було важко. А як ти можеш показати свою довіру сьогодні?',
        part: 'jeremiah'
    }
];

export const totalQuestions = quizData.filter(q => q.type === 'single' || q.type === 'multi').length;
