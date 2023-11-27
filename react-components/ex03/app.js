const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  friends: {
    larry: {
      name: 'Vasile',
      surname: 'Popescu',
      age: 30,
    },
    steven: {
      name: 'Florin',
      surname: 'Bogdan',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Salam',
    },
  },
};

console.warn(`1.Folosind Object.values(), afiseaza o
  lista inversata cu numele complet inversat al prietenilor.
`);
Object.values(person.friends)
  .reverse()
  .forEach(({ surname, name }) => {
    console.log(`${surname} ${name}`);
  });

console.warn(`2.Afiseaza propozitia: “Prietenii mei sunt Larry,
  Steven si Carol.” folosind Object.values()
`);
console.log(
  Object.values(person.friends).reduce((sentence, friend, index, friends) => {
    const { name } = friend;
    const length = friends.length;
    const punctuation =
      length - 1 === index ? '.' : length - 2 === index ? ' si ' : ', ';

    sentence += `${name}${punctuation}`;

    return sentence;
  }, 'Prietenii mei sunt '),
);

console.warn(`3.Prin aceeasi metoda, afiseaza propozitia:
  “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);
const sentence1 = Object.values(person.friends).reduce((message, friend) => {
  const { name, age } = friend;
  const ageDiff = Math.abs(person.age - age);

  message += `Diferenta de varsta intre ${name} si ${person.name} este de ${ageDiff} ani. `;

  return message;
}, '');
console.log(sentence1.trim());

console.warn(
  `4.Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor`,
);

Object.values(person.friends).forEach(({ name, surname }) => {
  console.log(`${name} ${surname}`);
});

console.warn(
  `5.Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.values()`,
);

const sentence2 = Object.values(person.friends).reduce(
  (allFriends, friend, index, friends) => {
    const { name, surname } = friend;
    let punctuation =
      index === friends.length - 1
        ? '.'
        : index === friends.length - 2
        ? ' si '
        : ', ';

    allFriends += `${name} ${surname}${punctuation}`;

    return allFriends;
  },
  'Prietenii mei sunt ',
);
console.log(sentence2);

console.warn(
  `6.In mod similar, afiseaza propozitia  “Larry are xx ani. Steven are …”`,
);

const sentence3 = Object.values(person.friends).map((friend) => {
  const { name, age } = friend;
  const message = `${name} are ${age} ani. `;
  return message;
});
console.log(sentence3[0] + sentence3[1] + sentence3[2].trim());
