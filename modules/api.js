module.exports = {
  
  updateAt: getDate(),
  
  data: [
    { 
      id: 1,
      name: 'Rodrigo',
      lastname: 'Silva',
      age: 33,
      email: 'ro.borgessilva@gmail.com',
      nickname: 'rodbor',
      company: 'Mundial'
    },
    { 
      id: 2,
      name: 'Rodrigo',
      lastname: 'Silva',
      age: 33,
      email: 'study.borges@gmail.com',
      nickname: 'rodbor',
      company: 'Mundial'
    }
  ]
  
}

function getDate() {
  return new Date().toUTCString()
}