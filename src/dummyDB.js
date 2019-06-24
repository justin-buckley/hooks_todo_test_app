const dummyDB = {
  'June 19, 2019': [
    { id: 1, text: "Some things to do!", isDone: false },
    { id: 2, text: "More!", isDone: true },
  ],
  'June 21, 2019': [
    { id: 3, text: "Only one thing today", isDone: true },
  ],
  'June 22, 2019': [
    { id: 4, text: "A task", isDone: false },
    { id: 5, text: "Another task", isDone: true },
    { id: 6, text: "Yet another task", isDone: true }
  ],
  'June 23, 2019': [
    { id: 7, text: "Something to do", isDone: false },
    { id: 8, text: "Finish this", isDone: true },
    { id: 9, text: "Finish that", isDone: false },
  ],
  'June 24, 2019': [
    { id: 9, text: "More stuff to do", isDone: false },
    { id: 10, text: "Exercise!", isDone: false },
    { id: 11, text: "Clean up!", isDone: false },
    { id: 12, text: "Get your life in order!", isDone: false },
    { id: 13, text: "Get a life!", isDone: false },
  ],
  'June 25, 2019': [
    { id: 14, text: "Stuff", isDone: false },
    { id: 15, text: "Exercise again!", isDone: false },
  ],
}

export default dummyDB

export function modifyEntryIsDone(id, isDone) {
  const entryToEdit = findEntryAtId(id)
  entryToEdit.isDone = isDone
} 

export function modifyEntryText(id, text) {
  const entryToEdit = findEntryAtId(id)
  entryToEdit.text = text
}

export function createNewEntry(day, text) {
  const days = Object.keys(dummyDB)
  const newId = getNewId()
  const newEntry = {
    id: newId,
    text: text,
    isDone: false
  }

  if (days.includes(day)) {
    dummyDB[day].push(newEntry)
  } else {
    dummyDB[day] = [newEntry]
  }

  // Todo: investigate why we need to copy the array in order to update state
  // as follows...
  return dummyDB[day].slice()
} 

function getNewId() {
  let highestFoundId = 0;
  for (const day in dummyDB) {
    for (const entry in dummyDB[day]) {
      const { id } = dummyDB[day][entry]
      if (id > highestFoundId) {
        highestFoundId = id;
      }
    }
  }
  return highestFoundId + 1
}

function findEntryAtId(id) {
  for (const day in dummyDB) {
    for (const entry in dummyDB[day]) {
      const entryData = dummyDB[day][entry]
      if (entryData.id === id) {
        return entryData
      }
    }
  }
  return null
}