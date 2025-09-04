// write a function that takes start and finish characters and returns a function that checks
// if a character is between start and finish, and returns a callback function that takes an input char and returns boolean based on the criteria

function selectionLogic(start, finish) {
  const startCode = start.toLowerCase().charCodeAt(0);
  const finishCode = finish.toLowerCase().charCodeAt(0);
  return function (char) {
    const charCode = char.toLowerCase().charCodeAt(0);
    return charCode >= startCode && charCode <= finishCode;
  };
}

function assignTo(lastName, [...reps], defaultRep) {
  const initial = lastName.charAt(0).toLowerCase();
  for (const rep of reps) {
    if (rep.criteria && rep.criteria(initial)) {
      return rep.URI;
    }
  }
  return defaultRep.URI;
}

