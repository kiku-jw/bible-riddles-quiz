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
            { text: { uk: 'Небо', ru: 'Небо', en: 'Heaven' }, isCorrect: true, feedback: { uk: 'Вірно! В першому вірші Біблії сказано: "На початку Бог створив Небо та Землю". Це як дві основні папки у файловій системі всесвіту!', ru: 'Верно! В первом стихе Библии сказано: "В начале Бог сотворил Небо и Землю". Это как две основные папки в файловой системе вселенной!', en: 'Correct! The first verse of the Bible says: "In the beginning, God created the Heavens and the Earth." Like the two main folders in the universe\'s file system!' } },
            { text: { uk: 'Земля', ru: 'Земля', en: 'Earth' }, isCorrect: true, feedback: { uk: 'Так! Земля — це наш дім, і разом із небом вона складає весь "інвентар" початкового творіння.', ru: 'Да! Земля — это наш дом, и вместе с небом она составляет весь "инвентарь" начального творения.', en: 'Yes! Earth is our home, and along with heaven, it makes up the entire "inventory" of the original creation.' } },
            { text: { uk: 'Сонце', ru: 'Солнце', en: 'Sun' }, isCorrect: false, feedback: { uk: 'Сонце яскраво світить, але воно лише частина неба. Якби воно було всім всесвітом, ми б уже давно стали біблійними грінками!', ru: 'Солнце ярко светит, но оно лишь часть неба. Если бы оно было всей вселенной, мы бы уже давно стали библейскими гренками!', en: 'The sun shines brightly, but it\'s only part of the heavens. If it were the whole universe, we\'d have been biblical croutons long ago!' } },
            { text: { uk: 'Людина', ru: 'Человек', en: 'Man' }, isCorrect: false, feedback: { uk: 'Людина — це корона творіння, але короні потрібне місце, де стояти! Небо і земля були першими в черзі на створення.', ru: 'Человек — это корона творения, но короне нужно место, где стоять! Небо и земля были первыми в очереди на создание.', en: 'Man is the crown of creation, but a crown needs a place to stand! The heavens and the earth were first in line for creation.' } }
        ]
    },
{
        id: 2,
        type: 'single',
        question: {
            uk: 'Хто отримав велике благословення від Бога за те, що проявив міцну віру?',
            ru: 'Кто получил великое благословение от Бога за то, что проявил крепкую веру?',
            en: 'Who received a great blessing from God for displaying strong faith?'
        },
        hint: {
            uk: 'Вона жила в Єрихоні і сховала соглядатаїв.',
            ru: 'Она жила в Иерихоне и спрятала соглядатаев.',
            en: 'She lived in Jericho and hid the spies.'
        },
        image: '/bible-riddles-quiz/illustrations/q24.png',
        options: [
            { text: { uk: 'Рахав', ru: 'Раав', en: 'Rahab' }, isCorrect: true, feedback: { uk: 'Вірно! Вона була блудницею, але через свою віру врятувала сім’ю і потрапила в родовід самого Ісуса. Справжній подарунок милості!', ru: 'Верно! Она была блудницей, но благодаря своей вере спасла семью и попала в родословную самого Иисуса. Настоящий подарок милости!', en: 'Correct! She was a harlot, but through her faith, she saved her family and entered the lineage of Jesus himself. A true gift of grace!' } },
            { text: { uk: 'Єзавель', ru: 'Иезавель', en: 'Jezebel' }, isCorrect: false, feedback: { uk: 'Єзавель більше цікавилася фарбою для очей та підступними планами, ніж вірою. Такі благословення не для неї!', ru: 'Иезавель больше интересовалась краской для глаз и коварными планами, чем верой. Такие благословения не для нее!', en: 'Jezebel was more into eye paint and devious plans than faith. Such blessings weren\'t for her!' } },
            { text: { uk: 'Даліла', ru: 'Далида', en: 'Delilah' }, isCorrect: false, feedback: { uk: 'Далілу більше цікавили срібні монети та зачіска Самсона. Вона була майстром манікюру, а не порятунку шпигунів!', ru: 'Далиду больше интересовали серебряные монеты и прическа Самсона. Она была мастером маникюра, а не спасения соглядатаев!', en: 'Delilah was more interested in silver coins and Samson\'s hairstyle. She was a manicure master, not a spy rescuer!' } },
            { text: { uk: 'Сапфіра', ru: 'Сапфира', en: 'Sapphira' }, isCorrect: false, feedback: { uk: 'Сапфіра хотіла і Богу послужити, і гаманець притримати. У підсумку — ні грошей, ні благословення, ні життя. Не найкраща стратегія!', ru: 'Сапфира хотела и Богу послужить, и кошелек придержать. В итоге — ни денег, ни благословения, ни жизни. Не лучшая стратегия!', en: 'Sapphira wanted to serve God while holding onto her wallet. In the end—no money, no blessing, and no life. Not the best strategy!' } }
        ]
    },
{
        id: 3,
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
        id: 4,
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
            { text: { uk: 'Левова лапа', ru: 'Львиная лапа', en: 'Lion\'s paw' }, isCorrect: false, feedback: { uk: 'Лапа лева — грізна річ, але Самсон волів використовувати те, що буквально валялося під ногами на дорозі!', ru: 'Лапа льва — грозная штука, но Самсон предпочитал использовать то, что буквально валялось под ногами на дороге!', en: 'A lion\'s paw is fearsome, but Samson preferred to use what was literally lying under his feet on the road!' } },
            { text: { uk: 'Роги бика', ru: 'Рога быка', en: 'Bull\'s horns' }, isCorrect: false, feedback: { uk: 'Роги — це для биків, а Самсон був майстром імпровізації!', ru: 'Рога — это для быков, а Самсон был мастером импровизации!', en: 'Horns are for bulls, but Samson was a master of improvisation!' } },
            { text: { uk: 'Крила орла', ru: 'Крылья орла', en: 'Eagle\'s wings' }, isCorrect: false, feedback: { uk: 'Уяви Самсона, що розмахує орлиними крилами в бою... Це було б гарно, але неефективно!', ru: 'Представь Самсона, размахивающего орлиными крыльями в бою... Это было бы красиво, но неэффективно!', en: 'Imagine Samson waving eagle wings in battle... It would be beautiful, but not very effective!' } }
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
        image: '/bible-riddles-quiz/illustrations/q3_first_surgeon.png',
        options: [
            { text: { uk: 'Лука', ru: 'Лука', en: 'Luke' }, isCorrect: false, feedback: { uk: 'Він був лікарем, але не першим, хто проводив складні процедури в Едемі!', ru: 'Он был врачом, но не первым, кто проводил сложные процедуры в Эдеме!', en: 'He was a doctor, but not the first to perform complex procedures in Eden!' } },
            { text: { uk: 'Бог Єгова', ru: 'Бог Иегова', en: 'Jehovah God' }, isCorrect: true, feedback: { uk: 'Так, Він взяв ребро Адама, щоб створити Єву. Справжня творча мудрість!', ru: 'Да, Он взял ребро Адама, чтобы создать Еву. Настоящая творческая мудрость!', en: 'Yes, He took Adam\'s rib to create Eve. True creative wisdom!' } },
            { text: { uk: 'Мойсей', ru: 'Моисей', en: 'Moses' }, isCorrect: false, feedback: { uk: 'Він робив багато чудес, але не першу операцію.', ru: 'Он совершал много чудес, но не первую операцию.', en: 'He performed many signs, but not the first surgery.' } },
            { text: { uk: 'Адам', ru: 'Адам', en: 'Adam' }, isCorrect: false, feedback: { uk: 'Адам був пацієнтом, а не лікарем!', ru: 'Адам был пациентом, а не врачом!', en: 'Adam was the patient, not the doctor!' } }
        ]
    },
{
        id: 6,
        type: 'single',
        question: {
            uk: 'Хто зрубав чужий стовп і не запитав господаря, але вчинив правильно?',
            ru: 'Кто срубил чужой столб и не спросил хозяина, но поступил правильно?',
            en: 'Who cut down someone else\'s pole without asking but did the right thing?'
        },
        hint: {
            uk: 'Це був стовп, присвячений фальшивому богу Ваалу.',
            ru: 'Это был столб, посвященный ложному богу Ваалу.',
            en: 'It was a pole dedicated to the false god Baal.'
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
        id: 7,
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
        id: 8,
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
            { text: { uk: 'Вавилон', ru: 'Вавилон', en: 'Babylon' }, isCorrect: false, feedback: { uk: 'Вавилонську вежу будували на гордості, кирпичах та бітумі, а не на житті дітей. Але закінчилося все одно великою плутаниною!', ru: 'Вавилонскую башню строили на гордости, кирпичах и битуме, а не на жизни детей. Но закончилось всё равно великой путаницей!', en: 'The Tower of Babel was built on pride, bricks, and bitumen, not on the lives of children. But it still ended in a massive identity crisis!' } },
            { text: { uk: 'Єрихон', ru: 'Иерихон', en: 'Jericho' }, isCorrect: true, feedback: { uk: 'Так! Хіїл з Бет-Еля відбудував його, втративши старшого сина Авірама та молодшого Сегуба, як і пророкував Ісус Навин. Пророцтва не жартують!', ru: 'Да! Хиил из Вефиля отстроил его, потеряв старшего сына Авирама и младшего Сегуба, как и пророчествовал Иисус Навин. Пророчества не шутят!', en: 'Yes! Hiel of Bethel rebuilt it at the cost of his firstborn Abiram and his youngest son Segub, just as Joshua had prophesied. Prophecies don\'t play around!' } },
            { text: { uk: 'Ніневія', ru: 'Ниневия', en: 'Nineveh' }, isCorrect: false, feedback: { uk: 'У Ніневії всі покаялися — навіть тварини вдягли волосяницю! Але будували це місто без таких страшних сімейних проклять.', ru: 'В Ниневии все покаялись — даже животные надели власяницу! Но строили этот город без таких страшных семейных проклятий.', en: 'In Nineveh, everyone repented—even the animals wore sackcloth! But they built the city without such terrible family curses.' } },
            { text: { uk: 'Содом', ru: 'Содом', en: 'Sodom' }, isCorrect: false, feedback: { uk: 'Содом зник так швидко, що його навіть не встигли забронювати для відбудови. Тільки попіл і солоні спогади...', ru: 'Содом исчез так быстро, что его даже не успели забронировать для восстановления. Только пепел и соленые воспоминания...', en: 'Sodom vanished so fast no one even had time to book a renovation. Just ashes and salty memories...' } }
        ]
    },
{
        id: 9,
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
            { text: { uk: 'По одній парі', ru: 'По одной паре', en: 'One pair each' }, isCorrect: false, feedback: { uk: 'Мойсей був зайнятий заповідями на Синаї, а не будівництвом плавучих зоопарків!', ru: 'Моисей был занят заповедями на Синае, а не строительством плавучих зоопарков!', en: 'Moses was busy with the commandments on Sinai, not building floating zoos!' } },
            { text: { uk: 'По сім пар', ru: 'По семь пар', en: 'Seven pairs each' }, isCorrect: false, feedback: { uk: 'Навіть якби тварин було сім пар, цей капітан був майстром заповідей на горі, а не мореплавцем у шторм!', ru: 'Даже если бы животных было семь пар, этот капитан был мастером заповедей на горе, а не мореплавателем в шторм!', en: 'Even if there were seven pairs, this captain was a master of commandments on a mountain, not a sailor in a storm!' } },
            { text: { uk: 'Жодної', ru: 'Ни одной', en: 'None' }, isCorrect: true, feedback: { uk: 'Бінго! Ковчег будував Ной, а Мойсей у цей час ще навіть не народився. Уважність — твоя суперсила!', ru: 'Бинго! Ковчег строил Ной, а Моисей в это время еще даже не родился. Внимательность — твоя суперсила!', en: 'Bingo! Noah built the ark, and Moses wasn\'t even born yet. Attentiveness is your superpower!' } },
            { text: { uk: 'Всіх тварин світу', ru: 'Всех животных мира', en: 'All animals of the world' }, isCorrect: false, feedback: { uk: 'Мойсей розділяв море, а не збирав пасажирів на круїз. Це був би дуже довгий квитковий контроль!', ru: 'Моисей разделял море, а не собирал пассажиров на круиз. Это был бы очень длинный билетный контроль!', en: 'Moses parted the sea, he didn\'t collect passengers for a cruise. That would be one long ticket check!' } }
        ]
    },
{
        id: 10,
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
            { text: { uk: 'Авессалом', ru: 'Авессалом', en: 'Absalom' }, isCorrect: true, feedback: { uk: 'Так, він заплутався волоссям у гілках терпентинового дерева. Сумний кінець для того, хто повстав проти свого батька!', ru: 'Да, он запутался волосами в ветвях терпентинового дерева. Печальный конец для того, кто восстал против своего отца!', en: 'Yes, he got caught by his hair in the branches of a terebinth tree. A sad end for one who rebelled against his father!' } },
            { text: { uk: 'Ісая', ru: 'Исаия', en: 'Isaiah' }, isCorrect: false, feedback: { uk: 'Його шлях закінчився інакше.', ru: 'Его путь закончился иначе.', en: 'His journey ended differently.' } },
            { text: { uk: 'Степан', ru: 'Стефан', en: 'Stephen' }, isCorrect: false, feedback: { uk: 'Він помер на землі, бачачи відкрите небо.', ru: 'Он умер на земле, видя открытое небо.', en: 'He died on earth, seeing the heavens open.' } }
        ]
    },
{
        id: 11,
        type: 'single',
        question: {
            uk: 'Не народжувався, не вмирав, але їв подібних собі',
            ru: 'Не рождался, не умирал, но ел себе подобных',
            en: 'Was not born, did not die, but ate its own kind'
        },
        hint: {
            uk: 'Дивись у книгу Вихід',
            ru: 'В книге Исход',
            en: 'In the book of Exodus'
        },
        image: '/bible-riddles-quiz/illustrations/q7_moses_staff.png',
        options: [
            { text: { uk: 'Посох Мойсея', ru: 'Посох Моисея', en: 'Moses\'s staff' }, isCorrect: true, feedback: { uk: 'Вірно! Посох Мойсея перетворився на змію і поглинув змій єгипетських чарівників.', ru: 'Верно! Посох Моисея превратился в змею и поглотил змей египетских волхвов.', en: 'Correct! Moses\'s staff turned into a snake and swallowed the snakes of the Egyptian magicians.' } },
            { text: { uk: 'Левіафан', ru: 'Левиафан', en: 'Leviathan' }, isCorrect: false, feedback: { uk: 'Левіафан — грізна істота, але він народжувався і навряд чи займався такими фокусами!', ru: 'Левиафан — грозное существо, но он рождался и вряд ли занимался такими фокусами!', en: 'Leviathan is a fearsome creature, but it was born and unlikely to perform such tricks!' } },
            { text: { uk: 'Динозавр', ru: 'Динозавр', en: 'Dinosaur' }, isCorrect: false, feedback: { uk: 'Динозаври залишили нам лише кістки, а не загадки про безсмертя!', ru: 'Динозавры оставили нам только кости, а не загадки о бессмертии!', en: 'Dinosaurs only left us bones, not riddles about immortality!' } },
            { text: { uk: 'Жаба', ru: 'Лягушка', en: 'Frog' }, isCorrect: false, feedback: { uk: 'Жаби вміють квакати, але щоб їсти собі подібних у такому сенсі... це вже фільм жахів!', ru: 'Лягушки умеют квакать, но чтобы есть себе подобных в таком смысле... это уже фильм ужасов!', en: 'Frogs can croak, but eating their own kind in this sense... that\'s a horror movie!' } }
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
            { text: { uk: 'Йов', ru: 'Иов', en: 'Job' }, isCorrect: true, feedback: { uk: 'Вірно! В момент глибокого болю Йов зробив це, але пізніше Бог відновив його і дав ще більше благословень.', ru: 'Верно! В момент глубокой боли Иов сделал это, но позже Бог восстановил его и дал еще больше благословений.', en: 'Correct! In a moment of deep pain, Job did this, but later God restored him and gave him even more blessings.' } },
            { text: { uk: 'Давид', ru: 'Давид', en: 'David' }, isCorrect: false, feedback: { uk: 'Давид був музикантом і поетом. Навіть у смутку він брав гуслі та писав псалми, а не кляв свій день народження!', ru: 'Давид был музыкантом и поэтом. Даже в печали он брал гусли и писал псалмы, а не проклинал свой день рождения!', en: 'David was a musician and poet. Even in sadness, he took his harp and wrote psalms instead of cursing his birthday!' } },
            { text: { uk: 'Соломон', ru: 'Соломон', en: 'Solomon' }, isCorrect: false, feedback: { uk: 'Соломон сказав: "Усе марнота", але він надто любив розкіш та мудрість, щоб проклинати день своєї появи на світ!', ru: 'Соломон сказал: "Все суета", но он слишком любил роскошь и мудрость, чтобы проклинать день своего появления на свет!', en: 'Solomon said "Everything is vanity", but he loved luxury and wisdom too much to curse the day he entered the world!' } },
            { text: { uk: 'Петро', ru: 'Петр', en: 'Peter' }, isCorrect: false, feedback: { uk: 'Петро плакав так гірко, що міг би наповнити Галілейське море, але свій день народження він все ж таки цінував!', ru: 'Петр плакал так горько, что мог бы наполнить Галилейское море, но свой день рождения он все же ценил!', en: 'Peter wept so bitterly he could have filled the Sea of Galilee, but he still valued his birthday!' } }
        ]
    },
{
        id: 13,
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
        id: 14,
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
        id: 15,
        type: 'single',
        question: {
            uk: 'На якій полиці в ковчезі Ной тримав Біблію?',
            ru: 'На какой полке в ковкеге Ной держал Библию?',
            en: 'On which shelf in the ark did Noah keep the Bible?'
        },
        hint: {
            uk: 'Коли була написана Біблія?',
            ru: 'Когда была написана Библия?',
            en: 'When was the Bible written?'
        },
        image: '/bible-riddles-quiz/illustrations/q14.png',
        options: [
            { text: { uk: 'На верхній', ru: 'На верхней', en: 'On the top shelf' }, isCorrect: false, feedback: { uk: 'Там були пташки, але точно не книги!', ru: 'Там были птицы, но точно не книги!', en: 'There were birds there, but definitely no books!' } },
            { text: { uk: 'На нижній', ru: 'На нижней', en: 'On the bottom shelf' }, isCorrect: false, feedback: { uk: 'Там панував слонячий тупіт, а не тиша бібліотеки.', ru: 'Там царил слоновий топот, а не тишина библиотеки.', en: 'There was the thumping of elephants there, not the silence of a library.' } },
            { text: { uk: 'Ні на якій', ru: 'Ни на какой', en: 'On none' }, isCorrect: true, feedback: { uk: 'Правильно! Тоді Біблії ще не існувало. Але творіння Єгови були для Ноя наче відкрита книга.', ru: 'Верно! Тогда Библии еще не существовало. Но творения Иеговы были для Ноя словно открытая книга.', en: 'Correct! The Bible didn\'t exist then. But Jehovah\'s creations were like an open book for Noah.' } },
            { text: { uk: 'У каюті', ru: 'В каюте', en: 'In the cabin' }, isCorrect: false, feedback: { uk: 'Каюти були, а Біблії — ні.', ru: 'Каюты были, а Біблії — ні.', en: 'There were cabins, but no Bibles.' } }
        ]
    },
{
        id: 16,
        type: 'single',
        question: {
            uk: 'Яка морська "тварина" була присутня при страті Ісуса Христа?',
            ru: 'Какое морское "животное" присутствовало при казни Иисуса Христа?',
            en: 'Which sea "animal" was present at the execution of Jesus Christ?'
        },
        hint: {
            uk: 'Її намочили в оцет і піднесли до уст Ісуса (Мт 27:48; Мр 15:36; Ів 19:29).',
            ru: 'Её намочили в уксус и поднесли к устам Иисуса (Мф 27:48; Мк 15:36; Ин 19:29).',
            en: 'It was soaked in vinegar and held up to Jesus\'s mouth (Matt 27:48; Mark 15:36; John 19:29).'
        },
        image: '/bible-riddles-quiz/illustrations/q10_sponge.png',
        options: [
            { text: { uk: 'Кит', ru: 'Кит', en: 'Whale' }, isCorrect: false, feedback: { uk: 'Кит був зайнятий Йоною, на Голгофі йому було б затісно!', ru: 'Кит был занят Ионой, на Голгофе ему было бы тесновато!', en: 'The whale was busy with Jonah; it would have been too cramped on Golgotha!' } },
            { text: { uk: 'Губка', ru: 'Губка', en: 'Sponge' }, isCorrect: true, feedback: { uk: 'Так! З точки зору біології губка — це багатоклітинна морська тварина. Саме її наповнили оцтом і дали Ісусу. Несподівано, правда?', ru: 'Да! С точки зрения биологии губка — это многоклеточное морское животное. Именно её наполнили уксусом и дали Иисусу. Неожиданно, правда?', en: 'Yes! Biologically, a sponge is a multicellular sea animal. It was filled with vinegar and given to Jesus. Unexpected, right?' } },
            { text: { uk: 'Дельфін', ru: 'Дельфин', en: 'Dolphin' }, isCorrect: false, feedback: { uk: 'Дельфіни — розумні, але вони плавали в морі, а не знаходилися на місці страти.', ru: 'Дельфины — умные, но они плавали в море, а не находились на месте казни.', en: 'Dolphins are smart, but they were swimming in the sea, not hanging around the execution site.' } },
            { text: { uk: 'Акула', ru: 'Акула', en: 'Shark' }, isCorrect: false, feedback: { uk: 'Акули — грізні хижаки, але в біблійній історії про страту вони не згадуються.', ru: 'Акулы — грозные хищники, но в библейской истории о казни они не упоминаются.', en: 'Sharks are fearsome, but they aren\'t mentioned in the biblical account of the execution.' } }
        ]
    },
{
        id: 17,
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
        image: '/bible-riddles-quiz/illustrations/q10_salt_pillar.png',
        options: [
            { text: { uk: 'Єва', ru: 'Ева', en: 'Eve' }, isCorrect: false, feedback: { uk: 'Єва полюбляла яблука та фігове листя, а не відділ бакалії!', ru: 'Ева любила яблоки и фиговые листья, а не отдел бакалеи!', en: 'Eve liked apples and fig leaves, not the grocery aisle!' } },
            { text: { uk: 'Дружина Лота', ru: 'Жена Лота', en: 'Lot\'s wife' }, isCorrect: true, feedback: { uk: 'Так! Вона стала соляним стовпом.', ru: 'Да! Она стала соляным столпом.', en: 'Yes! She became a pillar of salt.' } },
            { text: { uk: 'Сарра', ru: 'Сарра', en: 'Sarah' }, isCorrect: false, feedback: { uk: 'Сарра була принцесою, вона віддавала перевагу прикрасам, а не кулінарним спеціям!', ru: 'Сарра была принцессой, она предпочитала украшения, а не кулинарные специи!', en: 'Sarah was a princess, she preferred jewelry over culinary spices!' } },
            { text: { uk: 'Ревека', ru: 'Ревекка', en: 'Rebekah' }, isCorrect: false, feedback: { uk: 'Ревека напувала верблюдів, а не перетворювалася на товар для кухні!', ru: 'Ревекка поила верблюдов, а не превращалась в товар для кухни!', en: 'Rebekah watered camels, she didn\'t turn into a kitchen commodity!' } }
        ]
    },
{
        id: 18,
        type: 'single',
        question: {
            uk: 'Скільки людей у Біблії називаються "апостолами"?',
            ru: 'Сколько человек в Библии называются "апостолами"?',
            en: 'How many people in the Bible are called "apostles"?'
        },
        hint: {
            uk: 'Не забувай про Павла, Варнаву та найголовнішого Посланця.',
            ru: 'Не забывай про Павла, Варнаву и самого главного Посланника.',
            en: 'Don\'t forget Paul, Barnabas, and the most important Messenger.'
        },
        image: '/bible-riddles-quiz/illustrations/q9.png',
        options: [
            { text: { uk: '12', ru: '12', en: '12' }, isCorrect: false, feedback: { uk: 'Це лише початкова група учнів Ісуса. У Біблії цей список ширший!', ru: 'Это только начальная группа учеников Иисуса. В Библии этот список шире!', en: 'That\'s just the initial group of Jesus\'s disciples. The biblical list is broader!' } },
            { text: { uk: '13', ru: '13', en: '13' }, isCorrect: false, feedback: { uk: 'Близько, але все ще мало. Число апостолів у тексті Біблії вас здивує!', ru: 'Близко, но всё ещё мало. Число апостолов в тексте Библии вас удивит!', en: 'Close, but still too few. The number of apostles in the Bible will surprise you!' } },
            { text: { uk: '16', ru: '16', en: '16' }, isCorrect: true, feedback: { uk: 'Вірно! Крім 12-ти, це ще Матфій, Павло, Варнава та сам Ісус (Євр. 3:1 називає його "Апостолом нашого визнання").', ru: 'Верно! Кроме 12-ти, это ещё Матфий, Павел, Варнава и сам Иисус (Евр. 3:1 называет его "Апостолом нашего исповедания").', en: 'Correct! Besides the 12, there are Matthias, Paul, Barnabas, and Jesus himself (Heb. 3:1 calls him the "Apostle of our confession").' } },
            { text: { uk: '70', ru: '70', en: '70' }, isCorrect: false, feedback: { uk: '70 учнів були послані проповідувати, але Біблія не називає їх усіх апостолами.', ru: '70 учеников были посланы проповедовать, но Библия не называет их всех апостолами.', en: '70 disciples were sent to preach, but the Bible doesn\'t call them all apostles.' } }
        ]
    },
{
        id: 19,
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
            { text: { uk: 'Дно Червоного моря', ru: 'Дно Красного моря', en: 'The bottom of the Red Sea' }, isCorrect: true, feedback: { uk: 'Саме так! Коли води розійшлися, це місце вперше і востаннє побачило світло цього світу.', ru: 'Именно так! Когда воды разошлись, это место впервые и в последний раз увидело свет этого мира.', en: 'Exactly! When the waters parted, this place saw the light of this world for the first and last time.' } },
            { text: { uk: 'Гора Сінай', ru: 'Гора Синай', en: 'Mount Sinai' }, isCorrect: false, feedback: { uk: 'Вона стоїть на видноті тисячі років. Сонце там — постійний гість, а не випадковий перехожий.', ru: 'Она стоит на виду тысячи лет. Солнце там — постоянный гость, а не случайный прохожий.', en: 'It has been in plain sight for thousands of years. The sun is a permanent guest there, not a passerby.' } },
            { text: { uk: 'Верхівка Арарату', ru: 'Вершина Арарата', en: 'The top of Ararat' }, isCorrect: false, feedback: { uk: 'Верхівка гори першою висунулася з води, щоб Ной міг погрітися на сонечку. Вона бачить світ щодня!', ru: 'Верхушка горы первой высунулась из воды, чтобы Ной мог погреться на солнышке. Она видит свет каждый день!', en: 'The mountain top was the first to pop out of the water so Noah could catch some rays. It sees light every day!' } }
        ]
    },
{
        id: 20,
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
            { text: { uk: 'Авессалом', ru: 'Авессалом', en: 'Absalom' }, isCorrect: true, feedback: { uk: 'Так! Він поставив собі пам’ятник, бо не мав синів. Пиха та марнославство до добра не доводять.', ru: 'Да! Он поставил себе памятник, так как у него не было сыновей. Гордость и тщеславие до добра не доводят.', en: 'Yes! He set up a pillar for himself because he had no son. Pride and vanity don\'t lead to anything good.' } },
            { text: { uk: 'Адонія', ru: 'Адония', en: 'Adonijah' }, isCorrect: false, feedback: { uk: 'Адонія хотів приміряти корону, а не позувати для скульптора!', ru: 'Адония хотел примерить корону, а не позировать для скульптора!', en: 'Adonijah wanted to try on the crown, not pose for a sculptor!' } },
            { text: { uk: 'Амнон', ru: 'Амнон', en: 'Amnon' }, isCorrect: false, feedback: { uk: 'Амнон думав про зовсім інші речі, пам’ятники його не цікавили.', ru: 'Амнон думал о совсем других вещах, памятники его не интересовали.', en: 'Amnon had other things on his mind; he wasn\'t interested in monuments.' } }
        ]
    },
{
        id: 21,
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
        image: '/bible-riddles-quiz/illustrations/q4_talking_animals.png',
        options: [
            { text: { uk: 'Змій', ru: 'Змей', en: 'Serpent' }, isCorrect: true, feedback: { uk: 'Так, в Едемі змій заговорив першим.', ru: 'Да, в Эдеме змей заговорил первым.', en: 'Yes, the serpent spoke first in Eden.' } },
            { text: { uk: 'Лев', ru: 'Лев', en: 'Lion' }, isCorrect: false, feedback: { uk: 'Лев, що розмовляє? Це тобі не Нарнія!', ru: 'Говорящий лев? Это тебе не Нарния!', en: 'A talking lion? This isn\'t Narnia!' } },
            { text: { uk: 'Ослиця', ru: 'Ослица', en: 'Donkey' }, isCorrect: true, feedback: { uk: 'Вірно! Ослиця Валаама заговорила на дорозі.', ru: 'Верно! Ослица Валаама заговорила на дороге.', en: 'Correct! Balaam\'s donkey spoke on the road.' } },
            { text: { uk: 'Голуб', ru: 'Голубь', en: 'Dove' }, isCorrect: false, feedback: { uk: 'Голуб приніс оливкову гілку, а не виголошував промову.', ru: 'Голубь принес оливковую ветвь, а не произносил речь.', en: 'The dove brought an olive branch, it didn\'t give a speech.' } }
        ]
    },
{
        id: 22,
        type: 'single',
        question: {
            uk: 'Хто в Біблії вигукував "Ага!"?',
            ru: 'Кто в Библии восклицал "Ага!"?',
            en: 'Who in the Bible shouted "Aha!"?'
        },
        hint: {
            uk: 'Подивись опис бойової тварини у книзі Йова.',
            ru: 'Посмотри описание боевого животного в книге Иова.',
            en: 'Look at the description of a war animal in the book of Job.'
        },
        image: '/bible-riddles-quiz/illustrations/q16.png',
        options: [
            { text: { uk: 'Осел', ru: 'Осел', en: 'Donkey' }, isCorrect: false, feedback: { uk: 'Осел видає зовсім інші звуки... Хіба що він намагався пародіювати коня!', ru: 'Осел издает совсем другие звуки... Разве что он пытался пародировать коня!', en: 'A donkey makes completely different sounds... Unless he was trying to parody a horse!' } },
            { text: { uk: 'Кінь', ru: 'Конь', en: 'Horse' }, isCorrect: true, feedback: { uk: 'Так! У книзі Йова 39:25 бойовий кінь так реагує на запах битви. Скарбничка біблійних звуків поповнена!', ru: 'Да! В книге Иова 39:25 боевой конь так реагирует на запах битвы. Копилка библейских звуков пополнена!', en: 'Yes! In Job 39:25, a war horse reacts this way to the scent of battle. Your collection of biblical sounds is growing!' } },
            { text: { uk: 'Бегемот', ru: 'Бегемот', en: 'Behemoth' }, isCorrect: false, feedback: { uk: 'Бегемот — солідна тварина, він просто робить "Пф-ф-ф" і всі розбігаються. Бойове мижання — не його стиль!', ru: 'Бегемот — солидное животное, он просто делает "Пф-ф-ф" и все разбегаются. Боевое ржание — не его стиль!', en: 'The Behemoth is a solid beast; he just goes "Pff-f" and everyone scatters. Battle neighing is not his style!' } },
            { text: { uk: 'Левіафан', ru: 'Левиафан', en: 'Leviathan' }, isCorrect: false, feedback: { uk: 'Левіафан дихає вогнем і мешкає в морі. Уявити його кінське ржання під водою... це була б справжня русалонька-мутант!', ru: 'Левиафан дышит огнем и обитает в море. Представить его конское ржание под водой... это была бы настоящая русалочка-мутант!', en: 'Leviathan breathes fire and lives in the sea. Imagining him neighing like a horse underwater... that would be one mutant mermaid!' } }
        ]
    },
{
        id: 23,
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
        id: 24,
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
        id: 25,
        type: 'single',
        question: {
            uk: 'Смерть змушувала ізраїльтян увійти туди, смерть також змушувала вийти. Але якщо вони виходили з власної волі, то помирали. Що це?',
            ru: 'Смерть заставляла израильтян войти туда, смерть также заставляла выйти. Но если они выходили по своей воле, то умирали. Что это?',
            en: 'Death forced the Israelites to enter there, death also forced them to leave. But if they left by their own will, they would die. What is it?'
        },
        hint: {
            uk: 'Це були спеціальні міста для тих, хто випадково вбив людину.',
            ru: 'Это были специальные города для тех, кто случайно убил человека.',
            en: 'These were special cities for those who accidentally killed someone.'
        },
        image: '/bible-riddles-quiz/illustrations/q25_cities_of_refuge.png',
        options: [
            { text: { uk: 'Міста-сховища', ru: 'Города-убежища', en: 'Cities of Refuge' }, isCorrect: true, feedback: { uk: 'Вірно! Людина тікала туди від месника (смерті), виходила після смерті первосвященника, а вийти раніше означало підставити себе під удар.', ru: 'Верно! Человек бежал туда от мстителя (смерти), выходил после смерти первосвященника, а выйти раньше означало подставить себя под удар.', en: 'Correct! A person fled there from the avenger (death), left after the high priest\'s death, and leaving early meant risking their life.' } },
            { text: { uk: 'Труна (гроб)', ru: 'Гроб', en: 'Grave' }, isCorrect: false, feedback: { uk: 'Труна — це кінець шляху, але з неї не виходять живими за розкладом!', ru: 'Гроб — это конец пути, но из него не выходят живыми по расписанию!', en: 'A grave is the end of the road, but you don\'t walk out of it alive on a schedule!' } },
            { text: { uk: 'Гріх', ru: 'Грех', en: 'Sin' }, isCorrect: false, feedback: { uk: 'Гріх веде до смерті, але це не географічне місце, де можна сховатися.', ru: 'Грех ведет к смерти, но это не географическое место, где можно спрятаться.', en: 'Sin leads to death, but it\'s not a geographic place where you can hide.' } },
            { text: { uk: 'Битва', ru: 'Битва', en: 'Battle' }, isCorrect: false, feedback: { uk: 'У битві смерть всюди, але правила входу та виходу там зовсім інші!', ru: 'В битве смерть повсюду, но правила входа и выхода там совсем другие!', en: 'In battle, death is everywhere, but the rules of entry and exit are quite different!' } }
        ]
    },
{
        id: 26,
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
        id: 27,
        type: 'finale',
        text: {
            uk: 'Ти пройшов усі загадки! Твій розум гострий, а знання Біблії вражають. Продовжуй досліджувати Слово Бога!',
            ru: 'Ты прошел все загадки! Твой ум остр, а знания Библии впечатляют. Продолжай исследовать Слово Бога!',
            en: 'You passed all the riddles! Your mind is sharp, and your knowledge of the Bible is impressive. Keep exploring God\'s Word!'
        },
        image: '/bible-riddles-quiz/illustrations/finale.png'
    }
];
export const totalQuestions = quizData.filter(q => q.type === "single" || q.type === "multi").length;
