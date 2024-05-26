export const bio = {
  name: {
    key: 'ФИО',
    name: "Максим",
    surname: "Саморуков",
    lastname: "Львович",
  },
  birthday: {
    key: 'Дата рождения',
    value: "07-12-1981",
  },
  profession: {
    key: 'Позиция',
    value: "фронтенд разработчик",
  },
  contacts: {
    key: 'Контакты',
    value: [
      {
        name: 'phone',
        phone: [
          {
            country: 'GE',
            phone: '+995-591-992-362',
            active: false,
          },
          {
            country: 'RU',
            phone: "8-925-026-17-37",
            active: true,
          },
        ],
      },
      {
        name: 'email',
        link: "maxim.samorukov@gmail.com",
      },
      {
        name: 'whatsapp',
        link: "https://call.whatsapp.com/voice/ORXG22bF9a3jjSlXv0VRQg",
        string: 'позвонить...'
      },
      {
        name: 'telegram',
        link: "https://t.me/Maksim_Samorukov",
        string: 'отправить сообщение',
      },
      {
        name: 'website',
        link: "https://react-resume-sandy.vercel.app/",
      },
    ],
  },
}