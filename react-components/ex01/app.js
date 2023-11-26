const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  1.Folosind metoda map pe arrayul skills, returneaza
  si afiseaza in consola un array in care fiecare
  consoana este scrisa cu litera mare (vocalele nu)
`);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrVowels = person.skills.map((skill) => {
  const letters = skill.split('');
  const upperCaseVowels = letters.map((letter) => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return upperCaseVowels.join('');
});

console.log(arrVowels);

console.warn(`
 2. Folosind map pe arrayul friends, returneaza un array
  in care fiecare pozitie contine propozitia
  “Ma numesc {name} {surname} si am {age} ani.  ”
`);
const sentences = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(sentences);

console.warn(`3. Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
“Diferenta de varsta dintre {friendName} si {personName} este {diff}`);

const difAge = person.friends.map((friend) => {
  const { name: friendName, surname: friendSurname, age: friendAge } = friend;
  const { name: personName, surname: personSurname, age: personAge } = person;
  const diff = Math.abs(personAge - friendAge);
  return `Diferenta de varsta dintre ${friendName} si ${personName} este de ${diff}.`;
});
console.log(difAge);

console.warn(`4.Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei si
 lungimea cuvantului de pe arrayul skill`);

const diffAgeSkill = person.skills.map((skill) => {
  const diff = person.age - skill.length;

  return diff;
});
console.log(diffAgeSkill);

console.warn(
  `5.Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele cu prima si ultima litera mari.`,
);

const joy = person.skills.map((skill) => {
  const skillLetters = skill.split('');
  const firstAndLastLetter = skillLetters.map((letter, index, letters) => {
    if (index === 0 || index === letters.length - 1) {
      return letter.toUpperCase();
    }
    return letter;
  });
  return firstAndLastLetter.join('');
});
console.log(joy);

console.warn(`6.Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)
`);
const reverseWord = person.skills.map((skill) => {
  return skill.split('').reverse().join('');
});
console.log(reverseWord);

console.warn(`7.Folosind metoda map pe arrayul friends,
returneaza un array care sa contina propozitiile“{friendName} are {age} ani.”
`);
const frase = person.friends.map((friend) => {
  const { name: friendName, age: friendAge } = friend;
  return `${friendName} are ${friendAge} ani.`;
});
console.log(frase);

console.warn(`8.Folosind metoda map pe arrayul friends,
returneaza un array care contine numele inversat al prietenilor pe fiecare pozitie (exemplu: Stevenson Steven)
`);
const reverseName = person.friends.map((friend) => {
  const { name: friendName, surname: friendSurname } = friend;
  return `${friendSurname} ${friendName}`;
});
console.log(reverseName);

console.warn(`9.Folosind metoda map pe arrayul friends,
 returneaza un array care contine pe fiecare pozitie diferenta dintre lungimea totala al numelui complet (fara spatii)
  si varsta prietenului de pe iteratie
`);
const difference = person.friends.map((friend) => {
  const { name: friendName, surname: friendSurname, age: friendAge } = friend;
  const completeName = `${friendName}${friendSurname}`;
  const difff = Math.abs(completeName.length - friendAge);
  return difff;
});
console.log(difference);

console.warn(`10.Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre lungimea fiecarui skill si
varsta prietenului
`);
const skillLengthAgeDiff = person.skills.map((skill) => {
  const skillMinusAge = person.friends.map((friend) => {
    const { age: friendAge } = friend;
    return Math.abs(skill.length - friendAge);
  });
  return skillMinusAge;
});

console.log(skillLengthAgeDiff);
