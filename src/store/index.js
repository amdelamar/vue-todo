import PouchDB from 'pouchdb-browser'

const db = new PouchDB('todoDB')
const store = {}

PouchDB.debug.disable()

store.allDocs = () => {
  return db.allDocs({include_docs: true})
}

store.create = (data) => {
  return db.post(data)
}

store.read = (id) => {
  return db.get(id)
}

store.update = (data) => {
  return db.put(data)
}

store.delete = (id) => {
  return db.remove(id)
}

store.reloadDocs = (obj, prop) => {
  store.allDocs().then(docs => {
    obj[prop] = []
    for (let i = 0; i < docs.total_rows; i++) {
      obj[prop].push(docs.rows[i].doc)
    }
  })
}

export default store
