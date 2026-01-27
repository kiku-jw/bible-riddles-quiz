export type QuestionType = 'single' | 'multi' | 'intro' | 'transition' | 'finale';

export interface LocalizedString {
    uk: string;
    ru: string;
    en: string;
}

export interface QuizQuestion {
    id: number;
    type: QuestionType;
    text?: LocalizedString;
    question?: LocalizedString;
    options?: {
        text: LocalizedString;
        isCorrect: boolean;
    }[];
    afterReveal?: LocalizedString;
    part?: 'josiah' | 'jeremiah';
    bgImage?: string;
}

export const quizData: QuizQuestion[] = [
    // INTRO
    {
        id: 0,
        type: 'intro',
        text: {
            uk: 'Сьогодні ти вирушаєш у подорож у біблійні часи. Ти познайомишся з двома сміливими слугами Єгови — царем Йосією та пророком Єремією.',
            ru: 'Сегодня ты отправляешься в путешествие в библейские времена. Ты познакомишься с двумя смелыми служителями Иеговы — царем Иосией и пророком Иеремией.',
            en: 'Today you set off on a journey into biblical times. You will meet two brave servants of Jehovah — King Josiah and the prophet Jeremiah.'
        },
        part: 'josiah'
    },

    // PART 1 - JOSIAH
    {
        id: 1,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Хто такий Йосія?',
            ru: 'Кто такой Иосия?',
            en: 'Who was Josiah?'
        },
        options: [
            { text: { uk: 'Пророк', ru: 'Пророк', en: 'Prophet' }, isCorrect: false },
            { text: { uk: 'Первосвященник', ru: 'Первосвященник', en: 'High Priest' }, isCorrect: false },
            { text: { uk: 'Цар Юди', ru: 'Царь Иуды', en: 'King of Judah' }, isCorrect: true },
            { text: { uk: 'Співак у храмі', ru: 'Певец в храме', en: 'Temple singer' }, isCorrect: false }
        ]
    },
    {
        id: 2,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Скільки років було Йосії коли він став царем?',
            ru: 'Сколько лет было Иосии, когда он стал царем?',
            en: 'How old was Josiah when he became king?'
        },
        options: [
            { text: { uk: '8 років', ru: '8 лет', en: '8 years old' }, isCorrect: true },
            { text: { uk: '16 років', ru: '16 лет', en: '16 years old' }, isCorrect: false },
            { text: { uk: '20 років', ru: '20 лет', en: '20 years old' }, isCorrect: false },
            { text: { uk: '26 років', ru: '26 лет', en: '26 years old' }, isCorrect: false }
        ]
    },
    {
        id: 3,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Що почав робити Йосія, коли йому було 16 років?',
            ru: 'Что начал делать Иосия, когда ему было 16 лет?',
            en: 'What did Josiah start doing when he was 16?'
        },
        options: [
            { text: { uk: 'Став будувати дім', ru: 'Стал строить дом', en: 'Started building a house' }, isCorrect: false },
            { text: { uk: 'Навчатись правильно поклонятися Єгові', ru: 'Учиться правильно поклоняться Иегове', en: 'Learning to worship Jehovah correctly' }, isCorrect: true },
            { text: { uk: 'Почав займатися спортом', ru: 'Начал заниматься спортом', en: 'Started doing sports' }, isCorrect: false },
            { text: { uk: 'Поїхав в Чехію на заробітки', ru: 'Уехал на заработки', en: 'Went abroad to work' }, isCorrect: false }
        ]
    },
    {
        id: 4,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Що почав робити Йосія у 20 років?',
            ru: 'Что начал делать Иосия в 20 лет?',
            en: 'What did Josiah start doing at age 20?'
        },
        options: [
            { text: { uk: 'Знищувати ідолів та жертовники', ru: 'Уничтожать идолов и жертвенники', en: 'Destroying idols and altars' }, isCorrect: true },
            { text: { uk: 'Став пророком', ru: 'Стал пророком', en: 'Became a prophet' }, isCorrect: false },
            { text: { uk: 'Писати псалми', ru: 'Писать псалмы', en: 'Writing psalms' }, isCorrect: false },
            { text: { uk: 'Став піонером', ru: 'Стал пионером', en: 'Became a pioneer' }, isCorrect: false }
        ]
    },
    {
        id: 5,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Що розпочав Йосія у 26 років?',
            ru: 'Что начал Иосия в 26 лет?',
            en: 'What did Josiah begin at age 26?'
        },
        options: [
            { text: { uk: 'Бізнес', ru: 'Бизнес', en: 'Business' }, isCorrect: false },
            { text: { uk: 'Відновлення храму Єгови', ru: 'Восстановление храма Иеговы', en: 'Restoring Jehovah\'s temple' }, isCorrect: true },
            { text: { uk: 'Створив сім\'ю', ru: 'Создал семью', en: 'Started a family' }, isCorrect: false },
            { text: { uk: 'Нову війну', ru: 'Новую войну', en: 'A new war' }, isCorrect: false }
        ]
    },
    {
        id: 6,
        type: 'multi',
        part: 'josiah',
        question: {
            uk: 'Як народ Юди відносився до поклоніння Єгові коли Йосія став царем?',
            ru: 'Как народ Иуды относился к поклонению Иегове, когда Иосия стал царем?',
            en: 'How did the people of Judah view worship of Jehovah when Josiah became king?'
        },
        options: [
            { text: { uk: 'Виявляли зневагу', ru: 'Проявляли неуважение', en: 'Showed disrespect' }, isCorrect: true },
            { text: { uk: 'Зовсім не служили', ru: 'Совсем не служили', en: 'Did not serve at all' }, isCorrect: true },
            { text: { uk: 'Були ревні та духовні', ru: 'Были ревностными и духовными', en: 'Were zealous and spiritual' }, isCorrect: false },
            { text: { uk: 'Гралися в роблокс', ru: 'Играли в роблокс', en: 'Played Roblox' }, isCorrect: false }
        ]
    },
    {
        id: 7,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Що знайшли у Храмі?',
            ru: 'Что нашли в Храме?',
            en: 'What was found in the Temple?'
        },
        options: [
            { text: { uk: 'Біблію', ru: 'Библию', en: 'The Bible' }, isCorrect: false },
            { text: { uk: 'Сувій Закону', ru: 'Свиток Закона', en: 'The Book of the Law' }, isCorrect: true },
            { text: { uk: 'Алмазну кірку', ru: 'Алмазную кирку', en: 'A diamond pickaxe' }, isCorrect: false },
            { text: { uk: '10 заповідей', ru: '10 заповедей', en: 'The 10 Commandments' }, isCorrect: false }
        ]
    },
    {
        id: 8,
        type: 'multi',
        part: 'josiah',
        question: {
            uk: 'Що зробив цар Йосія коли йому прочитали Закон?',
            ru: 'Что сделал царь Иосия, когда ему прочитали Закон?',
            en: 'What did King Josiah do when the Law was read to him?'
        },
        options: [
            { text: { uk: 'Розірвав на собі одяг', ru: 'Разорвал на себе одежду', en: 'Ripped his clothes' }, isCorrect: true },
            { text: { uk: 'Пішов до храму', ru: 'Пошел в храм', en: 'Went to the temple' }, isCorrect: true },
            { text: { uk: 'Зібрав народ Юди', ru: 'Собрал народ Иуды', en: 'Gathered the people of Judah' }, isCorrect: true },
            { text: { uk: 'Влаштував свято', ru: 'Устроил праздник', en: 'Arranged a feast' }, isCorrect: true }
        ]
    },
    {
        id: 9,
        type: 'multi',
        part: 'josiah',
        question: {
            uk: 'Що пообіцяв народ Юди Єгові?',
            ru: 'Что пообещал народ Иуды Иегове?',
            en: 'What did the people of Judah promise Jehovah?'
        },
        options: [
            { text: { uk: 'Слухатися Його', ru: 'Слушаться Его', en: 'To obey Him' }, isCorrect: true },
            { text: { uk: 'Святкувати Пасху кожного року', ru: 'Праздновать Пасху каждый год', en: 'To celebrate Passover every year' }, isCorrect: true },
            { text: { uk: 'Нічого', ru: 'Ничего', en: 'Nothing' }, isCorrect: false },
            { text: { uk: 'Не працювати у суботу', ru: 'Не работать в субботу', en: 'Not to work on the Sabbath' }, isCorrect: false }
        ]
    },
    {
        id: 10,
        type: 'multi',
        part: 'josiah',
        question: {
            uk: 'Що допомогло Йосії полюбити Закон Єгови?',
            ru: 'Что помогло Иосии полюбить Закон Иеговы?',
            en: 'What helped Josiah love Jehovah\'s Law?'
        },
        options: [
            { text: { uk: 'Те, що Йосія читав Закон', ru: 'To, что Иосия читал Закон', en: 'Fact that Josiah read the Law' }, isCorrect: true },
            { text: { uk: 'Розмірковував над Законом', ru: 'Размышлял над Законом', en: 'He meditated on the Law' }, isCorrect: true },
            { text: { uk: 'Бо всі навколо так робили', ru: 'Потому что все вокруг так делали', en: 'Because everyone else did' }, isCorrect: false },
            { text: { uk: 'Бо була нагорода', ru: 'Потому что была награда', en: 'Because there was a reward' }, isCorrect: false }
        ]
    },
    {
        id: 11,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Як Єгова ставився до Йосії?',
            ru: 'Как Иегова относился к Иосии?',
            en: 'How did Jehovah feel about Josiah?'
        },
        options: [
            { text: { uk: 'Був дуже сердитий', ru: 'Был очень сердит', en: 'He was very angry' }, isCorrect: false },
            { text: { uk: 'Покарав його', ru: 'Наказал его', en: 'He punished him' }, isCorrect: false },
            { text: { uk: 'Був задоволений його смиренням', ru: 'Был доволен его смирением', en: 'He was pleased with his humility' }, isCorrect: true },
            { text: { uk: 'Не знав його', ru: 'Не знал его', en: 'He did not know him' }, isCorrect: false }
        ]
    },
    {
        id: 12,
        type: 'single',
        part: 'josiah',
        question: {
            uk: 'Який урок можна взяти для себе з прикладу Йосії?',
            ru: 'Какой урок можно извлечь для себя из примера Иосии?',
            en: 'What lesson can we learn from Josiah\'s example?'
        },
        afterReveal: {
            uk: 'Насправді всі ці думки правильні',
            ru: 'На самом деле все эти мысли верны',
            en: 'Actually, all of these points are correct'
        },
        options: [
            { text: { uk: 'Служити Єгові можна з дитинства', ru: 'Служить Иегове можно с детства', en: 'You can serve Jehovah from childhood' }, isCorrect: true },
            { text: { uk: 'Дізнавшись правду, відразу почати діяти', ru: 'Узнав истину, сразу начать действовать', en: 'Act immediately after learning the truth' }, isCorrect: true },
            { text: { uk: 'Служити Єгові незалежно від оточуючих', ru: 'Служить Иегове независимо от окружающих', en: 'Serve Jehovah regardless of others' }, isCorrect: true },
            { text: { uk: 'Єгова цінує смирення і слухняність', ru: 'Иегова ценит смирение и послушание', en: 'Jehovah values humility and obedience' }, isCorrect: true }
        ]
    },

    // TRANSITION
    {
        id: 13,
        type: 'transition',
        text: {
            uk: 'Щоб краще все згадати, можна подивитися фільм про Йосію.',
            ru: 'Чтобы лучше все вспомнить, можно посмотреть фильм об Иосии.',
            en: 'To remember it all better, you can watch a film about Josiah.'
        },
        part: 'josiah',
        bgImage: '/bible-quiz-kids/images/josiah-king.jpg'
    },
    {
        id: 14,
        type: 'transition',
        text: {
            uk: 'Час минав... І ось на сцену виходить новий пророк.',
            ru: 'Время шло... И вот на сцену выходит новый пророк.',
            en: 'Time passed... And now a new prophet enters the scene.'
        },
        part: 'jeremiah',
        bgImage: '/bible-quiz-kids/images/transition.jpg'
    },

    // PART 2 - JEREMIAH
    {
        id: 15,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Хто такий Єремія?',
            ru: 'Кто такой Иеремия?',
            en: 'Who was Jeremiah?'
        },
        options: [
            { text: { uk: 'Цар Юди', ru: 'Царь Иуды', en: 'King of Judah' }, isCorrect: false },
            { text: { uk: 'Пророк Єгови', ru: 'Пророк Иеговы', en: 'Jehovah\'s prophet' }, isCorrect: true },
            { text: { uk: 'Священик', ru: 'Священник', en: 'Priest' }, isCorrect: false },
            { text: { uk: 'Тіктокер', ru: 'Тиктокер', en: 'TikToker' }, isCorrect: false }
        ]
    },
    {
        id: 16,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'До кого Єгова послав Єремію?',
            ru: 'К кому Иегова послал Иеремию?',
            en: 'To whom did Jehovah send Jeremiah?'
        },
        options: [
            { text: { uk: 'Єгиптян', ru: 'Египтянам', en: 'Egyptians' }, isCorrect: false },
            { text: { uk: 'Самарян', ru: 'Самарянам', en: 'Samaritans' }, isCorrect: false },
            { text: { uk: 'Юдеїв', ru: 'Иудеям', en: 'Jews' }, isCorrect: true },
            { text: { uk: 'Чехів', ru: 'Чехам', en: 'Czechs' }, isCorrect: false }
        ]
    },
    {
        id: 17,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Чому Єремія спочатку хвилювався проповідувати?',
            ru: 'Почему Иеремия сначала переживал из-за проповеди?',
            en: 'Why was Jeremiah initially worried about preaching?'
        },
        options: [
            { text: { uk: 'Бо його хотіли вбити', ru: 'Потому что его хотели убить', en: 'Because they wanted to kill him' }, isCorrect: false },
            { text: { uk: 'Бо не знав Закону', ru: 'Потому что не знал Закона', en: 'Because he didn\'t know the Law' }, isCorrect: false },
            { text: { uk: 'Бо був ще молодий і не вмів говорити', ru: 'Потому что был еще молод и не умел говорить', en: 'Because he was young and couldn\'t speak well' }, isCorrect: true },
            { text: { uk: 'Бо боявся однокласників', ru: 'Потому что боялся одноклассников', en: 'Because he feared classmates' }, isCorrect: false }
        ]
    },
    {
        id: 18,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Що пообіцяв Єгова Єремії?',
            ru: 'Что Иегова пообещал Иеремии?',
            en: 'What did Jehovah promise Jeremiah?'
        },
        options: [
            { text: { uk: 'Що від нього вийде великий народ', ru: 'Что от него произойдет великий народ', en: 'That a great nation would come from him' }, isCorrect: false },
            { text: { uk: 'Що скаже, що говорити, і допоможе', ru: 'Что скажет, что говорить, и поможет', en: 'That He would tell him what to say and help him' }, isCorrect: true },
            { text: { uk: 'Що він побудує храм', ru: 'Что он построит храм', en: 'That he would build a temple' }, isCorrect: false },
            { text: { uk: 'Що звільнить від служіння', ru: 'Что освободит от служения', en: 'That He would release him from service' }, isCorrect: false }
        ]
    },
    {
        id: 19,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Що Єгова наказав зробити Єремії перед старійшинами?',
            ru: 'Что Иегова велел сделать Иеремии перед старейшинами?',
            en: 'What did Jehovah tell Jeremiah to do before the elders?'
        },
        options: [
            { text: { uk: 'Побудувати жертовник', ru: 'Построить жертвенник', en: 'Build an altar' }, isCorrect: false },
            { text: { uk: 'Заспівати пісню', ru: 'Спеть песню', en: 'Sing a song' }, isCorrect: false },
            { text: { uk: 'Розбити глиняний глечик', ru: 'Разбить глиняный кувшин', en: 'Break a clay jar' }, isCorrect: true },
            { text: { uk: 'Збрити бороду', ru: 'Сбрить бороду', en: 'Shave his beard' }, isCorrect: false }
        ]
    },
    {
        id: 20,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Що означав розбитий глечик?',
            ru: 'Что означал разбитый кувшин?',
            en: 'What did the broken jar mean?'
        },
        options: [
            { text: { uk: 'Що Єрусалим буде знищений', ru: 'Что Иерусалим будет уничтожен', en: 'That Jerusalem would be destroyed' }, isCorrect: true },
            { text: { uk: 'Що Єгова сердиться на глечики', ru: 'Что Иегова сердится на кувшины', en: 'That Jehovah is angry at jars' }, isCorrect: false },
            { text: { uk: 'Що не буде води', ru: 'Что не будет воды', en: 'That there will be no water' }, isCorrect: false },
            { text: { uk: 'Що глечик був бракований', ru: 'Что кувшин был бракованный', en: 'That the jar was defective' }, isCorrect: false }
        ]
    },
    {
        id: 21,
        type: 'multi',
        part: 'jeremiah',
        question: {
            uk: 'Куди посадили Єремію після цього?',
            ru: 'Куда посадили Иеремию после этого?',
            en: 'Where was Jeremiah put after that?'
        },
        options: [
            { text: { uk: 'У дерев\'яні колодки', ru: 'В деревянные колодки', en: 'In wooden stocks' }, isCorrect: true },
            { text: { uk: 'У глибокий колодязь з болотом', ru: 'В глубокий колодец с грязью', en: 'In a deep muddy cistern' }, isCorrect: true },
            { text: { uk: 'У в\'язницю', ru: 'В тюрьюму', en: 'In prison' }, isCorrect: false },
            { text: { uk: 'У яму із левами', ru: 'В яму со львами', en: 'In a lion\'s den' }, isCorrect: false }
        ]
    },
    {
        id: 22,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Що допомогло Єремії не припинити проповідувати?',
            ru: 'Что помогло Иеремии не прекратить проповедовать?',
            en: 'What helped Jeremiah not to stop preaching?'
        },
        options: [
            { text: { uk: 'Похвала людей', ru: 'Похвала людей', en: 'Praise from people' }, isCorrect: false },
            { text: { uk: 'Страх покарання', ru: 'Страх наказания', en: 'Fear of punishment' }, isCorrect: false },
            { text: { uk: 'Звістка Єгови, як вогонь у серці', ru: 'Весть Иеговы, как огонь в сердце', en: 'Jehovah\'s message like fire in his heart' }, isCorrect: true },
            { text: { uk: 'Він був говорливий', ru: 'Он был разговорчивый', en: 'He was talkative' }, isCorrect: false }
        ]
    },
    {
        id: 23,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Хто витягнув Єремію з колодязя?',
            ru: 'Кто вытащил Иеремию из колодца?',
            en: 'Who pulled Jeremiah out of the cistern?'
        },
        options: [
            { text: { uk: 'Евед-Мелех', ru: 'Эвед-Мелех', en: 'Ebed-melech' }, isCorrect: true },
            { text: { uk: 'Пашхур', ru: 'Пашхур', en: 'Pashhur' }, isCorrect: false },
            { text: { uk: 'Цар', ru: 'Царь', en: 'The King' }, isCorrect: false },
            { text: { uk: 'Ангел Єгови', ru: 'Ангел Иеговы', en: 'Jehovah\'s angel' }, isCorrect: false }
        ]
    },
    {
        id: 24,
        type: 'multi',
        part: 'jeremiah',
        question: {
            uk: 'Чому, незважаючи на молодий вік, Єремія послухався Єгову?',
            ru: 'Почему, несмотря на молодой возраст, Иеремия послушался Иегову?',
            en: 'Why did Jeremiah obey Jehovah despite his young age?'
        },
        options: [
            { text: { uk: 'Бо Єгова пообіцяв бути з ним', ru: 'Потому что Иегова пообещал быть с ним', en: 'Because Jehovah promised to be with him' }, isCorrect: true },
            { text: { uk: 'Бо роздумував про доручення Єгови', ru: 'Потому что размышлял о поручении Иеговы', en: 'Because he meditated on the assignment' }, isCorrect: true },
            { text: { uk: 'Бо боявся', ru: 'Потому что боялся', en: 'Because he was afraid' }, isCorrect: false },
            { text: { uk: 'Бо всі пророки так робили', ru: 'Потому что все пророки так делали', en: 'Because all prophets did so' }, isCorrect: false }
        ]
    },
    {
        id: 25,
        type: 'multi',
        part: 'jeremiah',
        question: {
            uk: 'Хто не хотів, щоб Єремія проповідував?',
            ru: 'Кто не хотел, чтобы Иеремия проповедовал?',
            en: 'Who did not want Jeremiah to preach?'
        },
        options: [
            { text: { uk: 'Священики', ru: 'Священники', en: 'Priests' }, isCorrect: true },
            { text: { uk: 'Неправдиві пророки', ru: 'Ложные пророки', en: 'False prophets' }, isCorrect: true },
            { text: { uk: 'Народ', ru: 'Народ', en: 'The people' }, isCorrect: false },
            { text: { uk: 'Евед-Мелех', ru: 'Эвед-Мелех', en: 'Ebed-melech' }, isCorrect: false }
        ]
    },
    {
        id: 26,
        type: 'single',
        part: 'jeremiah',
        question: {
            uk: 'Який урок можна взяти з цієї історії?',
            ru: 'Какой урок можно извлечь из этой истории?',
            en: 'What lesson can we take from this story?'
        },
        afterReveal: {
            uk: 'Усі ці думки правильні',
            ru: 'Все эти мысли верны',
            en: 'All these thoughts are correct'
        },
        options: [
            { text: { uk: 'Нікому не під силу зупинити проповідь', ru: 'Никому не под силу остановить проповедь', en: 'No one can stop the preaching' }, isCorrect: true },
            { text: { uk: 'Єгова допомагає слухняним', ru: 'Иегова помогает послушным', en: 'Jehovah helps the obedient' }, isCorrect: true },
            { text: { uk: 'Навіть юні можуть бути прикладом', ru: 'Даже юные могут быть примером', en: 'Even the young can be an example' }, isCorrect: true },
            { text: { uk: 'Переслідування будуть, але Єгова допоможе', ru: 'Преследования будут, но Иегова поможет', en: 'There will be persecution, but Jehovah will help' }, isCorrect: true }
        ]
    },

    // FINALE
    {
        id: 27,
        type: 'finale',
        text: {
            uk: 'Йосія і Єремія довіряли Єгові навіть тоді, коли було важко. А як ти можеш показати свою довіру сьогодні?',
            ru: 'Иосия и Иеремия доверяли Иегове даже тогда, когда было трудно. А как ты можешь показать свое доверие сегодня?',
            en: 'Josiah and Jeremiah trusted Jehovah even when it was difficult. How can you show your trust today?'
        },
        part: 'jeremiah'
    }
];

export const totalQuestions = quizData.filter(q => q.type === 'single' || q.type === 'multi').length;
