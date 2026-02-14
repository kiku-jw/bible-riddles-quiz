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
            { text: { uk: 'По одній парі', ru: 'По одной паре', en: 'One pair each' }, isCorrect: false, feedback: { uk: 'Мойсей був зайнятий заповідями, йому було не до зоопарку!', ru: 'Моисей был занят заповедями, ему было не до зоопарка!', en: 'Moses was busy with the commandments, he didn\'t have time for a zoo!' } },
            { text: { uk: 'По сім пар', ru: 'По семь пар', en: 'Seven pairs each' }, isCorrect: false, feedback: { uk: 'Навіть якби їх було сім, вони були б у Ноя, а не у Мойсея!', ru: 'Даже если бы их было семь, они были бы у Ноя, а не у Моисея!', en: 'Even if there were seven, they would be on Noah\'s boat, not Moses\'s!' } },
            { text: { uk: 'Жодної', ru: 'Ни одной', en: 'None' }, isCorrect: true, feedback: { uk: 'Правильно! Ковчег будував Ной, а не Мойсей.', ru: 'Верно! Ковчег строил Ной, а не Моисей.', en: 'Correct! Noah built the ark, not Moses.' } },
            { text: { uk: 'Всіх тварин світу', ru: 'Всех животных мира', en: 'All animals of the world' }, isCorrect: false, feedback: { uk: 'Це занадто багато квитків для перевірки! Та й капітан не той.', ru: 'Это слишком много билетов для проверки! Да и капитан не тот.', en: 'That\'s too many tickets to check! And wrong captain.' } }
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
            { text: { uk: 'Єва', ru: 'Ева', en: 'Eve' }, isCorrect: false, feedback: { uk: 'Єва полюбляла яблука, а не сіль!', ru: 'Ева любила яблоки, а не соль!', en: 'Eve liked apples, not salt!' } },
            { text: { uk: 'Дружина Лота', ru: 'Жена Лота', en: 'Lot\'s wife' }, isCorrect: true, feedback: { uk: 'Так! Вона стала соляним стовпом.', ru: 'Да! Она стала соляным столпом.', en: 'Yes! She became a pillar of salt.' } },
            { text: { uk: 'Сарра', ru: 'Сарра', en: 'Sarah' }, isCorrect: false, feedback: { uk: 'Сарра була принцесою, вона віддавала перевагу прикрасам, а не сільничкам.', ru: 'Сарра была принцессой, она предпочитала украшения, а не солонки.', en: 'Sarah was a princess, she preferred jewels over salt shakers.' } },
            { text: { uk: 'Ревека', ru: 'Ревекка', en: 'Rebekah' }, isCorrect: false, feedback: { uk: 'Ревека напувала верблюдів, а не перетворювалася на мінерал!', ru: 'Ревекка поила верблюдов, а не превращалась в минерал!', en: 'Rebekah watered camels, she didn\'t turn into a mineral!' } }
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
            { text: { uk: 'Дерев’яним', ru: 'Деревянным', en: 'Wooden' }, isCorrect: false, feedback: { uk: 'Технічно правильно, але це не та «каверзна» відповідь, яку ми шукаємо! Подумай про вологість.', ru: 'Технически правильно, но это не тот «каверзный» ответ, который мы ищем! Подумай о влажности.', en: 'Technically correct, but not the tricky answer we\'re looking for! Think about moisture.' } },
            { text: { uk: 'Великим', ru: 'Большим', en: 'Big' }, isCorrect: false, feedback: { uk: 'Він був величезний, але все одно тримався на поверхні води... переважно.', ru: 'Он был огромным, но все равно держался на поверхности воды... в основном.', en: 'It was huge, but it still stayed on top of the water... mostly.' } },
            { text: { uk: 'Мокрим', ru: 'Мокрым', en: 'Wet' }, isCorrect: true, feedback: { uk: 'Вірно! Під час такого дощу сухо в ковчегу не було нікому.', ru: 'Верно! Во время такого дождя сухо в ковчеге не было никому.', en: 'Correct! During such rain, no one in the ark stayed dry.' } },
            { text: { uk: 'Надійним', ru: 'Надежным', en: 'Reliable' }, isCorrect: false, feedback: { uk: 'Він пережив найбільший шторм в історії, але «мокрий» — ще точніше!', ru: 'Он пережил величайший шторм в истории, но «мокрый» — еще точнее!', en: 'It survived the biggest storm in history, but "wet" is even more accurate!' } }
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
            { text: { uk: 'На першому', ru: 'На первом', en: 'On the first' }, isCorrect: false, feedback: { uk: 'Їм би було там затісно! Вони віддавали перевагу відкритому морю.', ru: 'Им бы было там тесновато! Они предпочитали открытое море.', en: 'They would have been quite cramped there! They preferred the open sea.' } },
            { text: { uk: 'На третьому', ru: 'На третьем', en: 'On the third' }, isCorrect: false, feedback: { uk: 'Пентхаус для золотих рибок? Весело, але не по-біблійному.', ru: 'Пентхаус для золотых рыбок? Весело, но не по-библейски.', en: 'A penthouse for goldfish? Fun, but not biblical.' } },
            { text: { uk: 'Їх там не було', ru: 'Их там не было', en: 'They weren\'t there' }, isCorrect: true, feedback: { uk: 'Риби плавали у воді навколо ковчега!', ru: 'Рыбы плавали в воде вокруг ковчега!', en: 'The fish were swimming in the water around the ark!' } },
            { text: { uk: 'В акваріумах', ru: 'В аквариумах', en: 'In aquariums' }, isCorrect: false, feedback: { uk: 'У Ноя не було часу мити скло в акваріумах з усіма цими тваринами!', ru: 'У Ноя не было времени мыть стекла в аквариумах со всеми этими животными!', en: 'Noah didn\'t have time to clean aquariums with all those animals around!' } }
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
            { text: { uk: 'Лука', ru: 'Лука', en: 'Luke' }, isCorrect: false, feedback: { uk: 'Він був лікарем, але Бог першим зробив «операцію» в Едемі!', ru: 'Он был врачом, но Бог первым сделал «операцию» в Эдеме!', en: 'He was a doctor, but God was the first to perform "surgery" in Eden!' } },
            { text: { uk: 'Бог Єгова', ru: 'Бог Иегова', en: 'Jehovah God' }, isCorrect: true, feedback: { uk: 'Так, Він взяв ребро Адама, щоб створити Єву.', ru: 'Да, Он взял ребро Адама, чтобы создать Еву.', en: 'Yes, He took Adam\'s rib to create Eve.' } },
            { text: { uk: 'Мойсей', ru: 'Моисей', en: 'Moses' }, isCorrect: false, feedback: { uk: 'Він робив багато чудес, але не першу операцію.', ru: 'Он совершал много чудес, но не первую операцию.', en: 'He performed many signs, but not the first surgery.' } },
            { text: { uk: 'Адам', ru: 'Адам', en: 'Adam' }, isCorrect: false, feedback: { uk: 'Адам був пацієнтом, а не лікарем!', ru: 'Адам был пациентом, а не врачом!', en: 'Adam was the patient, not the doctor!' } }
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
            { text: { uk: 'Змій', ru: 'Змей', en: 'Serpent' }, isCorrect: true, feedback: { uk: 'Так, в Едемі змій заговорив першим.', ru: 'Да, в Эдеме змей заговорил первым.', en: 'Yes, the serpent spoke first in Eden.' } },
            { text: { uk: 'Лев', ru: 'Лев', en: 'Lion' }, isCorrect: false, feedback: { uk: 'Лев, що розмовляє? Це тобі не Нарнія!', ru: 'Говорящий лев? Это тебе не Нарния!', en: 'A talking lion? This isn\'t Narnia!' } },
            { text: { uk: 'Ослиця', ru: 'Ослица', en: 'Donkey' }, isCorrect: true, feedback: { uk: 'Вірно! Ослиця Валаама заговорила на дорозі.', ru: 'Верно! Ослица Валаама заговорила на дороге.', en: 'Correct! Balaam\'s donkey spoke on the road.' } },
            { text: { uk: 'Голуб', ru: 'Голубь', en: 'Dove' }, isCorrect: false, feedback: { uk: 'Голуб приніс оливкову гілку, а не виголошував промову.', ru: 'Голубь принес оливковую ветвь, а не произносил речь.', en: 'The dove brought an olive branch, it didn\'t give a speech.' } }
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
            { text: { uk: 'Іван Хреститель', ru: 'Иоанн Креститель', en: 'John the Baptist' }, isCorrect: false, feedback: { uk: 'Іван був у пустелі, а не на парковці в Єрусалимі. Та й верблюжа шерсть — це не сідло!', ru: 'Иоанн был в пустыне, а не на парковке в Иерусалиме. Да и верблюжья шерсть — это не седло!', en: 'John was in the wilderness, not at a parking lot in Jerusalem. And camel hair is not a saddle!' } },
            { text: { uk: 'Молодий осел', ru: 'Молодой осел', en: 'A young donkey' }, isCorrect: true, feedback: { uk: 'Правильно! Він ніколи не возив людей, поки на нього не сів Ісус. Це був особливий "рейс"!', ru: 'Верно! Он никогда не возил людей, пока на него не сел Иисус. Это был особенный "рейс"!', en: 'Correct! He had never carried people until Jesus sat on him. It was a very special "flight"!' } },
            { text: { uk: 'Йосип', ru: 'Иосиф', en: 'Joseph' }, isCorrect: false, feedback: { uk: 'Йосип був теслею, а не кріслом-гойдалкою для Ісуса! Уяви, як би це виглядало...', ru: 'Иосиф был плотником, а не креслом-качалкой для Иисуса! Представь, как бы это выглядело...', en: 'Joseph was a carpenter, not a rocking chair for Jesus! Imagine how that would look...' } },
            { text: { uk: 'Ангел', ru: 'Ангел', en: 'An angel' }, isCorrect: false, feedback: { uk: 'Ангели мають крила, а Ісусу потрібен був хтось із копитами для виконання пророцтва!', ru: 'У ангелов есть крылья, а Иисусу нужен был кто-то с копытами для исполнения пророчества!', en: 'Angels have wings, but Jesus needed someone with hooves to fulfill the prophecy!' } }
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
            { text: { uk: 'Райський сад', ru: 'Райский сад', en: 'Garden of Eden' }, isCorrect: false, feedback: { uk: 'Він купався в сонячних променях щодня, поки Адама не попросили "з’їхати".', ru: 'Он купался в солнечных лучах каждый день, пока Адама не попросили "съехать".', en: 'It enjoyed sunshine every day until Adam was asked to "move out".' } },
            { text: { uk: 'Дно Червоного моря', ru: 'Дно Красного моря', en: 'The bottom of the Red Sea' }, isCorrect: true, feedback: { uk: 'Саме так! Коли води розійшлися, сонце вперше і востаннє заглянуло в гості до морських коників.', ru: 'Именно так! Когда воды разошлись, солнце впервые и в последний раз заглянуло в гости к морским конькам.', en: 'Exactly! When the waters parted, the sun visited the seahorses for the first and last time.' } },
            { text: { uk: 'Гора Сінай', ru: 'Гора Синай', en: 'Mount Sinai' }, isCorrect: false, feedback: { uk: 'Вона стоїть на видноті тисячі років. Сонце там — постійний гість, а не випадковий перехожий.', ru: 'Она стоит на виду тысячи лет. Солнце там — постоянный гость, а не случайный прохожий.', en: 'It has been in plain sight for thousands of years. The sun is a permanent guest there, not a passerby.' } },
            { text: { uk: 'Верхівка Арарату', ru: 'Вершина Арарата', en: 'The top of Ararat' }, isCorrect: false, feedback: { uk: 'Верхівка гори першою висунулася з води, щоб Ной міг погрітися на сонечку. Вона бачить світ щодня!', ru: 'Верхушка горы первой высунулась из воды, чтобы Ной мог погреться на солнышке. Она видит свет каждый день!', en: 'The mountain top was the first to pop out of the water so Noah could catch some rays. It sees light every day!' } }
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
            { text: { uk: '12', ru: '12', en: '12' }, isCorrect: false, feedback: { uk: 'Це лише "основний склад", як у футболі.', ru: 'Это только "основной состав", как в футболе.', en: 'That\'s just the "starting lineup," like in football.' } },
            { text: { uk: '13', ru: '13', en: '13' }, isCorrect: false, feedback: { uk: 'Число нещасливе, але апостолів було більше.', ru: 'Число несчастливое, но апостолов было больше.', en: 'An unlucky number, but there were more apostles.' } },
            { text: { uk: '16', ru: '16', en: '16' }, isCorrect: true, feedback: { uk: 'Крім 12 обраних Ісусом, були також Маттій, Павло, Варнава та Ісус (як Посланець).', ru: 'Кроме 12 избранных Иисусом, были также Матфий, Павел, Варнава и Иисус (как Посланник).', en: 'Besides the 12 chosen by Jesus, there were also Matthias, Paul, Barnabas, and Jesus (as the Apostle).' } },
            { text: { uk: '70', ru: '70', en: '70' }, isCorrect: false, feedback: { uk: 'Це були учні, але не всі вони називалися апостолами.', ru: 'Это были ученики, но не все они назывались апостолами.', en: 'They were disciples, but not all were called apostles.' } }
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
            { text: { uk: 'Одяг', ru: 'Одежда', en: 'Clothing' }, isCorrect: false, feedback: { uk: 'Одяг — штука мінлива. Бог дав шкіряний одяг Адаму, а далі ми вже самі штурмуємо магазини!', ru: 'Одежда — штука переменчивая. Бог дал кожаную одежду Адаму, а дальше мы уже сами штурмуем магазины!', en: 'Clothing is changeable. God gave Adam leather clothes, and from then on we\'ve been hitting the shops!' } },
            { text: { uk: 'Зуби', ru: 'Зубы', en: 'Teeth' }, isCorrect: true, feedback: { uk: 'Уважно! Молочні та корінні — подарунок природи, а далі — тільки до стоматолога за новими!', ru: 'Внимательно! Молочные и коренные — подарок природы, а дальше — только к стоматологу за новыми!', en: 'Careful! Baby and permanent ones are a gift from nature, but after that, it\'s off to the dentist for new ones!' } },
            { text: { uk: 'Волосся', ru: 'Волосы', en: 'Hair' }, isCorrect: false, feedback: { uk: 'Якби ми купували кожну волосину втретє, перукарі були б мільярдерами!', ru: 'Если бы мы покупали каждый волос в третий раз, парикмахеры были бы миллиардерами!', en: 'If we had to buy every single hair the third time, hairdressers would be billionaires!' } },
            { text: { uk: 'Зір', ru: 'Зрение', en: 'Eyesight' }, isCorrect: false, feedback: { uk: 'Зір — це талант від Творця. Купити можна окуляри, але не саму здатність бачити світ!', ru: 'Зрение — это талант от Творца. Купить можно очки, но не саму способность видеть мир!', en: 'Sight is a talent from the Creator. You can buy glasses, but not the ability to see the world itself!' } }
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
            { text: { uk: 'Саул', ru: 'Саул', en: 'Saul' }, isCorrect: false, feedback: { uk: 'Він помер від власного меча, але не як приклад віри.', ru: 'Он пал от собственного меча, но не как пример веры.', en: 'He fell by his own sword, but not as an example of faith.' } },
            { text: { uk: 'Юда Іскаріот', ru: 'Иуда Искариот', en: 'Judas Iscariot' }, isCorrect: false, feedback: { uk: 'Його вчинок не був актом віри.', ru: 'Его поступок не был актом веры.', en: 'His act was not an act of faith.' } },
            { text: { uk: 'Самсон', ru: 'Самсон', en: 'Samson' }, isCorrect: true, feedback: { uk: 'Так! Він пожертвував собою заради перемоги над ворогами Бога і згаданий як приклад віри.', ru: 'Да! Он пожертвовал собой ради победы над врагами Бога и упомянут как пример веры.', en: 'Yes! He sacrificed himself to defeat God\'s enemies and is mentioned as an example of faith.' } },
            { text: { uk: 'Ахітофел', ru: 'Ахитофел', en: 'Ahithophel' }, isCorrect: false, feedback: { uk: 'Вчинок відчаю, а не віри.', ru: 'Поступок отчаяния, а не веры.', en: 'An act of despair, not faith.' } }
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
            { text: { uk: 'Давид', ru: 'Давид', en: 'David' }, isCorrect: false, feedback: { uk: 'Давид часто славив Бога у псалмах.', ru: 'Давид часто славил Бога в псалмах.', en: 'David often praised God in the psalms.' } },
            { text: { uk: 'Соломон', ru: 'Соломон', en: 'Solomon' }, isCorrect: false, feedback: { uk: 'Він сказав, що все марнота, але день не проклинав.', ru: 'Он сказал, что всё суета, но день не проклинал.', en: 'He said everything is vanity, but he didn\'t curse the day.' } },
            { text: { uk: 'Петро', ru: 'Петр', en: 'Peter' }, isCorrect: false, feedback: { uk: 'Він плакав, але не проклинав свій день народження.', ru: 'Он плакал, но не проклинал свой день рождения.', en: 'He cried, but he didn\'t curse his birthday.' } }
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
            { text: { uk: 'Гідеон', ru: 'Гедеон', en: 'Gideon' }, isCorrect: true, feedback: { uk: 'Так! Він зрубав Ашеру (священне дерево) свого батька, бо це було правильно в очах Єгови. Справжній біблійний дроворуб!', ru: 'Да! Он срубил Ашеру (священное дерево) своего отца, потому что это было правильно в глазах Иеговы. Настоящий библейский дровосек!', en: 'Yes! He cut down his father\'s Asherah (sacred pole) because it was right in Jehovah\'s eyes. A true biblical lumberjack!' } },
            { text: { uk: 'Ной', ru: 'Ной', en: 'Noah' }, isCorrect: false, feedback: { uk: 'Ной побудував цілий ковчег, але ми сподіваємося, що він брав ліс у власному лісгоспі!', ru: 'Ной построил целый ковчег, но мы надеемся, что он брал лес в собственном лесхозе!', en: 'Noah built a whole ark, but we hope he got the timber from his own lumberyard!' } },
            { text: { uk: 'Авраам', ru: 'Авраам', en: 'Abraham' }, isCorrect: false, feedback: { uk: 'Авраам саджав дерева, а не рубав чужі. Він був більше по садівництву та гостинності.', ru: 'Авраам сажал деревья, а не рубил чужие. Он был больше по садоводству и гостеприимству.', en: 'Abraham planted trees, he didn\'t chop down others. He was more into gardening and hospitality.' } },
            { text: { uk: 'Ісус Навин', ru: 'Иисус Навин', en: 'Joshua' }, isCorrect: false, feedback: { uk: 'Ісус Навин боровся з велетнями та стінами, а не воював із садовими рослинами.', ru: 'Иисус Навин сражался с великанами и стенами, а не воевал с садовыми растениями.', en: 'Joshua fought giants and walls, not garden plants.' } }
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
            { text: { uk: 'На верхній', ru: 'На верхней', en: 'On the top shelf' }, isCorrect: false, feedback: { uk: 'Навіть на самій високій її не було.', ru: 'Даже на самой высокой её не было.', en: 'Even on the highest one, it wasn\'t there.' } },
            { text: { uk: 'На нижній', ru: 'На нижней', en: 'On the bottom shelf' }, isCorrect: false, feedback: { uk: 'На дні ковчега були тільки тварини.', ru: 'На дне ковчега были только животные.', en: 'Only animals were at the bottom of the ark.' } },
            { text: { uk: 'Ні на якій', ru: 'Ни на какой', en: 'On none' }, isCorrect: true, feedback: { uk: 'Правильно! Тоді Біблії ще не існувало.', ru: 'Верно! Тогда Библии еще не существовало.', en: 'Correct! The Bible didn\'t exist then.' } },
            { text: { uk: 'У каюті', ru: 'В каюте', en: 'In the cabin' }, isCorrect: false, feedback: { uk: 'Каюти були, а Біблії — ні.', ru: 'Каюты были, а Библии — нет.', en: 'There were cabins, but no Bibles.' } }
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
            { text: { uk: 'Соломон', ru: 'Соломон', en: 'Solomon' }, isCorrect: false, feedback: { uk: 'Соломон будував храни та палаци, але він був занадто мудрий, щоб перетворювати себе на статую!', ru: 'Соломон строил храмы и дворцы, но он был слишком мудрым, чтобы превращать себя в статую!', en: 'Solomon built temples and palaces, but he was too wise to turn himself into a statue!' } },
            { text: { uk: 'Авессалом', ru: 'Авессалом', en: 'Absalom' }, isCorrect: true, feedback: { uk: 'Так! Він поставив собі пам’ятник, бо не мав синів. Тепер ми знаємо про нього завдяки цій загадці!', ru: 'Да! Он поставил себе памятник, так как у него не было сыновей. Теперь мы знаем о нем благодаря этой загадке!', en: 'Yes! He set up a pillar for himself because he had no son. Now we know about him thanks to this riddle!' } },
            { text: { uk: 'Адонія', ru: 'Адония', en: 'Adonijah' }, isCorrect: false, feedback: { uk: 'Адонія хотів приміряти корону, а не позувати для скульптора!', ru: 'Адония хотел примерить корону, а не позировать для скульптора!', en: 'Adonijah wanted to try on the crown, not pose for a sculptor!' } },
            { text: { uk: 'Амнон', ru: 'Амнон', en: 'Amnon' }, isCorrect: false, feedback: { uk: 'Амнон думав про зовсім інші речі, пам’ятники його не цікавили.', ru: 'Амнон думал о совсем других вещах, памятники его не интересовали.', en: 'Amnon had other things on his mind; he wasn\'t interested in monuments.' } }
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
            { text: { uk: 'Осел', ru: 'Осел', en: 'Donkey' }, isCorrect: false, feedback: { uk: 'Він говорить "Іа", якщо ви не помітили.', ru: 'Он говорит "Иа", если вы не заметили.', en: 'He says "Hee-haw," if you haven\'t noticed.' } },
            { text: { uk: 'Кінь', ru: 'Конь', en: 'Horse' }, isCorrect: true, feedback: { uk: 'Так, у книзі Йова 39:25 так описується голос бойового коня.', ru: 'Да, в книге Иова 39:25 так описывается голос боевого коня.', en: 'Yes, Job 39:25 describes the war horse\'s sound this way.' } },
            { text: { uk: 'Бегемот', ru: 'Бегемот', en: 'Behemoth' }, isCorrect: false, feedback: { uk: 'Бегемоти тільки пирхають.', ru: 'Бегемоты только фыркают.', en: 'Hippos just snort.' } },
            { text: { uk: 'Левіафан', ru: 'Левиафан', en: 'Leviathan' }, isCorrect: false, feedback: { uk: 'Він морське чудовисько, а не оратор.', ru: 'Он морское чудовище, а не оратор.', en: 'He\'s a sea monster, not an orator.' } }
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
            { text: { uk: 'Будинок', ru: 'Дом', en: 'House' }, isCorrect: false, feedback: { uk: 'Якщо ти купив будинок і не знаєш про це — можливо, пора перевірити пошту? Чи це такий великий особняк?', ru: 'Если ты купил дом и не знаешь об этом — возможно, пора проверить почту? Или это такой большой особняк?', en: 'If you bought a house and don\'t know it, maybe you should check your mail? Or is it just a very big mansion?' } },
            { text: { uk: 'Труна (гроб)', ru: 'Гроб', en: 'Coffin' }, isCorrect: true, feedback: { uk: 'Бінго! Майстер робить на продаж, покупець бере не для себе, а користувач вже нічого не скаже...', ru: 'Бинго! Мастер делает на продажу, покупатель берет не для себя, а пользователь уже ничего не скажет...', en: 'Bingo! The maker makes to sell, the buyer buys for someone else, and the user has nothing to say...' } },
            { text: { uk: 'Одяг', ru: 'Одежда', en: 'Clothing' }, isCorrect: false, feedback: { uk: 'Якщо тобі потрібен одяг, ти зазвичай це помічаєш... особливо взимку!', ru: 'Если тебе нужна одежда, ты обычно это замечаешь... особенно зимой!', en: 'If you need clothes, you usually notice... especially in winter!' } },
            { text: { uk: 'Ліки', ru: 'Лекарства', en: 'Medicine' }, isCorrect: false, feedback: { uk: 'Той, кому потрібні ліки, зазвичай мріє про них більше за все на світі. Тут без секретів!', ru: 'Тот, кому нужны лекарства, обычно мечтает о них больше всего на свете. Тут без секретов!', en: 'Someone who needs medicine usually dreams of it more than anything. No secrets here!' } }
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
            { text: { uk: 'Сонце', ru: 'Солнце', en: 'Sun' }, isCorrect: false, feedback: { uk: 'Сонце — це частина неба, але не все створене.', ru: 'Солнце — это часть неба, но не всё созданное.', en: 'The sun is part of the heavens, but not everything created.' } },
            { text: { uk: 'Людина', ru: 'Человек', en: 'Man' }, isCorrect: false, feedback: { uk: 'Людина з’явилася пізніше, а спочатку були небо і земля.', ru: 'Человек появился позже, а вначале были небо и земля.', en: 'Man came later; in the beginning were the heavens and the earth.' } }
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
            { text: { uk: 'Ілля', ru: 'Илья', en: 'Elijah' }, isCorrect: false, feedback: { uk: 'Він полетів на небо живим, а не помер у гілках.', ru: 'Он улетел на небо живым, а не умер в ветвях.', en: 'He went to heaven alive, he didn\'t die in the branches.' } },
            { text: { uk: 'Авессалом', ru: 'Авессалом', en: 'Absalom' }, isCorrect: true },
            { text: { uk: 'Ісая', ru: 'Исаия', en: 'Isaiah' }, isCorrect: false, feedback: { uk: 'Його шлях закінчився інакше.', ru: 'Его путь закончился иначе.', en: 'His journey ended differently.' } },
            { text: { uk: 'Степан', ru: 'Стефан', en: 'Stephen' }, isCorrect: false, feedback: { uk: 'Він помер на землі, бачачи відкрите небо.', ru: 'Он умер на земле, видя открытое небо.', en: 'He died on earth, seeing the heavens open.' } }
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
            { text: { uk: 'Марія', ru: 'Мария', en: 'Mary' }, isCorrect: false, feedback: { uk: 'Їх було багато, але ніхто з них не вмирав двічі в такому контексті.', ru: 'Их было много, но никто из них не умирал дважды в таком контексте.', en: 'There were many, but none died twice in this context.' } },
            { text: { uk: 'Іван', ru: 'Иоанн', en: 'John' }, isCorrect: false, feedback: { uk: 'Він дожив до глибокої старості і помер один раз.', ru: 'Он дожил до глубокой старости и умер один раз.', en: 'He lived to a ripe old age and died once.' } },
            { text: { uk: 'Яків', ru: 'Иаков', en: 'James' }, isCorrect: false, feedback: { uk: 'Він загинув як мученик, але тільки один раз.', ru: 'Он погиб как мученик, но только один раз.', en: 'He died as a martyr, but only once.' } }
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
            { text: { uk: 'Ослина щелепа', ru: 'Ослиная челюсть', en: 'Donkey\'s jawbone' }, isCorrect: true, feedback: { uk: 'Саме так! Самсон переміг тисячу ворогів цією незвичайною зброєю. Ослику це б не сподобалося!', ru: 'Именно так! Самсон победил тысячу врагов этим необычным оружием. Ослику бы это не понравилось!', en: 'Exactly! Samson defeated a thousand enemies with this unusual weapon. The donkey wouldn\'t have liked that!' } },
            { text: { uk: 'Левова лапа', ru: 'Львиная лапа', en: 'Lion\'s paw' }, isCorrect: false, feedback: { uk: 'Лапа лева — грізна річ, але Самсон волів використовувати "підручні" засоби від осликів.', ru: 'Лапа льва — грозная штука, но Самсон предпочитал использовать "подручные" средства от осликов.', en: 'A lion\'s paw is fearsome, but Samson preferred to use "handy" items from donkeys.' } },
            { text: { uk: 'Роги бика', ru: 'Рога быка', en: 'Bull\'s horns' }, isCorrect: false, feedback: { uk: 'Роги — це для биків, а Самсон був майстром імпровізації!', ru: 'Рога — это для быков, а Самсон был мастером импровизации!', en: 'Horns are for bulls, but Samson was a master of improvisation!' } },
            { text: { uk: 'Крила орла', ru: 'Крылья орла', en: 'Eagle\'s wings' }, isCorrect: false, feedback: { uk: 'Уяви Самсона, що розмахує орлиними крилами в бою... Це було б гарно, але неефективно!', ru: 'Представь Самсона, размахивающего орлиными крыльями в бою... Это было бы красиво, но неэффективно!', en: 'Imagine Samson waving eagle wings in battle... It would be beautiful, but not very effective!' } }
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
            { text: { uk: 'Вавилон', ru: 'Вавилон', en: 'Babylon' }, isCorrect: false, feedback: { uk: 'Його будували на гордості, а не на синах.', ru: 'Его строили на гордости, а не на сыновьях.', en: 'It was built on pride, not on sons.' } },
            { text: { uk: 'Єрихон', ru: 'Иерихон', en: 'Jericho' }, isCorrect: true, feedback: { uk: 'Так, це було прокляття Ісуса Навина, яке здійснилося через сотні років.', ru: 'Да, это было проклятие Иисуса Навина, которое исполнилось спустя сотни лет.', en: 'Yes, it was Joshua\'s curse that was fulfilled hundreds of years later.' } },
            { text: { uk: 'Ніневія', ru: 'Ниневия', en: 'Nineveh' }, isCorrect: false, feedback: { uk: 'Там покаялися від проповіді Йони, а не будували на крові.', ru: 'Там покаялись от проповеди Ионы, а не строили на крови.', en: 'They repented at Jonah\'s preaching, they didn\'t build on blood.' } },
            { text: { uk: 'Содом', ru: 'Содом', en: 'Sodom' }, isCorrect: false, feedback: { uk: 'Його не відбудовували, він зник у вогні.', ru: 'Его не отстраивали, он исчез в огне.', en: 'It wasn\'t rebuilt; it vanished in fire.' } }
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
            { text: { uk: 'Амінь', ru: 'Аминь', en: 'Amen' }, isCorrect: false, feedback: { uk: 'Це слово звучить у Біблії на кожній другій сторінці. Ми його вчимо першим!', ru: 'Это слово звучит в Библии на каждой второй странице. Мы его учим первым!', en: 'This word is on every other page of the Bible. It\'s the first one we learn!' } },
            { text: { uk: 'Армагеддон', ru: 'Армагеддон', en: 'Armageddon' }, isCorrect: true, feedback: { uk: 'Вірно! Багато хто боїться цього слова, але в Біблії воно — як рідкісний діамант, лише один раз!', ru: 'Верно! Многие боятся этого слова, но в Библии оно — как редкий бриллиант, всего один раз!', en: 'Correct! Many people are afraid of this word, but in the Bible, it\'s like a rare diamond—it appears only once!' } },
            { text: { uk: 'Рай', ru: 'Рай', en: 'Paradise' }, isCorrect: false, feedback: { uk: 'Рай — це круто, і Біблія любить про нього нагадувати. Одним разом не обійшлося!', ru: 'Рай — это круто, и Библия любит о нем напоминать. Одним разом не обошлось!', en: 'Paradise is great, and the Bible loves to remind us about it. Once wasn\'t enough!' } },
            { text: { uk: 'Алілуя', ru: 'Аллилуйя', en: 'Hallelujah' }, isCorrect: false, feedback: { uk: 'Це слово звучить як головна пісня всього всесвіту. Одного разу було б замало для такого славослів’я!', ru: 'Это слово звучит как главная песня всей вселенной. Одного раза было бы мало для такого славословия!', en: 'This word sounds like the main song of the whole universe. Once would definitely be too little for such praise!' } }
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
            { text: { uk: 'Єзавель', ru: 'Иезавель', en: 'Jezebel' }, isCorrect: false, feedback: { uk: 'Вона була прикладом зла, а не віри.', ru: 'Она была примером зла, а не веры.', en: 'She was an example of evil, not faith.' } },
            { text: { uk: 'Даліла', ru: 'Далида', en: 'Delilah' }, isCorrect: false, feedback: { uk: 'Вона зрадила Самсона, а не врятувала соглядачів.', ru: 'Она предала Самсона, а не спасла соглядатаев.', en: 'She betrayed Samson, she didn\'t save the spies.' } },
            { text: { uk: 'Сапфіра', ru: 'Сапфира', en: 'Sapphira' }, isCorrect: false, feedback: { uk: 'Її віра закінчилася на обмані.', ru: 'Её вера закончилась на обмане.', en: 'Her faith ended in deception.' } }
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
            { text: { uk: 'Каменем', ru: 'Камнем', en: 'A stone' }, isCorrect: false, feedback: { uk: 'Навіть камінь знає, що Авель був жертвою.', ru: 'Даже камень знает, что Авель был жертвой.', en: 'Even a stone knows Abel was the victim.' } },
            { text: { uk: 'Нічим', ru: 'Ничем', en: 'Nothing' }, isCorrect: true, feedback: { uk: 'Уважно! Це Каїн убив Авеля, а не навпаки.', ru: 'Внимательно! Это Каин убил Авеля, а не наоборот.', en: 'Careful! Cain killed Abel, not the other way around.' } },
            { text: { uk: 'Палицею', ru: 'Палкой', en: 'A stick' }, isCorrect: false, feedback: { uk: 'Палиці тут не допоможуть поміняти жертву з убивцею.', ru: 'Палки тут не помогут поменять жертву с убийцей.', en: 'Sticks won\'t help swap the victim with the killer here.' } },
            { text: { uk: 'Ножем', ru: 'Ножом', en: 'A knife' }, isCorrect: false, feedback: { uk: 'Ні-і-і, читайте уважніше!', ru: 'Не-е-ет, читайте внимательнее!', en: 'No-o-o, read more carefully!' } }
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
            { text: { uk: 'Ной', ru: 'Ной', en: 'Noah' }, isCorrect: false, feedback: { uk: 'Він рятував життя, а не землю в такому сенсі.', ru: 'Он спасал жизни, а не землю в таком смысле.', en: 'He saved lives, not the earth in that sense.' } },
            { text: { uk: 'Каїн', ru: 'Каин', en: 'Cain' }, isCorrect: false, feedback: { uk: 'Він вбивав, а не доглядав.', ru: 'Он убивал, а не ухаживал.', en: 'He killed, he didn\'t care for.' } },
            { text: { uk: 'Ісус', ru: 'Иисус', en: 'Jesus' }, isCorrect: false, feedback: { uk: 'Ісус — Творець землі, а не її доглядач у цьому сенсі.', ru: 'Иисус — Творец земли, а не её смотритель в этом смысле.', en: 'Jesus is the Creator of the earth, not its caretaker in this sense.' } }
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
            { text: { uk: 'Голуб', ru: 'Голубь', en: 'Dove' }, isCorrect: false, feedback: { uk: 'Голуб приніс гілку Ною, а не сльози Петру.', ru: 'Голубь принес ветку Ною, а не слезы Петру.', en: 'The dove brought a branch to Noah, not tears to Peter.' } },
            { text: { uk: 'Ворон', ru: 'Ворон', en: 'Raven' }, isCorrect: false, feedback: { uk: 'Ворон годував Іллю, а Петру він не допоміг.', ru: 'Ворон кормил Илью, а Петру он не помог.', en: 'The raven fed Elijah, but he didn\'t help Peter.' } },
            { text: { uk: 'Орел', ru: 'Орел', en: 'Eagle' }, isCorrect: false, feedback: { uk: 'Орел літає високо, він не займається сльозами апостолів.', ru: 'Орел летает высоко, он не занимается слезами апостолов.', en: 'The eagle flies high; he doesn\'t deal with apostles\' tears.' } }
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
