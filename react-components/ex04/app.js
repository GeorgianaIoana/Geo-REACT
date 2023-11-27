const person = {
  name: 'Ding',
  surname: 'Liren',
  age: 32,
  petOwner: true,
  skills: {
    html: true,
    css: false,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Garry',
      surname: 'Kasparov',
      age: 30,
    },
    steven: {
      name: 'Judit',
      surname: 'Polgar',
      age: 31,
    },
    carol: {
      name: 'Magnus',
      age: 29,
      surname: 'Carlsen',
    },
  },
};

console.warn(`
  1.Folosind Object.entries() pe proprietatea skills,
  afiseaza abilitatile persoanei daca acestea sunt true.
  Folosind propozitii de forma: “person.name cunoaste: html.”
  “person.name cunoaste: javaScript.”
`);
const entries1 = Object.entries(person.skills);
entries1.forEach((skillEntry) => {
  const [skillId, isKnown] = skillEntry;

  console.log(
    `${person.name} ${isKnown ? 'cunoaste' : 'nu cunoaste'} ${skillId}.`,
  );
});

console.warn(`
  2.Prin aceeasi metoda, afiseaza o lista inversata cu
  numele complet inversat al prietenilor.
`);
const reversedFriendsList = Object.entries(person.friends).reverse();
reversedFriendsList.forEach((friendEntry) => {
  const [, friend] = friendEntry;
  const { surname, name } = friend;

  console.log(`${surname} ${name}`);
});

console.warn(`3.
Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.entries()
`);
console.log(
  Object.entries(person.friends).reduce(
    (message, friendEntry, index, friends) => {
      const length = friends.length;
      const [, { name }] = friendEntry;
      const punctuation =
        length - 1 === index ? '.' : length - 2 === index ? ' si ' : ', ';

      message += `${name}${punctuation}`;

      return message;
    },
    'Prietenii mei sunt ',
  ),
);

console.warn(`4.In mod similar afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze:
 “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);

Object.entries(person.friends).forEach(([friend, friendDetails]) => {
  const { name, age } = friendDetails;
  const ageDifference = Math.abs(person.age - age);
  console.log(
    `Diferenta de varsta intre ${person.name} si ${name} este de ${ageDifference} ani.`,
  );
});

console.warn(
  `5.Folosind Object.entries() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.`,
);
Object.entries(person.skills).map(([skill, value]) => {
  console.log(skill);
}),
  console.warn(
    `6.Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.`,
  );

Object.entries(person.friends).map((friendsNames) => {
  const [, friend] = friendsNames;
  const { name, surname } = friend;
  console.log(`${name} ${surname}`);
});

console.warn(
  `7.Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.entries()`,
);

sentence = Object.entries(person.friends).map((friendsNames) => {
  const [, friend] = friendsNames;
  const { name, surname } = friend;
  return ` ${name} ${surname}`;
});

console.log(`Prietenii mei sunt:${sentence}.`);

console.warn(
  `8.In mod similar, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”`,
);

sentences = Object.entries(person.friends).map((friendDetails) => {
  const [, friend] = friendDetails;
  const { name, age } = friend;
  const message = `${name} are ${age} ani. `;
  return message;
});

sentences.forEach((sentence) => {
  console.log(sentence);
});
