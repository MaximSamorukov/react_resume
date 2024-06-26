export const bio = {
  name: {
    key: 'Fullname',
    name: "Maksim",
    surname: "Samorukov",
    lastname: "Lvovich",
  },
  birthday: {
    key: 'Birthday',
    value: "07-12-1981",
  },
  profession: {
    key: 'Position',
    value: "frontend developer",
  },
  contacts: {
    key: 'Contacts',
    value: [
      {
        name: 'phone',
        active: false,
        phone: [
          {
            country: 'GE',
            phone: '+995-591-992-362',
            active: false,
          },
          {
            country: 'RU',
            phone: "+7-925-026-17-37",
            active: false,
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
        string: 'make a call...'
      },
      {
        name: 'telegram',
        link: "https://t.me/Maksim_Samorukov",
        string: 'send a message',
      },
      {
        name: 'website',
        link: "https://react-resume-sandy.vercel.app/",
      },
    ],
  },
};
