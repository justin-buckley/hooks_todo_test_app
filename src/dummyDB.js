// Fake API

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
    { id: 9, text: "Stop watching TV!", isDone: false },
    { id: 10, text: "Exercise!", isDone: false },
    { id: 11, text: "Clean up!", isDone: false },
  ],
  'June 25, 2019': [
    { id: 12, text: "Get a life!", isDone: false },
    { id: 13, text: "Get your life in order!", isDone: false },
  ],
  'June 26, 2019': [
    { id: 14, text: "Check if I unplugged toaster", isDone: false },
    { id: 15, text: "Double-check above", isDone: false },
    { id: 16, text: "Stop worrying whether I unplugged the toaster", isDone: false },
    { id: 17, text: "Throw out the damn toaster", isDone: false },
  ],
  'June 27, 2019': [
    { id: 18, text: "Buy new music", isDone: false },
    { id: 19, text: "Listen to it", isDone: false },
  ],
  'June 28, 2019': [
    { id: 20, text: "Task", isDone: false },
    { id: 21, text: "Remember what task was", isDone: false },
  ],
}

export default dummyDB

// A bunch of fake REST API methods to interact with the fake DB

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

export function getEntryForDate(date) {
  return dummyDB[date]
}