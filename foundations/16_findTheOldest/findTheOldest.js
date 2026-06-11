const findTheOldest = function (people) {
  people.forEach((person) => {
    if (person.hasOwnProperty("yearOfDeath")) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else person.age = new Date().getFullYear() - person.yearOfBirth;
  });
  return people.reduce((prev, current) =>
    prev.age > current.age ? prev : current,
  );
};

// Do not edit below this line
module.exports = findTheOldest;
