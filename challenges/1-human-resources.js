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

function createPoll(items) {}

module.exports = { removeAgents, makeNameTags, createPoll };
