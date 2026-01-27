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
        feedback?: LocalizedString;
    }[];
    afterReveal?: LocalizedString;
    part?: 'josiah' | 'jeremiah';
    bgImage?: string;
    image?: string;
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
        image: '/bible-quiz-kids/illustrations/intro.png',
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
        image: '/bible-quiz-kids/illustrations/q1.png',
        options: [
            {
                text: { uk: 'Пророк', ru: 'Пророк', en: 'Prophet' },
                isCorrect: false,
                feedback: {
                    uk: 'Майже! Пророки теж були крутими, але Йосія мав іншу роботу.',
                    ru: 'Почти! Пророки тоже были крутыми, но у Иосии была другая работа.',
                    en: 'Close! Prophets were cool too, but Josiah had a different job.'
                }
            },
            {
                text: { uk: 'Первосвященник', ru: 'Первосвященник', en: 'High Priest' },
                isCorrect: false,
                feedback: {
                    uk: 'Цікава думка! Він багато часу проводив у храмі, але не був священиком.',
                    ru: 'Интересная мысль! Он много времени проводил в храме, но не был священником.',
                    en: 'Interesting thought! He spent a lot of time in the temple, but he wasn\'t a priest.'
                }
            },
            {
                text: { uk: 'Цар Юди', ru: 'Царь Иуды', en: 'King of Judah' },
                isCorrect: true,
                feedback: {
                    uk: 'Правильно! Він став одним із наймолодших і найвідданіших царів.',
                    ru: 'Правильно! Он стал одним из самых молодых и преданных царей.',
                    en: 'Correct! He became one of the youngest and most devoted kings.'
                }
            },
            {
                text: { uk: 'Співак у храмі', ru: 'Певец в храме', en: 'Temple singer' },
                isCorrect: false,
                feedback: {
                    uk: 'Мабуть, він гарно співав псалми, але це не було його головною справою.',
                    ru: 'Наверное, он красиво пел псалмы, но это не было его главным делом.',
                    en: 'He probably sang psalms beautifully, but that wasn\'t his main job.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q2.png',
        options: [
            {
                text: { uk: '8 років', ru: '8 лет', en: '8 years old' },
                isCorrect: true,
                feedback: {
                    uk: 'Так! Уяви собі — лише вісім років, а вже на престолі!',
                    ru: 'Да! Представь себе — всего восемь лет, а уже на престоле!',
                    en: 'Yes! Imagine — only eight years old, and already on the throne!'
                }
            },
            {
                text: { uk: '16 років', ru: '16 лет', en: '16 years old' },
                isCorrect: false,
                feedback: {
                    uk: 'В шістнадцять він вже робив дивовижні речі, але почав раніше.',
                    ru: 'В шестнадцать он уже делал удивительные вещи, но начал раньше.',
                    en: 'At sixteen he was already doing amazing things, but he started earlier.'
                }
            },
            {
                text: { uk: '20 років', ru: '20 лет', en: '20 years old' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, у вісім років він вже був царем. У двадцять у нього вже був великий досвід!',
                    ru: 'Нет, в восемь лет он уже был царем. В двадцать у него уже был большой опыт!',
                    en: 'No, at eight he was already king. By twenty he had a lot of experience!'
                }
            },
            {
                text: { uk: '26 років', ru: '26 лет', en: '26 years old' },
                isCorrect: false,
                feedback: {
                    uk: 'У цьому віці він вже ремонтував храм. Був дуже активним царем!',
                    ru: 'В этом возрасте он уже ремонтировал храм. Был очень активным царем!',
                    en: 'At this age, he was already repairing the temple. He was a very active king!'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q3.png',
        options: [
            {
                text: { uk: 'Став будувати дім', ru: 'Стал строить дом', en: 'Started building a house' },
                isCorrect: false,
                feedback: {
                    uk: 'Дім — це добре, але Йосія дбав про щось набагато важливіше.',
                    ru: 'Дом — это хорошо, но Иосия заботился о чем-то гораздо более важном.',
                    en: 'A house is good, but Josiah cared about something much more important.'
                }
            },
            {
                text: { uk: 'Навчатись правильно поклонятися Єгові', ru: 'Учиться правильно поклоняться Иегове', en: 'Learning to worship Jehovah correctly' },
                isCorrect: true,
                feedback: {
                    uk: 'Точно! Поки інші займалися розвагами, він шукав Єгову.',
                    ru: 'Точно! Пока другие развлекались, он искал Иегову.',
                    en: 'Exactly! While others were busy with entertainment, he sought Jehovah.'
                }
            },
            {
                text: { uk: 'Почав займатися спортом', ru: 'Начал заниматься спортом', en: 'Started doing sports' },
                isCorrect: false,
                feedback: {
                    uk: 'Спорт — це круто, але біблійне навчання дає більше сил серцю!',
                    ru: 'Спорт — это круто, но библейское обучение дает больше сил сердцу!',
                    en: 'Sports are cool, but Bible study gives more strength to the heart!'
                }
            },
            {
                text: { uk: 'Поїхав в Чехію на заробітки', ru: 'Уехал на заработки', en: 'Went abroad to work' },
                isCorrect: false,
                feedback: {
                    uk: 'Хм, цікавий поворот! Але він залишився, щоб допомогти своєму народу.',
                    ru: 'Хм, интересный поворот! Но он остался, чтобы помочь своему народу.',
                    en: 'Hmm, interesting twist! But he stayed to help his people.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q4.png',
        options: [
            {
                text: { uk: 'Знищувати ідолів та жертовники', ru: 'Уничтожать идолов и жертвенники', en: 'Destroying idols and altars' },
                isCorrect: true,
                feedback: {
                    uk: 'Саме так! Він діяв дуже сміливо, очищуючи країну.',
                    ru: 'Именно так! Он действовал очень смело, очищая страну.',
                    en: 'That\'s right! He acted very boldly, cleansing the land.'
                }
            },
            {
                text: { uk: 'Став пророком', ru: 'Стал пророком', en: 'Became a prophet' },
                isCorrect: false,
                feedback: {
                    uk: 'Він слухав пророків, але сам залишався царем, який діє.',
                    ru: 'Он слушал пророков, но сам оставался царем, который действует.',
                    en: 'He listened to prophets, but remained a king who takes action.'
                }
            },
            {
                text: { uk: 'Писати псалми', ru: 'Писать псалмы', en: 'Writing psalms' },
                isCorrect: false,
                feedback: {
                    uk: 'Можливо, він і мав талант до віршів, але в цей час він був зайнятий очищенням Юди.',
                    ru: 'Возможно, у него и был талант к стихам, но в это время он был занят очищением Иуды.',
                    en: 'He might have had a talent for poetry, but at this time he was busy cleansing Judah.'
                }
            },
            {
                text: { uk: 'Став піонером', ru: 'Стал пионером', en: 'Became a pioneer' },
                isCorrect: false,
                feedback: {
                    uk: 'Він був би класним піонером! Але тоді такий вид служіння ще не вигадали ;)',
                    ru: 'Он был бы классным пионером! Но тогда такой вид служения еще не придумали ;)',
                    en: 'He would have been a great pioneer! but that form of service hadn\'t been invented yet ;)'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q5.png',
        options: [
            {
                text: { uk: 'Бізнес', ru: 'Бизнес', en: 'Business' },
                isCorrect: false,
                feedback: {
                    uk: 'Найкращим його "бізнесом" було відновлення дому Бога!',
                    ru: 'Лучшим его "бизнесом" было восстановление дома Бога!',
                    en: 'His best "business" was restoring God\'s house!'
                }
            },
            {
                text: { uk: 'Відновлення храму Єгови', ru: 'Восстановление храма Иеговы', en: 'Restoring Jehovah\'s temple' },
                isCorrect: true,
                feedback: {
                    uk: 'Вірно! Храм потребував ремонту, і Йосія взявся до справи.',
                    ru: 'Верно! Храм нуждался в ремонте, и Иосия взялся за дело.',
                    en: 'True! The temple needed repairs, and Josiah got to work.'
                }
            },
            {
                text: { uk: 'Створив сім\'ю', ru: 'Создал семью', en: 'Started a family' },
                isCorrect: false,
                feedback: {
                    uk: 'Сім\'я — це важливо, але в центрі уваги цієї історії — відновлення храму.',
                    ru: 'Семья — это важно, но в центре внимания этой истории — восстановление храма.',
                    en: 'Family is important, but the focus of this story is the restoration of the temple.'
                }
            },
            {
                text: { uk: 'Нову війну', ru: 'Новую войну', en: 'A new war' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, він хотів миру з Богом та Його благословення.',
                    ru: 'Нет, он хотел мира с Богом и Его благословения.',
                    en: 'No, he wanted peace with God and His blessing.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q6.png',
        options: [
            {
                text: { uk: 'Виявляли зневагу', ru: 'Проявляли неуважение', en: 'Showed disrespect' },
                isCorrect: true,
                feedback: {
                    uk: 'Так, вони забули про Єгову та Його правила.',
                    ru: 'Да, они забыли об Иегове и Его правилах.',
                    en: 'Yes, they forgot about Jehovah and His rules.'
                }
            },
            {
                text: { uk: 'Зовсім не служили', ru: 'Совсем не служили', en: 'Did not serve at all' },
                isCorrect: true,
                feedback: {
                    uk: 'На жаль, це правда. Вони служили вигаданим божествам.',
                    ru: 'К сожалению, это правда. Они служили вымышленным божествам.',
                    en: 'Expansion: Unfortunately, that\'s true. They served made-up gods.'
                }
            },
            {
                text: { uk: 'Були ревні та духовні', ru: 'Были ревностными и духовными', en: 'Were zealous and spiritual' },
                isCorrect: false,
                feedback: {
                    uk: 'Хотілося б, щоб так і було, але тоді все було інакше.',
                    ru: 'Хотелось бы, чтобы так и было, но тогда все было иначе.',
                    en: 'We wish it were so, but back then things were different.'
                }
            },
            {
                text: { uk: 'Гралися в роблокс', ru: 'Играли в роблокс', en: 'Played Roblox' },
                isCorrect: false,
                feedback: {
                    uk: 'Тоді гаджети ще не вигадали, тому роблоксу точно не було!',
                    ru: 'Тогда гаджеты еще не придумали, поэтому роблокса точно не было!',
                    en: 'Gadgets hadn\'t been invented yet, so there was definitely no Roblox!'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q7.png',
        options: [
            {
                text: { uk: 'Біблію', ru: 'Библию', en: 'The Bible' },
                isCorrect: false,
                feedback: {
                    uk: 'Майже! Біблії цілком тоді ще не було, але знайшли дещо дуже важливе.',
                    ru: 'Почти! Библии целиком тогда еще не было, но нашли кое-что очень важное.',
                    en: 'Almost! The whole Bible didn\'t exist yet, but they found something very important.'
                }
            },
            {
                text: { uk: 'Сувій Закону', ru: 'Свиток Закона', en: 'The Book of the Law' },
                isCorrect: true,
                feedback: {
                    uk: 'Так! Це був справжній скарб — слово Боже.',
                    ru: 'Да! Это было настоящее сокровище — слово Божье.',
                    en: 'Yes! It was a real treasure — the Word of God.'
                }
            },
            {
                text: { uk: 'Алмазну кірку', ru: 'Алмазную кирку', en: 'A diamond pickaxe' },
                isCorrect: false,
                feedback: {
                    uk: 'Ти грав у Майнкрафт? ;) У храмі шукали духовні скарби.',
                    ru: 'Ты переиграл в Майнкрафт? ;) В храме искали духовные сокровища.',
                    en: 'Too much Minecraft? ;) They were looking for spiritual treasures in the temple.'
                }
            },
            {
                text: { uk: '10 заповідей', ru: '10 заповедей', en: 'The 10 Commandments' },
                isCorrect: false,
                feedback: {
                    uk: 'Вони були частиною Закону, але знайшли весь сувій цілком.',
                    ru: 'Они были частью Закона, но нашли весь свиток целиком.',
                    en: 'They were part of the Law, but they found the whole scroll.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q8.png',
        options: [
            {
                text: { uk: 'Розірвав на собі одяг', ru: 'Разорвал на себе одежду', en: 'Ripped his clothes' },
                isCorrect: true,
                feedback: {
                    uk: 'Так він показав, як йому сумно через помилки народу.',
                    ru: 'Так он показал, как ему грустно из-за ошибок народа.',
                    en: 'This is how he showed his sorrow over the people\'s mistakes.'
                }
            },
            {
                text: { uk: 'Пішов до храму', ru: 'Пошел в храм', en: 'Went to the temple' },
                isCorrect: true,
                feedback: {
                    uk: 'Вірно, він хотів поговорити з Богом та дізнатися, що робити.',
                    ru: 'Верно, он хотел поговорить с Богом и узнать, что делать.',
                    en: 'True, he wanted to talk to God and find out what to do.'
                }
            },
            {
                text: { uk: 'Зібрав народ Юди', ru: 'Собрал народ Иуды', en: 'Gathered the people of Judah' },
                isCorrect: true,
                feedback: {
                    uk: 'Так! Він хотів, щоб кожен почув слова Єгови.',
                    ru: 'Да! Он хотел, чтобы каждый услышал слова Иеговы.',
                    en: 'Yes! He wanted everyone to hear Jehovah\'s words.'
                }
            },
            {
                text: { uk: 'Влаштував свято', ru: 'Устроил праздник', en: 'Arranged a feast' },
                isCorrect: true,
                feedback: {
                    uk: 'Так, пізніше вони святкували Пасху з великою радістю!',
                    ru: 'Да, позже они праздновали Пасху с огромной радостью!',
                    en: 'Yes, later they celebrated Passover with great joy!'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q9.png',
        options: [
            {
                text: { uk: 'Слухатися Його', ru: 'Слушаться Его', en: 'To obey Him' },
                isCorrect: true,
                feedback: {
                    uk: 'Чудова обіцянка! Це найважливіше для Бога.',
                    ru: 'Отличное обещание! Это самое важное для Бога.',
                    en: 'A wonderful promise! This is most important to God.'
                }
            },
            {
                text: { uk: 'Святкувати Пасху кожного року', ru: 'Праздновать Пасху каждый год', en: 'To celebrate Passover every year' },
                isCorrect: true,
                feedback: {
                    uk: 'Так, це було важливе нагадування про порятунок.',
                    ru: 'Да, это было важное напоминание о спасении.',
                    en: 'Yes, it was an important reminder of salvation.'
                }
            },
            {
                text: { uk: 'Нічого', ru: 'Ничего', en: 'Nothing' },
                isCorrect: false,
                feedback: {
                    uk: 'Вони були настільки зворушені, що пообіцяли багато гарних справ!',
                    ru: 'Они были настолько тронуты, что пообещали много добрых дел!',
                    en: 'They were so moved that they promised many good things!'
                }
            },
            {
                text: { uk: 'Не працювати у суботу', ru: 'Не работать в субботу', en: 'Not to work on the Sabbath' },
                isCorrect: false,
                feedback: {
                    uk: 'Це було частиною Закону, але вони обіцяли ширше — цілковитий послух.',
                    ru: 'Это было частью Закона, но они обещали шире — полное послушание.',
                    en: 'This was part of the Law, but they promised more — full obedience.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q10.png',
        options: [
            {
                text: { uk: 'Те, що Йосія читав Закон', ru: 'To, что Иосия читал Закон', en: 'Fact that Josiah read the Law' },
                isCorrect: true,
                feedback: {
                    uk: 'Читання — це фундамент пізнання Єгови.',
                    ru: 'Чтение — это фундамент познания Иеговы.',
                    en: 'Reading is the foundation for getting to know Jehovah.'
                }
            },
            {
                text: { uk: 'Розмірковував над Законом', ru: 'Размышлял над Законом', en: 'He meditated on the Law' },
                isCorrect: true,
                feedback: {
                    uk: 'Роздуми допомагають закону потрапити глибоко в серце.',
                    ru: 'Размышление помогает закону попасть глубоко в сердце.',
                    en: 'Meditation helps the law get deep into your heart.'
                }
            },
            {
                text: { uk: 'Бо всі навколо так робили', ru: 'Потому что все вокруг так делали', en: 'Because everyone else did' },
                isCorrect: false,
                feedback: {
                    uk: 'Навпаки! Йосія робив це навіть тоді, коли інші не хотіли.',
                    ru: 'Наоборот! Иосия делал это даже тогда, когда другие не хотели.',
                    en: 'On the contrary! Josiah did it even when others didn\'t want to.'
                }
            },
            {
                text: { uk: 'Бо була нагорода', ru: 'Потому что была награда', en: 'Because there was a reward' },
                isCorrect: false,
                feedback: {
                    uk: 'Його нагородою була дружба з Богом, а не якісь цукерки чи медалі.',
                    ru: 'Его наградой была дружба с Богом, а не какие-то конфеты или медали.',
                    en: 'His reward was friendship with God, not some candy or medals.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q11.png',
        options: [
            {
                text: { uk: 'Був дуже сердитий', ru: 'Был очень сердит', en: 'He was very angry' },
                isCorrect: false,
                feedback: {
                    uk: 'Єгова любив Йосію за його старанне серце!',
                    ru: 'Иегова любил Иосию за его старательное сердце!',
                    en: 'Jehovah loved Josiah for his diligent heart!'
                }
            },
            {
                text: { uk: 'Покарав його', ru: 'Наказал его', en: 'He punished him' },
                isCorrect: false,
                feedback: {
                    uk: 'Єгова навпаки захистив Йосію від лиха!',
                    ru: 'Иегова наоборот защитил Иосию от бед!',
                    en: 'Actually, Jehovah protected Josiah from calamity instead!'
                }
            },
            {
                text: { uk: 'Був задоволений його смиренням', ru: 'Был доволен его смирением', en: 'He was pleased with his humility' },
                isCorrect: true,
                feedback: {
                    uk: 'Вірно! Смирення — це ключ до Божого серця.',
                    ru: 'Верно! Смирение — это ключ к сердцу Бога.',
                    en: 'Correct! Humility is the key to God\'s heart.'
                }
            },
            {
                text: { uk: 'Не знав його', ru: 'Не знал его', en: 'He did not know him' },
                isCorrect: false,
                feedback: {
                    uk: 'Єгова знає кожного, хто Його шукає, а Йосію Він дуже цінував.',
                    ru: 'Иегова знает каждого, кто Его ищет, а Иосию Он очень ценил.',
                    en: 'Jehovah knows everyone who seeks Him, and He valued Josiah deeply.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q12.png',
        afterReveal: {
            uk: 'Насправді всі ці думки правильні',
            ru: 'На самом деле все эти мысли верны',
            en: 'Actually, all of these points are correct'
        },
        options: [
            {
                text: { uk: 'Служити Єгові можна з дитинства', ru: 'Служить Иегове можно с детства', en: 'You can serve Jehovah from childhood' },
                isCorrect: true,
                feedback: {
                    uk: 'Так, як Йосія з восьми років!',
                    ru: 'Да, как Иосия с восьми лет!',
                    en: 'Yes, just like Josiah from eight years old!'
                }
            },
            {
                text: { uk: 'Дізнавшись правду, відразу почати діяти', ru: 'Узнав истину, сразу начать действовать', en: 'Act immediately after learning the truth' },
                isCorrect: true,
                feedback: {
                    uk: 'Це дуже важливо — не відкладати на завтра.',
                    ru: 'Это очень важно — не откладывать на завтра.',
                    en: 'It\'s very important not to procrastinate.'
                }
            },
            {
                text: { uk: 'Служити Єгові незалежно від оточуючих', ru: 'Служить Иегове независимо от окружающих', en: 'Serve Jehovah regardless of others' },
                isCorrect: true,
                feedback: {
                    uk: 'Його родина не завжди була гарним прикладом, але він залишився вірним.',
                    ru: 'Его семья не всегда была хорошим примером, но он остался верен.',
                    en: 'His family wasn\'t always a good example, but he remained faithful.'
                }
            },
            {
                text: { uk: 'Єгова цінує смирення і слухняність', ru: 'Иегова ценит смирение и послушание', en: 'Jehovah values humility and obedience' },
                isCorrect: true,
                feedback: {
                    uk: 'Це якості, які Єгова помічає відразу.',
                    ru: 'Это качества, которые Иегова замечает сразу.',
                    en: 'These are qualities Jehovah notices right away.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/t13.png',
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
        image: '/bible-quiz-kids/illustrations/t14.png',
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
        image: '/bible-quiz-kids/illustrations/q15.png',
        options: [
            {
                text: { uk: 'Цар Юди', ru: 'Царь Иуды', en: 'King of Judah' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, Єремія розмовляв з царями, але мав зовсім іншу роль.',
                    ru: 'Нет, Иеремия разговаривал с царями, но у него была совсем другая роль.',
                    en: 'No, Jeremiah spoke with kings, but had a completely different role.'
                }
            },
            {
                text: { uk: 'Пророк Єгови', ru: 'Пророк Иеговы', en: 'Jehovah\'s prophet' },
                isCorrect: true,
                feedback: {
                    uk: 'Так! Він передавав важливі звістки від самого Бога.',
                    ru: 'Да! Он передавал важные вести от самого Бога.',
                    en: 'Yes! He delivered important messages from God himself.'
                }
            },
            {
                text: { uk: 'Священик', ru: 'Священник', en: 'Priest' },
                isCorrect: false,
                feedback: {
                    uk: 'Він походив із родини священиків, але Єгова обрав його для іншої місії.',
                    ru: 'Он происходил из семьи священников, но Иегова выбрал его для другой миссии.',
                    en: 'He came from a priestly family, but Jehovah chose him for a different mission.'
                }
            },
            {
                text: { uk: 'Тіктокер', ru: 'Тиктокер', en: 'TikToker' },
                isCorrect: false,
                feedback: {
                    uk: 'Уяви ці "стріми" з Єрусалима! ;) Але тоді були лише сувої та усне слово.',
                    ru: 'Представь эти "стримы" из Иерусалима! ;) Но тогда были только свитки и устное слово.',
                    en: 'Imagine those "streams" from Jerusalem! ;) But back then there were only scrolls and the spoken word.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q16.png',
        options: [
            {
                text: { uk: 'Єгиптян', ru: 'Египтянам', en: 'Egyptians' },
                isCorrect: false,
                feedback: {
                    uk: 'Туди він потрапив пізніше, але починав він точно не з них.',
                    ru: 'Туда он попал позже, но начинал он точно не с них.',
                    en: 'He ended up there later, but he certainly didn\'t start with them.'
                }
            },
            {
                text: { uk: 'Самарян', ru: 'Самарянам', en: 'Samaritans' },
                isCorrect: false,
                feedback: {
                    uk: 'Майже поруч! Його звістка була спрямована до іншого народу.',
                    ru: 'Почти рядом! Его весть была направлена к другому народу.',
                    en: 'Close! His message was directed to a different people.'
                }
            },
            {
                text: { uk: 'Юдеїв', ru: 'Иудеям', en: 'Jews' },
                isCorrect: true,
                feedback: {
                    uk: 'Правильно! Він проповідував у Юді та Єрусалимі багато років.',
                    ru: 'Правильно! Он проповедовал в Иудее и Иерусалиме много лет.',
                    en: 'Correct! He preached in Judah and Jerusalem for many years.'
                }
            },
            {
                text: { uk: 'Чехів', ru: 'Чехам', en: 'Czechs' },
                isCorrect: false,
                feedback: {
                    uk: 'Там зараз гарно, але Єремія працював набагато ближче до дому.',
                    ru: 'Там сейчас хорошо, но Иеремия работал гораздо ближе к дому.',
                    en: 'It\'s nice there now, but Jeremiah worked much closer to home.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q17.png',
        options: [
            {
                text: { uk: 'Бо його хотіли вбити', ru: 'Потому что его хотели убить', en: 'Because they wanted to kill him' },
                isCorrect: false,
                feedback: {
                    uk: 'Це трапилося пізніше, а спочатку він переживав через зовсім інше.',
                    ru: 'Это случилось позже, а сначала он переживал из-за совсем другого.',
                    en: 'That happened later; initially he was worried about something else entirely.'
                }
            },
            {
                text: { uk: 'Бо не знав Закону', ru: 'Потому что не знал Закона', en: 'Because he didn\'t know the Law' },
                isCorrect: false,
                feedback: {
                    uk: 'Як син священика він добре знав Закон, справа була в його віці.',
                    ru: 'Как сын священника он хорошо знал Закон, дело было в его возрасте.',
                    en: 'As a priest\'s son he knew the Law well; the issue was his age.'
                }
            },
            {
                text: { uk: 'Бо був ще молодий і не вмів говорити', ru: 'Потому что был еще молод и не умел говорить', en: 'Because he was young and couldn\'t speak well' },
                isCorrect: true,
                feedback: {
                    uk: 'Так, він почувався так само, як ти, коли треба відповідати на уроці!',
                    ru: 'Да, он чувствовал себя так же, как ты, когда нужно отвечать на уроке!',
                    en: 'Yes, he felt just like you might when you have to answer in class!'
                }
            },
            {
                text: { uk: 'Бо боявся однокласників', ru: 'Потому что боялся одноклассников', en: 'Because he feared classmates' },
                isCorrect: false,
                feedback: {
                    uk: 'Боятися людей — це нормально, але Єремія переживав через велику відповідальність.',
                    ru: 'Бояться людей — это нормально, но Иеремия переживал из-за большой ответственности.',
                    en: 'Fearing people is normal, but Jeremiah was worried about the great responsibility.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q18.png',
        options: [
            {
                text: { uk: 'Що від нього вийде великий народ', ru: 'Что от него произойдет великий народ', en: 'That a great nation would come from him' },
                isCorrect: false,
                feedback: {
                    uk: 'Це була обіцянка для Авраама, а у Єремії було інше доручення.',
                    ru: 'Это было обещание для Авраама, а у Иеремии было другое поручение.',
                    en: 'That was a promise to Abraham; Jeremiah had a different assignment.'
                }
            },
            {
                text: { uk: 'Що скаже, що говорити, і допоможе', ru: 'Что скажет, что говорить, и поможет', en: 'That He would tell him what to say and help him' },
                isCorrect: true,
                feedback: {
                    uk: 'Найкраща підтримка! Єгова завжди поруч із тими, хто Його слухає.',
                    ru: 'Самая лучшая поддержка! Иегова всегда рядом с теми, кто Его слушает.',
                    en: 'The best support! Jehovah is always with those who listen to Him.'
                }
            },
            {
                text: { uk: 'Що він побудує храм', ru: 'Что он построит храм', en: 'That he would build a temple' },
                isCorrect: false,
                feedback: {
                    uk: 'Його завданням було говорити слова, а не класти цеглу.',
                    ru: 'Его задачей было говорить слова, а не класть кирпичи.',
                    en: 'His job was to speak words, not to lay bricks.'
                }
            },
            {
                text: { uk: 'Що звільнить від служіння', ru: 'Что освободит от служения', en: 'That He would release him from service' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, Єгова дав йому сили служити до самого кінця.',
                    ru: 'Нет, Иегова дал ему силы служить до самого конца.',
                    en: 'No, Jehovah gave him the strength to serve until the very end.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q19.png',
        options: [
            {
                text: { uk: 'Побудувати жертовник', ru: 'Построить жертвенник', en: 'Build an altar' },
                isCorrect: false,
                feedback: {
                    uk: 'Це було б ефектно, але Єгова вибрав більш символічний жест.',
                    ru: 'Это было бы эффектно, но Иегова выбрал более символичный жест.',
                    en: 'That would have been dramatic, but Jehovah chose a more symbolic gesture.'
                }
            },
            {
                text: { uk: 'Заспівати пісню', ru: 'Спеть песню', en: 'Sing a song' },
                isCorrect: false,
                feedback: {
                    uk: 'Пісня — це гарно, але звістка була дуже серйозною.',
                    ru: 'Песня — это хорошо, но весть была очень серьезной.',
                    en: 'Songs are nice, but the message was very serious.'
                }
            },
            {
                text: { uk: 'Розбити глиняний глечик', ru: 'Разбить глиняный кувшин', en: 'Break a clay jar' },
                isCorrect: true,
                feedback: {
                    uk: 'Так! Всі дуже добре запам\'ятали цей урок.',
                    ru: 'Да! Все очень хорошо запомнили этот урок.',
                    en: 'Yes! Everyone remembered that lesson very well.'
                }
            },
            {
                text: { uk: 'Збрити бороду', ru: 'Сбрить бороду', en: 'Shave his beard' },
                isCorrect: false,
                feedback: {
                    uk: 'Інші пророки робили подібне, але не Єремія в цей момент.',
                    ru: 'Другие пророки делали подобное, но не Иеремия в этот момент.',
                    en: 'Other prophets did similar things, but not Jeremiah at this point.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q20.png',
        options: [
            {
                text: { uk: 'Що Єрусалим буде знищений', ru: 'Что Иерусалим будет уничтожен', en: 'That Jerusalem would be destroyed' },
                isCorrect: true,
                feedback: {
                    uk: 'Так, глечик вже неможливо було полагодити. Сумно, але правдиво.',
                    ru: 'Да, кувшин уже нельзя было починить. Грустно, но правдиво.',
                    en: 'Yes, the jar could no longer be fixed. Sad but true.'
                }
            },
            {
                text: { uk: 'Що Єгова сердиться на глечики', ru: 'Что Иегова сердится на кувшины', en: 'That Jehovah is angry at jars' },
                isCorrect: false,
                feedback: {
                    uk: 'Справа не в глечику, а в людях, які не слухалися!',
                    ru: 'Дело не в кувшине, а в людях, которые не слушались!',
                    en: 'It wasn\'t about the jar; it was about the people who weren\'t listening!'
                }
            },
            {
                text: { uk: 'Що не буде води', ru: 'Что не будет воды', en: 'That there will be no water' },
                isCorrect: false,
                feedback: {
                    uk: 'Води б не було в глечику, але це був символ знищення цілого міста.',
                    ru: 'Воды бы не было в кувшине, но это был символ уничтожения целого города.',
                    en: 'There would be no water in the jar, but it was a symbol of the entire city\'s destruction.'
                }
            },
            {
                text: { uk: 'Що глечик був бракований', ru: 'Что кувшин был бракованный', en: 'That the jar was defective' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, це був звичайний глечик, який став частиною важливого уроку.',
                    ru: 'Нет, это был обычный кувшин, который стал частью важного урока.',
                    en: 'No, it was a normal jar that became part of an important lesson.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q21.png',
        options: [
            {
                text: { uk: 'У дерев\'яні колодки', ru: 'В деревянные колодки', en: 'In wooden stocks' },
                isCorrect: true,
                feedback: {
                    uk: 'Це було незручно і боляче, але Єремія терпів.',
                    ru: 'Это было неудобно и больно, но Иеремия терпел.',
                    en: 'It was uncomfortable and painful, but Jeremiah endured it.'
                }
            },
            {
                text: { uk: 'У глибокий колодязь з болотом', ru: 'В глубокий колодец с грязью', en: 'In a deep muddy cistern' },
                isCorrect: true,
                feedback: {
                    uk: 'Жахливе місце, там не було води, тільки твань.',
                    ru: 'Ужасное место, там не было воды, только тина.',
                    en: 'A terrible place; there was no water, only mud.'
                }
            },
            {
                text: { uk: 'У в\'язницю', ru: 'В тюрьюму', en: 'In prison' },
                isCorrect: false,
                feedback: {
                    uk: 'Його там тримали, але колодязь із болотом був набагато страшнішим.',
                    ru: 'Его там держали, но колодец с грязью был намного страшнее.',
                    en: 'He was kept there, but the muddy cistern was much more frightening.'
                }
            },
            {
                text: { uk: 'У яму із левами', ru: 'В яму со львами', en: 'In a lion\'s den' },
                isCorrect: false,
                feedback: {
                    uk: 'Це історія про Даниїла, не переплутай! ;)',
                    ru: 'Это история про Даниила, не перепутай! ;)',
                    en: 'That\'s the story of Daniel, don\'t mix them up! ;)'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q22.png',
        options: [
            {
                text: { uk: 'Похвала людей', ru: 'Похвала людей', en: 'Praise from people' },
                isCorrect: false,
                feedback: {
                    uk: 'Навпаки, його всі лаяли. Похвала точно ні до чого.',
                    ru: 'Наоборот, его все ругали. Похвала точно ни при чем.',
                    en: 'Quite the opposite, everyone scolded him. Praise definitely wasn\'t the reason.'
                }
            },
            {
                text: { uk: 'Страх покарання', ru: 'Страх наказания', en: 'Fear of punishment' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, він любив Бога більше, ніж боявся покарань.',
                    ru: 'Нет, он любил Бога больше, чем боялся наказаний.',
                    en: 'No, he loved God more than he feared punishment.'
                }
            },
            {
                text: { uk: 'Звістка Єгови, як вогонь у серці', ru: 'Весть Иеговы, как огонь в сердце', en: 'Jehovah\'s message like fire in his heart' },
                isCorrect: true,
                feedback: {
                    uk: 'Так! Це вогонь, який неможливо загасити!',
                    ru: 'Да! Это огонь, который невозможно потушить!',
                    en: 'Yes! It\'s a fire that cannot be put out!'
                }
            },
            {
                text: { uk: 'Він був говорливий', ru: 'Он был разговорчивый', en: 'He was talkative' },
                isCorrect: false,
                feedback: {
                    uk: 'Він хотів мовчати, але любов до Єгови була сильнішою.',
                    ru: 'Он хотел молчать, но любовь к Иегове была сильнее.',
                    en: 'He wanted to stay silent, but his love for Jehovah was stronger.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q23.png',
        options: [
            {
                text: { uk: 'Евед-Мелех', ru: 'Эвед-Мелех', en: 'Ebed-melech' },
                isCorrect: true,
                feedback: {
                    uk: 'Дуже сміливий чоловік! Він допоміг пророку Єгови.',
                    ru: 'Очень смелый человек! Он помог пророку Иеговы.',
                    en: 'A very brave man! He helped Jehovah\'s prophet.'
                }
            },
            {
                text: { uk: 'Пашхур', ru: 'Пашхур', en: 'Pashhur' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні, Пашхур був якраз тим, хто завдавав Єремії клопоту.',
                    ru: 'Нет, Пашхур был как раз тем, кто доставлял Иеремии неприятности.',
                    en: 'No, Pashhur was actually the one causing Jeremiah trouble.'
                }
            },
            {
                text: { uk: 'Цар', ru: 'Царь', en: 'The King' },
                isCorrect: false,
                feedback: {
                    uk: 'Цар дозволив, але витягував саме Евед-Мелех.',
                    ru: 'Царь разрешил, но вытаскивал именно Эвед-Мелех.',
                    en: 'The King permitted it, but it was Ebed-melech who did the pulling.'
                }
            },
            {
                text: { uk: 'Ангел Єгови', ru: 'Ангел Иеговы', en: 'Jehovah\'s angel' },
                isCorrect: false,
                feedback: {
                    uk: 'Єгова допоміг руками Евед-Мелеха.',
                    ru: 'Иегова помог руками Эвед-Мелеха.',
                    en: 'Jehovah helped by using Ebed-melech.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q24.png',
        options: [
            {
                text: { uk: 'Бо Єгова пообіцяв бути з ним', ru: 'Потому что Иегова пообещал быть с ним', en: 'Because Jehovah promised to be with him' },
                isCorrect: true,
                feedback: {
                    uk: 'Найкращий партнер у будь-якій справі — це Єгова.',
                    ru: 'Самый лучший напарник в любом деле — это Иегова.',
                    en: 'The best partner in any endeavor is Jehovah.'
                }
            },
            {
                text: { uk: 'Бо роздумував про доручення Єгови', ru: 'Потому что размышлял о поручении Иеговы', en: 'Because he meditated on the assignment' },
                isCorrect: true,
                feedback: {
                    uk: 'Роздуми дають впевненість.',
                    ru: 'Размышление дает уверенность.',
                    en: 'Meditation gives confidence.'
                }
            },
            {
                text: { uk: 'Бо боявся', ru: 'Потому что боялся', en: 'Because he was afraid' },
                isCorrect: false,
                feedback: {
                    uk: 'Він боявся, але любов витіснила страх.',
                    ru: 'Он боялся, но любовь вытеснила страх.',
                    en: 'He was afraid, but love drove out the fear.'
                }
            },
            {
                text: { uk: 'Бо всі пророки так робили', ru: 'Потому что все пророки так делали', en: 'Because all prophets did so' },
                isCorrect: false,
                feedback: {
                    uk: 'Кожен пророк мав свій важкий шлях, і Єремія свій обрав сам.',
                    ru: 'Каждый пророк имел свой тяжелый путь, и Иеремия свой выбрал сам.',
                    en: 'Every prophet had their own difficult path, and Jeremiah chose his own.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q25.png',
        options: [
            {
                text: { uk: 'Священики', ru: 'Священники', en: 'Priests' },
                isCorrect: true,
                feedback: {
                    uk: 'Прикро, але вони були одними з найперших противників.',
                    ru: 'Обидно, но они были одними из самых первых противников.',
                    en: 'It\'s a shame, but they were among the very first opponents.'
                }
            },
            {
                text: { uk: 'Неправдиві пророки', ru: 'Ложные пророки', en: 'False prophets' },
                isCorrect: true,
                feedback: {
                    uk: 'Вони казали приємні речі, щоб заплутати людей.',
                    ru: 'Они говорили приятные вещи, чтобы запутать людей.',
                    en: 'They said pleasant things to confuse the people.'
                }
            },
            {
                text: { uk: 'Народ', ru: 'Народ', en: 'The people' },
                isCorrect: false,
                feedback: {
                    uk: 'Деякі люди слухалися, тому не можна сказати про всіх.',
                    ru: 'Некоторые люди слушались, поэтому нельзя сказать про всех.',
                    en: 'Some people listened, so we can\'t say it about everyone.'
                }
            },
            {
                text: { uk: 'Евед-Мелех', ru: 'Эвед-Мелех', en: 'Ebed-melech' },
                isCorrect: false,
                feedback: {
                    uk: 'Ні! Він був справжнім другом Єремії.',
                    ru: 'Нет! Он был настоящим другом Иеремии.',
                    en: 'No! He was Jeremiah\'s true friend.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/q26.png',
        afterReveal: {
            uk: 'Усі ці думки правильні',
            ru: 'Все эти мысли верны',
            en: 'All these thoughts are correct'
        },
        options: [
            {
                text: { uk: 'Нікому не під силу зупинити проповідь', ru: 'Никому не под силу остановить проповедь', en: 'No one can stop the preaching' },
                isCorrect: true,
                feedback: {
                    uk: 'Слово Бога сильніше за будь-які перешкоди!',
                    ru: 'Слово Бога сильнее любых преград!',
                    en: 'God\'s word is stronger than any obstacle!'
                }
            },
            {
                text: { uk: 'Єгова допомагає слухняним', ru: 'Иегова помогает послушным', en: 'Jehovah helps the obedient' },
                isCorrect: true,
                feedback: {
                    uk: 'Він ніколи не залишає своїх друзів.',
                    ru: 'Он никогда не оставляет своих друзей.',
                    en: 'He never leaves His friends.'
                }
            },
            {
                text: { uk: 'Навіть юні можуть бути прикладом', ru: 'Даже юные могут быть примером', en: 'Even the young can be an example' },
                isCorrect: true,
                feedback: {
                    uk: 'Як Йосія та Єремія — сміливі з молодості.',
                    ru: 'Как Иосия и Иеремия — смелые с молодости.',
                    en: 'Just like Josiah and Jeremiah — bold from their youth.'
                }
            },
            {
                text: { uk: 'Переслідування будуть, але Єгова допоможе', ru: 'Преследования будут, но Иегова поможет', en: 'There will be persecution, but Jehovah will help' },
                isCorrect: true,
                feedback: {
                    uk: 'Це обіцянка, якій можна довіряти.',
                    ru: 'Это обещание, которому можно доверять.',
                    en: 'This is a promise you can trust.'
                }
            }
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
        image: '/bible-quiz-kids/illustrations/finale.png',
        part: 'jeremiah'
    }
];

export const totalQuestions = quizData.filter(q => q.type === 'single' || q.type === 'multi').length;
