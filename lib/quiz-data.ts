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
    hint?: LocalizedString;
    options?: {
        text: LocalizedString;
        isCorrect: boolean;
        feedback?: LocalizedString;
    }[];
    afterReveal?: LocalizedString;
    part?: 'josiah' | 'jeremiah';
    bgImage?: string;
    image?: string;
}

export const quizData: QuizQuestion[] = [
    {
        id: 0,
        type: 'intro',
        text: {
            uk: 'Ласкаво просимо у світ біблійних загадок! Перевір свої знання та винахідливість. Деякі питання з каверзою, тож будь уважним!',
            ru: 'Добро пожаловать в мир библейских загадок! Проверь свои знания и находчивость. Некоторые вопросы с подвохом, так что будь внимателен!',
            en: 'Welcome to the world of Bible riddles! Test your knowledge and ingenuity. Some questions are tricky, so be careful!'
        },
        image: '/bible-riddles-quiz/illustrations/intro.png'
    },
    {
        id: 1,
        type: 'single',
        question: {
            uk: 'Скільки пар тварин Мойсей ввів у ковчег?',
            ru: 'Сколько пар животных Моисей ввел в ковчег?',
            en: 'How many pairs of animals did Moses lead into the ark?'
        },
        hint: {
            uk: 'Згадай, хто саме будував ковчег.',
            ru: 'Вспомни, кто именно строил ковчег.',
            en: 'Remember who exactly built the ark.'
        },
        image: '/bible-riddles-quiz/illustrations/q1.png',
        options: [
            { text: { uk: 'По одній парі', ru: 'По одной паре', en: 'One pair each' }, isCorrect: false },
            { text: { uk: 'По сім пар', ru: 'По семь пар', en: 'Seven pairs each' }, isCorrect: false },
            { text: { uk: 'Жодної', ru: 'Ни одной', en: 'None' }, isCorrect: true, feedback: { uk: 'Правильно! Ковчег будував Ной, а не Мойсей.', ru: 'Верно! Ковчег строил Ной, а не Моисей.', en: 'Correct! Noah built the ark, not Moses.' } },
            { text: { uk: 'Всіх тварин світу', ru: 'Всех животных мира', en: 'All animals of the world' }, isCorrect: false }
        ]
    },
    {
        id: 2,
        type: 'single',
        question: {
            uk: 'У якого персонажа "одяг" можна купити в продуктовому магазині?',
            ru: 'У какого персонажа "одежду" можно купить в продуктовом магазине?',
            en: 'Which character\'s "clothing" can be bought in a grocery store?'
        },
        hint: {
            uk: 'Вона озирнулася на Содом.',
            ru: 'Она оглянулась на Содом.',
            en: 'She looked back at Sodom.'
        },
        image: '/bible-riddles-quiz/illustrations/q2.png',
        options: [
            { text: { uk: 'Єва', ru: 'Ева', en: 'Eve' }, isCorrect: false },
            { text: { uk: 'Дружина Лота', ru: 'Жена Лота', en: 'Lot\'s wife' }, isCorrect: true, feedback: { uk: 'Так! Вона стала соляним стовпом.', ru: 'Да! Она стала соляным столпом.', en: 'Yes! She became a pillar of salt.' } },
            { text: { uk: 'Сарра', ru: 'Сарра', en: 'Sarah' }, isCorrect: false },
            { text: { uk: 'Ревека', ru: 'Ревекка', en: 'Rebekah' }, isCorrect: false }
        ]
    },
    {
        id: 3,
        type: 'single',
        question: {
            uk: 'Яким був ковчег Ноя під час потопу?',
            ru: 'Каким был ковчег Ноя во время потопа?',
            en: 'How was Noah\'s ark during the flood?'
        },
        hint: {
            uk: 'Це питання з гумором.',
            ru: 'Это вопрос с юмором.',
            en: 'This is a humorous question.'
        },
        image: '/bible-riddles-quiz/illustrations/q3.png',
        options: [
            { text: { uk: 'Дерев’яним', ru: 'Деревянным', en: 'Wooden' }, isCorrect: false },
            { text: { uk: 'Великим', ru: 'Большим', en: 'Big' }, isCorrect: false },
            { text: { uk: 'Мокрим', ru: 'Мокрым', en: 'Wet' }, isCorrect: true },
            { text: { uk: 'Надійним', ru: 'Надежным', en: 'Reliable' }, isCorrect: false }
        ]
    },
    {
        id: 4,
        type: 'single',
        question: {
            uk: 'На якому поверсі в ковчезі були риби?',
            ru: 'На каком этаже в ковчеге были рыбы?',
            en: 'On which floor of the ark were the fish?'
        },
        hint: {
            uk: 'Чи потрібен рибам ковчег?',
            ru: 'Нужен ли рыбам ковчег?',
            en: 'Do fish need an ark?'
        },
        image: '/bible-riddles-quiz/illustrations/q4.png',
        options: [
            { text: { uk: 'На першому', ru: 'На первом', en: 'On the first' }, isCorrect: false },
            { text: { uk: 'На третьому', ru: 'На третьем', en: 'On the third' }, isCorrect: false },
            { text: { uk: 'Їх там не було', ru: 'Их там не было', en: 'They weren\'t there' }, isCorrect: true, feedback: { uk: 'Риби плавали у воді навколо ковчега!', ru: 'Рыбы плавали в воде вокруг ковчега!', en: 'The fish were swimming in the water around the ark!' } },
            { text: { uk: 'В акваріумах', ru: 'В аквариумах', en: 'In aquariums' }, isCorrect: false }
        ]
    },
    {
        id: 5,
        type: 'single',
        question: {
            uk: 'Хто в Біблії був першим хірургом?',
            ru: 'Кто в Библии был первым хирургом?',
            en: 'Who in the Bible was the first surgeon?'
        },
        hint: {
            uk: 'Згадай створення першої жінки.',
            ru: 'Вспомни создание первой женщины.',
            en: 'Remember the creation of the first woman.'
        },
        image: '/bible-riddles-quiz/illustrations/q5.png',
        options: [
            { text: { uk: 'Лука', ru: 'Лука', en: 'Luke' }, isCorrect: false },
            { text: { uk: 'Бог Єгова', ru: 'Бог Иегова', en: 'Jehovah God' }, isCorrect: true, feedback: { uk: 'Так, Він взяв ребро Адама, щоб створити Єву.', ru: 'Да, Он взял ребро Адама, чтобы создать Еву.', en: 'Yes, He took Adam\'s rib to create Eve.' } },
            { text: { uk: 'Мойсей', ru: 'Моисей', en: 'Moses' }, isCorrect: false },
            { text: { uk: 'Адам', ru: 'Адам', en: 'Adam' }, isCorrect: false }
        ]
    },
    {
        id: 6,
        type: 'multi',
        question: {
            uk: 'Які тварини в Біблії розмовляли людською мовою?',
            ru: 'Какие животные в Библии разговаривали человеческим языком?',
            en: 'Which animals in the Bible spoke in human language?'
        },
        hint: {
            uk: 'Один в Едемі, інший — на дорозі.',
            ru: 'Один в Эдеме, другой — на дороге.',
            en: 'One in Eden, the other — on the road.'
        },
        image: '/bible-riddles-quiz/illustrations/q6.png',
        options: [
            { text: { uk: 'Змій', ru: 'Змей', en: 'Serpent' }, isCorrect: true },
            { text: { uk: 'Лев', ru: 'Лев', en: 'Lion' }, isCorrect: false },
            { text: { uk: 'Ослиця', ru: 'Ослица', en: 'Donkey' }, isCorrect: true },
            { text: { uk: 'Голуб', ru: 'Голубь', en: 'Dove' }, isCorrect: false }
        ]
    },
    {
        id: 7,
        type: 'single',
        question: {
            uk: 'Хто жив не грішив, а Ісуса носив?',
            ru: 'Кто жил не грешил, Иисуса носил?',
            en: 'Who lived without sin and carried Jesus?'
        },
        hint: {
            uk: 'Згадай в’їзд Ісуса в Єрусалим.',
            ru: 'Вспомни въезд Иисуса в Иерусалим.',
            en: 'Remember Jesus entering Jerusalem.'
        },
        image: '/bible-riddles-quiz/illustrations/q7.png',
        options: [
            { text: { uk: 'Іван Хреститель', ru: 'Иоанн Креститель', en: 'John the Baptist' }, isCorrect: false },
            { text: { uk: 'Молодий осел', ru: 'Молодой осел', en: 'A young donkey' }, isCorrect: true },
            { text: { uk: 'Йосип', ru: 'Иосиф', en: 'Joseph' }, isCorrect: false },
            { text: { uk: 'Ангел', ru: 'Ангел', en: 'An angel' }, isCorrect: false }
        ]
    },
    {
        id: 8,
        type: 'single',
        question: {
            uk: 'Яка земля побачила світ лише один раз?',
            ru: 'Какая земля увидела свет один раз?',
            en: 'Which land saw the light only once?'
        },
        hint: {
            uk: 'Це сталося під час виходу з Єгипту.',
            ru: 'Это произошло во время исхода из Египта.',
            en: 'This happened during the exodus from Egypt.'
        },
        image: '/bible-riddles-quiz/illustrations/q8.png',
        options: [
            { text: { uk: 'Райський сад', ru: 'Райский сад', en: 'Garden of Eden' }, isCorrect: false },
            { text: { uk: 'Дно Червоного моря', ru: 'Дно Красного моря', en: 'The bottom of the Red Sea' }, isCorrect: true },
            { text: { uk: 'Гора Сінай', ru: 'Гора Синай', en: 'Mount Sinai' }, isCorrect: false },
            { text: { uk: 'Верхівка Арарату', ru: 'Вершина Арарата', en: 'The top of Ararat' }, isCorrect: false }
        ]
    },
    {
        id: 9,
        type: 'single',
        question: {
            uk: 'Скільки апостолів згадується в Біблії?',
            ru: 'Сколько апостолов упоминается в Библии?',
            en: 'How many apostles are mentioned in the Bible?'
        },
        hint: {
            uk: 'Не забувай про Павла та інших.',
            ru: 'Не забывай про Павла и других.',
            en: 'Don\'t forget Paul and others.'
        },
        image: '/bible-riddles-quiz/illustrations/q9.png',
        options: [
            { text: { uk: '12', ru: '12', en: '12' }, isCorrect: false },
            { text: { uk: '13', ru: '13', en: '13' }, isCorrect: false },
            { text: { uk: '16', ru: '16', en: '16' }, isCorrect: true, feedback: { uk: 'Крім 12 обраних Ісусом, були також Маттій, Павло, Варнава та Ісус (як Посланець).', ru: 'Кроме 12 избранных Иисусом, были также Матфий, Павел, Варнава и Иисус (как Посланник).', en: 'Besides the 12 chosen by Jesus, there were also Matthias, Paul, Barnabas, and Jesus (as the Apostle).' } },
            { text: { uk: '70', ru: '70', en: '70' }, isCorrect: false }
        ]
    },
    {
        id: 10,
        type: 'single',
        question: {
            uk: 'Що Бог дарує людині двічі, а втретє вона мусить купувати це сама?',
            ru: 'Что Бог дарит дважды, а третий раз человек это покупает сам?',
            en: 'What does God give a person twice, but the third time they must buy it themselves?'
        },
        hint: {
            uk: 'Це є в кожного в роті.',
            ru: 'Это есть у каждого во рту.',
            en: 'Everyone has this in their mouth.'
        },
        image: '/bible-riddles-quiz/illustrations/q10.png',
        options: [
            { text: { uk: 'Одяг', ru: 'Одежда', en: 'Clothing' }, isCorrect: false },
            { text: { uk: 'Зуби', ru: 'Зубы', en: 'Teeth' }, isCorrect: true },
            { text: { uk: 'Волосся', ru: 'Волосы', en: 'Hair' }, isCorrect: false },
            { text: { uk: 'Зір', ru: 'Зрение', en: 'Eyesight' }, isCorrect: false }
        ]
    },
    {
        id: 11,
        type: 'single',
        question: {
            uk: 'Який самогубця з Біблії буде воскрешений?',
            ru: 'Какой самоубийца из Библии будет воскрешен?',
            en: 'Which suicide from the Bible will be resurrected?'
        },
        hint: {
            uk: 'Він був суддею Ізраїля і мав надзвичайну силу.',
            ru: 'Он был судьей Израиля и обладал необычайной силой.',
            en: 'He was a judge of Israel and had extraordinary strength.'
        },
        image: '/bible-riddles-quiz/illustrations/q11.png',
        options: [
            { text: { uk: 'Саул', ru: 'Саул', en: 'Saul' }, isCorrect: false },
            { text: { uk: 'Юда Іскаріот', ru: 'Иуда Искариот', en: 'Judas Iscariot' }, isCorrect: false },
            { text: { uk: 'Самсон', ru: 'Самсон', en: 'Samson' }, isCorrect: true, feedback: { uk: 'Так! Він пожертвував собою заради перемоги над ворогами Бога і згаданий як приклад віри.', ru: 'Да! Он пожертвовал собой ради победы над врагами Бога и упомянут как пример веры.', en: 'Yes! He sacrificed himself to defeat God\'s enemies and is mentioned as an example of faith.' } },
            { text: { uk: 'Ахітофел', ru: 'Ахитофел', en: 'Ahithophel' }, isCorrect: false }
        ]
    },
    {
        id: 12,
        type: 'single',
        question: {
            uk: 'Хто з біблійних персонажів прокляв день свого народження?',
            ru: 'Кто из библейских персонажей проклял день своего рождения?',
            en: 'Which biblical character cursed the day of their birth?'
        },
        hint: {
            uk: 'Він втратив усе, але залишився вірним Богу.',
            ru: 'Он потерял всё, но остался верен Богу.',
            en: 'He lost everything but remained faithful to God.'
        },
        image: '/bible-riddles-quiz/illustrations/q12.png',
        options: [
            { text: { uk: 'Йов', ru: 'Иов', en: 'Job' }, isCorrect: true },
            { text: { uk: 'Давид', ru: 'Давид', en: 'David' }, isCorrect: false },
            { text: { uk: 'Соломон', ru: 'Соломон', en: 'Solomon' }, isCorrect: false },
            { text: { uk: 'Петро', ru: 'Петр', en: 'Peter' }, isCorrect: false }
        ]
    },
    {
        id: 13,
        type: 'single',
        question: {
            uk: 'Хто зрубав чуже дерево і не запитав господаря, але вчинив правильно?',
            ru: 'Кто срубил чужое дерево и не спросил хозяина, но поступил правильно?',
            en: 'Who cut down someone else\'s tree without asking but did the right thing?'
        },
        hint: {
            uk: 'Це було дерево, присвячене фальшивому богу Ваалу.',
            ru: 'Это было дерево, посвященное ложному богу Ваалу.',
            en: 'It was a tree dedicated to the false god Baal.'
        },
        image: '/bible-riddles-quiz/illustrations/q13.png',
        options: [
            { text: { uk: 'Гідеон', ru: 'Гедеон', en: 'Gideon' }, isCorrect: true },
            { text: { uk: 'Ной', ru: 'Ной', en: 'Noah' }, isCorrect: false },
            { text: { uk: 'Авраам', ru: 'Авраам', en: 'Abraham' }, isCorrect: false },
            { text: { uk: 'Ісус Навин', ru: 'Иисус Навин', en: 'Joshua' }, isCorrect: false }
        ]
    },
    {
        id: 14,
        type: 'single',
        question: {
            uk: 'На якій полиці в ковчезі Ной тримав Біблію?',
            ru: 'На какой полке в ковчеге Ной держал Библию?',
            en: 'On which shelf in the ark did Noah keep the Bible?'
        },
        hint: {
            uk: 'Коли була написана Біблія?',
            ru: 'Когда была написана Библия?',
            en: 'When was the Bible written?'
        },
        image: '/bible-riddles-quiz/illustrations/q14.png',
        options: [
            { text: { uk: 'На верхній', ru: 'На верхней', en: 'On the top shelf' }, isCorrect: false },
            { text: { uk: 'На нижній', ru: 'На нижней', en: 'On the bottom shelf' }, isCorrect: false },
            { text: { uk: 'Ні на якій', ru: 'Ни на какой', en: 'On none' }, isCorrect: true, feedback: { uk: 'Правильно! Тоді Біблії ще не існувало.', ru: 'Верно! Тогда Библии еще не существовало.', en: 'Correct! The Bible didn\'t exist then.' } },
            { text: { uk: 'У каюті', ru: 'В каюте', en: 'In the cabin' }, isCorrect: false }
        ]
    },
    {
        id: 15,
        type: 'single',
        question: {
            uk: 'Хто ще за життя поставив собі пам’ятник і назвав його своїм ім’ям?',
            ru: 'Кто еще при жизни поставил себе памятник и назвал его своим именем?',
            en: 'Who set up a monument to himself and named it after himself while still alive?'
        },
        hint: {
            uk: 'Це був син царя Давида.',
            ru: 'Это был сын царя Давида.',
            en: 'This was a son of King David.'
        },
        image: '/bible-riddles-quiz/illustrations/q15.png',
        options: [
            { text: { uk: 'Соломон', ru: 'Соломон', en: 'Solomon' }, isCorrect: false },
            { text: { uk: 'Авессалом', ru: 'Авессалом', en: 'Absalom' }, isCorrect: true },
            { text: { uk: 'Адонія', ru: 'Адония', en: 'Adonijah' }, isCorrect: false },
            { text: { uk: 'Амнон', ru: 'Амнон', en: 'Amnon' }, isCorrect: false }
        ]
    },
    {
        id: 16,
        type: 'single',
        question: {
            uk: 'Хто в Біблії говорив "Го-го"?',
            ru: 'Кто в Библии говорил "Го-го"?',
            en: 'Who in the Bible said "Go-go" (neighing sound)?'
        },
        hint: {
            uk: 'Подивись книгу Йова.',
            ru: 'Посмотри книгу Иова.',
            en: 'Look at the book of Job.'
        },
        image: '/bible-riddles-quiz/illustrations/q16.png',
        options: [
            { text: { uk: 'Осел', ru: 'Осел', en: 'Donkey' }, isCorrect: false },
            { text: { uk: 'Кінь', ru: 'Конь', en: 'Horse' }, isCorrect: true, feedback: { uk: 'Так, у книзі Йова 39:25 так описується голос бойового коня.', ru: 'Да, в книге Иова 39:25 так описывается голос боевого коня.', en: 'Yes, Job 39:25 describes the war horse\'s sound this way.' } },
            { text: { uk: 'Бегемот', ru: 'Бегемот', en: 'Behemoth' }, isCorrect: false },
            { text: { uk: 'Левіафан', ru: 'Левиафан', en: 'Leviathan' }, isCorrect: false }
        ]
    },
    {
        id: 17,
        type: 'single',
        question: {
            ru: 'Человек сделал вещь, продал ее. Купил тот, кому она не нужна. Тот, кому она нужна, не осознает этого. Что это?',
            uk: 'Людина зробила річ, продала її. Купив той, кому вона не потрібна. Той, кому вона потрібна, не усвідомлює цього. Що це?',
            en: 'A man made a thing, sold it. The buyer doesn\'t need it. The one who needs it doesn\'t know it. What is it?'
        },
        hint: {
            uk: 'Це пов’язано з кінцем земного шляху.',
            ru: 'Это связано с концом земного пути.',
            en: 'It relates to the end of life\'s journey.'
        },
        image: '/bible-riddles-quiz/illustrations/q17.png',
        options: [
            { text: { uk: 'Будинок', ru: 'Дом', en: 'House' }, isCorrect: false },
            { text: { uk: 'Труна (гроб)', ru: 'Гроб', en: 'Coffin' }, isCorrect: true },
            { text: { uk: 'Одяг', ru: 'Одежда', en: 'Clothing' }, isCorrect: false },
            { text: { uk: 'Ліки', ru: 'Лекарства', en: 'Medicine' }, isCorrect: false }
        ]
    },
    {
        id: 18,
        type: 'multi',
        question: {
            uk: 'Якими двома іменами можна назвати все створене у всесвіті?',
            ru: 'Какими двумя именами можно назвать все созданное во вселенной?',
            en: 'What two names can describe everything created in the universe?'
        },
        hint: {
            uk: 'Прочитай самий перший вірш Біблії.',
            ru: 'Прочитай самый первый стих Библии.',
            en: 'Read the very first verse of the Bible.'
        },
        image: '/bible-riddles-quiz/illustrations/q18.png',
        options: [
            { text: { uk: 'Небо', ru: 'Небо', en: 'Heaven' }, isCorrect: true },
            { text: { uk: 'Земля', ru: 'Земля', en: 'Earth' }, isCorrect: true },
            { text: { uk: 'Сонце', ru: 'Солнце', en: 'Sun' }, isCorrect: false },
            { text: { uk: 'Людина', ru: 'Человек', en: 'Man' }, isCorrect: false }
        ]
    },
    {
        id: 19,
        type: 'single',
        question: {
            uk: 'Хто помер між небом та землею?',
            ru: 'Кто умер между небом и землей?',
            en: 'Who died between heaven and earth?'
        },
        hint: {
            uk: 'Він заплутався волоссям у гілках дерева.',
            ru: 'Он запутался волосами в ветвях дерева.',
            en: 'He got caught by his hair in the branches of a tree.'
        },
        image: '/bible-riddles-quiz/illustrations/q19.png',
        options: [
            { text: { uk: 'Ілля', ru: 'Илья', en: 'Elijah' }, isCorrect: false },
            { text: { uk: 'Авессалом', ru: 'Авессалом', en: 'Absalom' }, isCorrect: true },
            { text: { uk: 'Ісая', ru: 'Исаия', en: 'Isaiah' }, isCorrect: false },
            { text: { uk: 'Степан', ru: 'Стефан', en: 'Stephen' }, isCorrect: false }
        ]
    },
    {
        id: 20,
        type: 'single',
        question: {
            uk: 'Хто один раз народився і два рази помер?',
            ru: 'Кто один раз родился и два раза умер?',
            en: 'Who was born once and died twice?'
        },
        hint: {
            uk: 'Згадай друзів Ісуса.',
            ru: 'Вспомни друзей Иисуса.',
            en: 'Remember Jesus\'s friends.'
        },
        image: '/bible-riddles-quiz/illustrations/q20.png',
        options: [
            { text: { uk: 'Лазар', ru: 'Лазарь', en: 'Lazarus' }, isCorrect: true, feedback: { uk: 'Так! Ісус воскресив його, але згодом Лазар знову помер від старості.', ru: 'Да! Иисус воскресил его, но позже Лазарь снова умер от старости.', en: 'Yes! Jesus resurrected him, but later Lazarus died again of old age.' } },
            { text: { uk: 'Марія', ru: 'Мария', en: 'Mary' }, isCorrect: false },
            { text: { uk: 'Іван', ru: 'Иоанн', en: 'John' }, isCorrect: false },
            { text: { uk: 'Яків', ru: 'Иаков', en: 'James' }, isCorrect: false }
        ]
    },
    {
        id: 21,
        type: 'single',
        question: {
            uk: 'Через яку частину тіла тварини загинула тисяча чоловік?',
            ru: 'Через какую часть тела животного погибла тысяча человек?',
            en: 'Through which part of an animal\'s body did a thousand people die?'
        },
        hint: {
            uk: 'Самсон використав це як зброю.',
            ru: 'Самсон использовал это как оружие.',
            en: 'Samson used this as a weapon.'
        },
        image: '/bible-riddles-quiz/illustrations/q21.png',
        options: [
            { text: { uk: 'Ослина щелепа', ru: 'Ослиная челюсть', en: 'Donkey\'s jawbone' }, isCorrect: true },
            { text: { uk: 'Левова лапа', ru: 'Львиная лапа', en: 'Lion\'s paw' }, isCorrect: false },
            { text: { uk: 'Роги бика', ru: 'Рога быка', en: 'Bull\'s horns' }, isCorrect: false },
            { text: { uk: 'Крила орла', ru: 'Крылья орла', en: 'Eagle\'s wings' }, isCorrect: false }
        ]
    },
    {
        id: 22,
        type: 'single',
        question: {
            uk: 'Яке місто було відбудоване на життях первістка та наймолодшого сина?',
            ru: 'Какой город был отстроен на жизнях первенца и младшего сына?',
            en: 'Which city was rebuilt at the cost of the lives of the firstborn and the youngest son?'
        },
        hint: {
            uk: 'Це було місто, стіни якого колись впали.',
            ru: 'Это был город, стены которого когда-то пали.',
            en: 'This was the city whose walls once fell.'
        },
        image: '/bible-riddles-quiz/illustrations/q22.png',
        options: [
            { text: { uk: 'Вавилон', ru: 'Вавилон', en: 'Babylon' }, isCorrect: false },
            { text: { uk: 'Єрихон', ru: 'Иерихон', en: 'Jericho' }, isCorrect: true, feedback: { uk: 'Так, це було прокляття Ісуса Навина, яке здійснилося через сотні років.', ru: 'Да, это было проклятие Иисуса Навина, которое исполнилось спустя сотни лет.', en: 'Yes, it was Joshua\'s curse that was fulfilled hundreds of years later.' } },
            { text: { uk: 'Ніневія', ru: 'Ниневия', en: 'Nineveh' }, isCorrect: false },
            { text: { uk: 'Содом', ru: 'Содом', en: 'Sodom' }, isCorrect: false }
        ]
    },
    {
        id: 23,
        type: 'single',
        question: {
            uk: 'Яке слово зустрічається в Біблії лише один раз і позначає подію, що станеться один раз в історії?',
            ru: 'Какое слово встречается в Библии один раз и обозначает событие, которое произойдет один раз в истории?',
            en: 'Which word appears only once in the Bible and refers to an event that will happen only once in history?'
        },
        hint: {
            uk: 'Шукай у книзі Об’явлення.',
            ru: 'Ищи в книге Откровение.',
            en: 'Look in the book of Revelation.'
        },
        image: '/bible-riddles-quiz/illustrations/q23.png',
        options: [
            { text: { uk: 'Амінь', ru: 'Аминь', en: 'Amen' }, isCorrect: false },
            { text: { uk: 'Армагеддон', ru: 'Армагеддон', en: 'Armageddon' }, isCorrect: true },
            { text: { uk: 'Рай', ru: 'Рай', en: 'Paradise' }, isCorrect: false },
            { text: { uk: 'Алілуя', ru: 'Аллилуйя', en: 'Hallelujah' }, isCorrect: false }
        ]
    },
    {
        id: 24,
        type: 'single',
        question: {
            uk: 'Хто за великий гріх у минулому отримав велике благословення через свою віру?',
            ru: 'Кто за большой грех в прошлом получил большое благословение благодаря своей вере?',
            en: 'Who, despite a great sin in the past, received a great blessing because of their faith?'
        },
        hint: {
            uk: 'Вона жила в Єрихоні і сховала соглядатаїв.',
            ru: 'Она жила в Иерихоне и спрятала соглядатаев.',
            en: 'She lived in Jericho and hid the spies.'
        },
        image: '/bible-riddles-quiz/illustrations/q24.png',
        options: [
            { text: { uk: 'Рахав', ru: 'Рахав', en: 'Rahab' }, isCorrect: true, feedback: { uk: 'Вірно! Вона стала частиною родоводу Ісуса.', ru: 'Верно! Она стала частью родословной Иисуса.', en: 'Correct! She became part of Jesus\'s lineage.' } },
            { text: { uk: 'Єзавель', ru: 'Иезавель', en: 'Jezebel' }, isCorrect: false },
            { text: { uk: 'Даліла', ru: 'Далида', en: 'Delilah' }, isCorrect: false },
            { text: { uk: 'Сапфіра', ru: 'Сапфира', en: 'Sapphira' }, isCorrect: false }
        ]
    },
    {
        id: 25,
        type: 'single',
        question: {
            uk: 'Чим Авель убив Каїна?',
            ru: 'Чем Авель убил Каина?',
            en: 'What did Abel use to kill Cain?'
        },
        hint: {
            uk: 'Це питання на уважність.',
            ru: 'Это вопрос на внимательность.',
            en: 'This is a test of your attentiveness.'
        },
        image: '/bible-riddles-quiz/illustrations/q25.png',
        options: [
            { text: { uk: 'Каменем', ru: 'Камнем', en: 'A stone' }, isCorrect: false },
            { text: { uk: 'Нічим', ru: 'Ничем', en: 'Nothing' }, isCorrect: true, feedback: { uk: 'Уважно! Це Каїн убив Авеля, а не навпаки.', ru: 'Внимательно! Это Каин убил Авеля, а не наоборот.', en: 'Careful! Cain killed Abel, not the other way around.' } },
            { text: { uk: 'Палицею', ru: 'Палкой', en: 'A stick' }, isCorrect: false },
            { text: { uk: 'Ножем', ru: 'Ножом', en: 'A knife' }, isCorrect: false }
        ]
    },
    {
        id: 26,
        type: 'single',
        question: {
            uk: 'Хто після появи на світ став доглядати за своєю "матір’ю"?',
            ru: 'Кто после появления на свет стал ухаживать за своей "матерью"?',
            en: 'Who, after coming into existence, began to care for their "mother"?'
        },
        hint: {
            uk: 'Його "маторі" була земля.',
            ru: 'Его "матерью" была земля.',
            en: 'His "mother" was the earth.'
        },
        image: '/bible-riddles-quiz/illustrations/q26.png',
        options: [
            { text: { uk: 'Адам', ru: 'Адам', en: 'Adam' }, isCorrect: true, feedback: { uk: 'Так! Він був створений з пороху земного і доглядав за землею Едему.', ru: 'Да! Он был создан из праха земного и ухаживал за землей Эдема.', en: 'Yes! He was created from the dust of the ground and cared for the land of Eden.' } },
            { text: { uk: 'Ной', ru: 'Ной', en: 'Noah' }, isCorrect: false },
            { text: { uk: 'Каїн', ru: 'Каин', en: 'Cain' }, isCorrect: false },
            { text: { uk: 'Ісус', ru: 'Иисус', en: 'Jesus' }, isCorrect: false }
        ]
    },
    {
        id: 27,
        type: 'single',
        question: {
            uk: 'Яка пташка змусила плакати "камінь"?',
            ru: 'Какая птица заставила плакать "камень"?',
            en: 'Which bird made a "stone" cry?'
        },
        hint: {
            uk: 'Згадай ім’я одного з апостолів.',
            ru: 'Вспомни имя одного из апостолов.',
            en: 'Remember the name of one of the apostles.'
        },
        image: '/bible-riddles-quiz/illustrations/q27.png',
        options: [
            { text: { uk: 'Півень', ru: 'Петух', en: 'Rooster' }, isCorrect: true, feedback: { uk: 'Так! Коли півень заспівав, Петро (Кіфа — камінь) гірко заплакав.', ru: 'Да! Когда петух пропел, Петр (Кифа — камень) горько заплакал.', en: 'Yes! When the rooster crowed, Peter (Cephas — stone) wept bitterly.' } },
            { text: { uk: 'Голуб', ru: 'Голубь', en: 'Dove' }, isCorrect: false },
            { text: { uk: 'Ворон', ru: 'Ворон', en: 'Raven' }, isCorrect: false },
            { text: { uk: 'Орел', ru: 'Орел', en: 'Eagle' }, isCorrect: false }
        ]
    },
    {
        id: 28,
        type: 'finale',
        text: {
            uk: 'Ти пройшов усі загадки! Твій розум гострий, а знання Біблії вражають. Продовжуй досліджувати Слово Бога!',
            ru: 'Ты прошел все загадки! Твой ум остр, а знания Библии впечатляют. Продолжай исследовать Слово Бога!',
            en: 'You passed all the riddles! Your mind is sharp, and your knowledge of the Bible is impressive. Keep exploring God\'s Word!'
        },
        image: '/bible-riddles-quiz/illustrations/finale.png'
    }
];

export const totalQuestions = quizData.filter(q => q.type === 'single' || q.type === 'multi').length;
