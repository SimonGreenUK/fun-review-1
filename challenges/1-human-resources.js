// 1

function removeAgents(people) {
  return people.filter((person) => person.profession !== 'mole');
}

// 2

function makeNameTags(guests) {
  return guests.map((guest) => {
    return `${guest.title} ${guest.forename} ${guest.surname}, ${guest.company}`;
  });
}

// 3

function createPoll(items) {
  return items.reduce((allItems, item) => {
    if (allItems[item] === undefined) allItems[item] = 1;
    else allItems[item]++;
    return allItems;
  }, {});
}

// 4

function removeSmarterAgents(people) {
  const filteredInterests = people.filter((person) => {
    return !/mole/g.test(person.interests.join(''));
  });

  return filteredInterests.filter((person) => !person.aboutMe.includes('mole'));
}

module.exports = { removeAgents, makeNameTags, createPoll, removeSmarterAgents };
