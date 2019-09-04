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
  let pollResults = {};
  items.map((item) => {
    if (pollResults[item] === undefined) {
      return (pollResults[item] = 1);
    } else {
      return pollResults[item]++;
    }
  });
  return pollResults;
}

module.exports = { removeAgents, makeNameTags, createPoll };
