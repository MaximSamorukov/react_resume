export const data = {
  ru: {
    name: 'Максим',
    surname: 'Саморуков',
    birthday: '07-12-1981',
    profession: 'фронтенд разработчик',
    contacts: {
      phone: '8-925-026-17-37',
      whatsup: 'whatsup',
      telegram: 'telegram',
      email: 'maxim.samorukov@gmail.com',
      website: 'website',
    },
    profiles: [
      {
        url: 'https://github.com/MaximSamorukov',
        name: 'Github',
      },
      {
        url: 'https://ru.hexlet.io/u/maksim_ralph',
        name: 'Hexlet',
      },
      {
        url: 'https://www.codewars.com/users/Maxim%20Samorukov',
        name: 'Codewars',
      },
      {
        url: 'https://www.linkedin.com/in/maxim-samorukov-a2b10691/',
        name: 'LinkedIn',
      },
    ],
    instruments: [
      {
        label: ['HTML', 'Less', 'SASS'],
      },
      {
        label: ['JavaScript', 'Node.js'],
      },
      {
        label: ['React', 'Redux'],
      },
      {
        label: ['Figma', 'Avocode'],
      },
      {
        label: ['Git'],
      },
      {
        label: ['VSCode', 'Webpack'],
      },
    ],
    experience: [
      {
        company: "Махуру",
        title: "Младший разработчик интерфейсов",
        start: '01.02.2021',
        end: '01.08.2021',
        description: [
          'Участие в проекте поддержки веб приложения (React, TypeScript, SCSS)',
          'Использование библиотек Ant Design, Leaflet',
          'Работа с Rest Api',
          'Система контроля версий Gitlab',
        ]
      },
      {
        company: "Махуру",
        title: "Разработчик интерфейсов",
        start: '01.08.2021',
        end: Date.now(),
        description: [
          'Участие в проекте создания веб приложения (React, TypeScript, SCSS)',
          'Написание функций обработки данных',
          'Написание кастомных хуков',
          'Работа с Rest Api',
          'Система контроля версий Gitlab, Bitbucket',
          'Документация в Confluence',
        ]
      },
    ],
    languages: [
      {
        name: 'english',
        description: 'intermediate',
      },
    ],
    courses: [
      {
        name: 'Hexlet, Фронтенд-разработчик',
        description: [
          'Массивы',
          'Объекты',
          'Функции',
          'Деревья',
          'ООП',
          'Архитектура фронтенд приложений',
          'Протокол HTTP',
          'Ассинхронное программирование',
          'DOM Api',
          'React',
          'Redux',
          'HTTP Server',
          'Express.js',
          'Основы баз данных',
          'Git'
        ]
      },
      {
        name: 'Hexlet, Node.js-разработчик',
        description: [
          'Массивы',
          'Объекты',
          'Функции',
          'Деревья',
          'ООП',
          'Архитектура фронтенд приложений',
          'Протокол HTTP',
          'Ассинхронное программирование',
          'DOM Api',
          'React',
          'Redux',
          'HTTP Server',
          'Express.js',
          'Основы баз данных',
          'Git'
        ],
      },
      {
        name: 'HTML Academy, Фронтенд-разработчик',
        description: ['HTML', 'CSS', 'Less'],
      },
      {
        name: 'RSSchool, Фронтенд-разработчик',
        description: [
          'веб проекты с адаптивным дизайном',
          'SPA (работа со сторонними Api для получения информации, использование local storage)',
        ],
      },
      {
        name: 'RSSchool, Node.js-разработчик',
        description: [
          'создание cli приложения шифрования / дешифрования',
          'создание веб приложения на базе Express, MongoDB с функциями логирования, обработки ошибок, авторизации',
        ],
      },
    ],
    projects: [
      {
        title: 'Covid dashbord. Обработка и представление данных представляемых api.covid19api.com',
        description: 'HTML, CSS, JS',
        repositoryUrl: 'https://github.com/MaximSamorukov/covid',
        taskUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/covid-dashboard.md',
        deployUrl: 'https://pedantic-bhabha-137b93.netlify.app/',
      },
      {
        title: 'Частичная реализация главной страницы сайта https://news.ycombinator.com/news. Тестовое задание на позицию фронтенд разработчик',
        description: 'HTML, CSS, JS, React',
        repositoryUrl: 'https://github.com/MaximSamorukov/avito-test',
        taskUrl: 'https://github.com/avito-tech/sx-frontend-trainee-assignment',
        deployUrl: 'https://determined-noether-6d7cb3.netlify.app/',
      },
      {
        title: 'Фильтр авиа билетов (тестовое задание)',
        description: 'HTML, CSS, JS, React',
        repositoryUrl: 'https://github.com/MaximSamorukov/avia-sales-front-end',
        taskUrl: 'https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend',
        deployUrl: 'https://fervent-fermi-869fdb.netlify.app/',
      },
      {
        title: 'Virtual Keyboard',
        description: 'Виртуальная экранная клавиатура с опцией звукового оформления и возможностью распознования голоса',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/virtual',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data-test/virtual-keyboard',
      },
      {
        title: 'Пятнашки',
        description: 'Игра с возможностью выбора размерности поля и сохранения лучших результатов',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/gem-puzzle',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data-test/gem-puzzle/gem-puzzle/dist/',
      },
      {
        title: 'Charts',
        description: 'Работа с api для получения финансовых новостей и котировок акций. JS, Bootstrap, React, Redux',
        repositoryUrl: 'https://github.com/MaximSamorukov/charts/tree/charts-dev',
        taskUrl: '',
        deployUrl: 'https://goofy-curie-94191e.netlify.app/',
      },
      {
        title: 'Страница для управления ссылками',
        description: 'HTML, CSS, Less, JS',
        repositoryUrl: 'https://github.com/MaximSamorukov/upwork_1',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/upwork_1/index.html',
      },
      {
        title: 'Хекслет-1 Brain games',
        description: 'Приложение командной строки с возможностью выбора и игры в математические игры',
        repositoryUrl: 'https://github.com/MaximSamorukov/frontend-project-lvl1',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'Интерактивная панель (тестовое задание)',
        description: 'JS',
        repositoryUrl: 'https://github.com/MaximSamorukov/globex-it',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/globex-it/index.html',
      },
      {
        title: 'English for kids',
        description: 'Детское приложение для изучения английских слов',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/english-for-kids',
        taskUrl: '',
        deployUrl: 'https://rolling-scopes-school.github.io/maximsamorukov-JS2020Q3/english-for-kids/dist/',
      },
      {
        title: 'Calculator',
        description: 'Стандартный калькулятор с дополнительными функциями',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/calculator',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data/calculator/',
      },
      {
        title: 'Express Rest Service',
        description: 'Node.js, MongoDB. Express приложение реализующее панель задач. Для хранения сущностей user, board, task',
        repositoryUrl: 'https://github.com/MaximSamorukov/nodejs-rss-course',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'CLI tool Caesar cipher',
        description: 'CLI приложение (JS) шифрования / дешифрования текстовой информации с использованием командной сроки или текстовых файлов',
        repositoryUrl: 'https://github.com/MaximSamorukov/caesar-cipher',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'Momentum',
        description: 'Приложение, показывающее погоду в городе по запросу, цитаты известных людей, текущее время, имя пользователя и его цель на текущий день. Фоновое изображение меняется в зависимости от времени суток. Для хранения данных приложение использует локальное хранилище - local storage. Представляемая информация запрашивается из доступных API',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/momentum',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data-test/momentum',
      },
      {
        title: 'Expression-calculator',
        description: 'Функция преобразования и расчет строк с математическими выражениями',
        repositoryUrl: 'https://github.com/MaximSamorukov/expression-calculator',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'Brackets',
        description: 'Решена задача определения сбалансированности строки с различными типами скобок',
        repositoryUrl: 'https://github.com/MaximSamorukov/brackets',
        taskUrl: '',
        deployUrl: '',
      },
    ]
  },
  en: {
    name: 'Maksim',
    surname: 'Samorukov',
    birthday: '07-12-1981',
    profession: 'frontend engineer',
    contacts: {
      phone: '8-925-026-17-37',
      whatsup: 'whatsup',
      telegram: 'telegram',
      email: 'maxim.samorukov@gmail.com',
      website: 'website',
    },
    profiles: [
      {
        url: 'https://github.com/MaximSamorukov',
        name: 'Github',
      },
      {
        url: 'https://ru.hexlet.io/u/maksim_ralph',
        name: 'Hexlet',
      },
      {
        url: 'https://www.codewars.com/users/Maxim%20Samorukov',
        name: 'Codewars',
      },
      {
        url: 'https://www.linkedin.com/in/maxim-samorukov-a2b10691/',
        name: 'LinkedIn',
      },
    ],
    instruments: [
      {
        label: ['HTML', 'Less', 'SASS'],
      },
      {
        label: ['JavaScript', 'Node.js'],
      },
      {
        label: ['React', 'Redux'],
      },
      {
        label: ['Figma', 'Avocode'],
      },
      {
        label: ['Git'],
      },
      {
        label: ['VSCode', 'Webpack'],
      },
    ],
    experience: [
      {
        company: "Махуру",
        title: "Младший разработчик интерфейсов",
        start: '01.02.2021',
        end: '01.08.2021',
        description: [
          'Участие в проекте поддержки веб приложения (React, TypeScript, SCSS)',
          'Использование библиотек Ant Design, Leaflet',
          'Работа с Rest Api',
          'Система контроля версий Gitlab',
        ]
      },
      {
        company: "Махуру",
        title: "Разработчик интерфейсов",
        start: '01.08.2021',
        end: Date.now(),
        description: [
          'Участие в проекте создания веб приложения (React, TypeScript, SCSS)',
          'Написание функций обработки данных',
          'Написание кастомных хуков',
          'Работа с Rest Api',
          'Система контроля версий Gitlab, Bitbucket',
          'Документация в Confluence',
        ]
      },
    ],
    languages: [
      {
        name: 'english',
        description: 'intermediate',
      },
    ],
    courses: [
      {
        name: 'Hexlet, Фронтенд-разработчик',
        description: [
          'Массивы',
          'Объекты',
          'Функции',
          'Деревья',
          'ООП',
          'Архитектура фронтенд приложений',
          'Протокол HTTP',
          'Ассинхронное программирование',
          'DOM Api',
          'React',
          'Redux',
          'HTTP Server',
          'Express.js',
          'Основы баз данных',
          'Git'
        ]
      },
      {
        name: 'Hexlet, Node.js-разработчик',
        description: [
          'Массивы',
          'Объекты',
          'Функции',
          'Деревья',
          'ООП',
          'Архитектура фронтенд приложений',
          'Протокол HTTP',
          'Ассинхронное программирование',
          'DOM Api',
          'React',
          'Redux',
          'HTTP Server',
          'Express.js',
          'Основы баз данных',
          'Git'
        ],
      },
      {
        name: 'HTML Academy, Фронтенд-разработчик',
        description: ['HTML', 'CSS', 'Less'],
      },
      {
        name: 'RSSchool, Фронтенд-разработчик',
        description: [
          'веб проекты с адаптивным дизайном',
          'SPA (работа со сторонними Api для получения информации, использование local storage)',
        ],
      },
      {
        name: 'RSSchool, Node.js-разработчик',
        description: [
          'создание cli приложения шифрования / дешифрования',
          'создание веб приложения на базе Express, MongoDB с функциями логирования, обработки ошибок, авторизации',
        ],
      },
    ],
    projects: [
      {
        title: 'Covid dashbord. Обработка и представление данных представляемых api.covid19api.com',
        description: 'HTML, CSS, JS',
        repositoryUrl: 'https://github.com/MaximSamorukov/covid',
        taskUrl: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/covid-dashboard.md',
        deployUrl: 'https://pedantic-bhabha-137b93.netlify.app/',
      },
      {
        title: 'Частичная реализация главной страницы сайта https://news.ycombinator.com/news. Тестовое задание на позицию фронтенд разработчик',
        description: 'HTML, CSS, JS, React',
        repositoryUrl: 'https://github.com/MaximSamorukov/avito-test',
        taskUrl: 'https://github.com/avito-tech/sx-frontend-trainee-assignment',
        deployUrl: 'https://determined-noether-6d7cb3.netlify.app/',
      },
      {
        title: 'Фильтр авиа билетов (тестовое задание)',
        description: 'HTML, CSS, JS, React',
        repositoryUrl: 'https://github.com/MaximSamorukov/avia-sales-front-end',
        taskUrl: 'https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend',
        deployUrl: 'https://fervent-fermi-869fdb.netlify.app/',
      },
      {
        title: 'Virtual Keyboard',
        description: 'Виртуальная экранная клавиатура с опцией звукового оформления и возможностью распознования голоса',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/virtual',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data-test/virtual-keyboard',
      },
      {
        title: 'Пятнашки',
        description: 'Игра с возможностью выбора размерности поля и сохранения лучших результатов',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/gem-puzzle',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data-test/gem-puzzle/gem-puzzle/dist/',
      },
      {
        title: 'Charts',
        description: 'Работа с api для получения финансовых новостей и котировок акций. JS, Bootstrap, React, Redux',
        repositoryUrl: 'https://github.com/MaximSamorukov/charts/tree/charts-dev',
        taskUrl: '',
        deployUrl: 'https://goofy-curie-94191e.netlify.app/',
      },
      {
        title: 'Страница для управления ссылками',
        description: 'HTML, CSS, Less, JS',
        repositoryUrl: 'https://github.com/MaximSamorukov/upwork_1',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/upwork_1/index.html',
      },
      {
        title: 'Хекслет-1 Brain games',
        description: 'Приложение командной строки с возможностью выбора и игры в математические игры',
        repositoryUrl: 'https://github.com/MaximSamorukov/frontend-project-lvl1',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'Интерактивная панель (тестовое задание)',
        description: 'JS',
        repositoryUrl: 'https://github.com/MaximSamorukov/globex-it',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/globex-it/index.html',
      },
      {
        title: 'English for kids',
        description: 'Детское приложение для изучения английских слов',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/english-for-kids',
        taskUrl: '',
        deployUrl: 'https://rolling-scopes-school.github.io/maximsamorukov-JS2020Q3/english-for-kids/dist/',
      },
      {
        title: 'Calculator',
        description: 'Стандартный калькулятор с дополнительными функциями',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/calculator',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data/calculator/',
      },
      {
        title: 'Express Rest Service',
        description: 'Node.js, MongoDB. Express приложение реализующее панель задач. Для хранения сущностей user, board, task',
        repositoryUrl: 'https://github.com/MaximSamorukov/nodejs-rss-course',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'CLI tool Caesar cipher',
        description: 'CLI приложение (JS) шифрования / дешифрования текстовой информации с использованием командной сроки или текстовых файлов',
        repositoryUrl: 'https://github.com/MaximSamorukov/caesar-cipher',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'Momentum',
        description: 'Приложение, показывающее погоду в городе по запросу, цитаты известных людей, текущее время, имя пользователя и его цель на текущий день. Фоновое изображение меняется в зависимости от времени суток. Для хранения данных приложение использует локальное хранилище - local storage. Представляемая информация запрашивается из доступных API',
        repositoryUrl: 'https://github.com/MaximSamorukov/data-test/tree/momentum',
        taskUrl: '',
        deployUrl: 'https://maximsamorukov.github.io/data-test/momentum',
      },
      {
        title: 'Expression-calculator',
        description: 'Функция преобразования и расчет строк с математическими выражениями',
        repositoryUrl: 'https://github.com/MaximSamorukov/expression-calculator',
        taskUrl: '',
        deployUrl: '',
      },
      {
        title: 'Brackets',
        description: 'Решена задача определения сбалансированности строки с различными типами скобок',
        repositoryUrl: 'https://github.com/MaximSamorukov/brackets',
        taskUrl: '',
        deployUrl: '',
      },
    ]
  },
}