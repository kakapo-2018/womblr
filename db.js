
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getWomble,
  getWombles,
  createWomble,
  womblesAndKinks,
  findKinkyWomble
}

//db functions go here

function getWombles (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getWomble (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function createWomble (username, age, bio, profilepic, kinks, testConn){
    const conn = testConn || connection
    return conn ('users').insert({
        username: username,
        age: age,
        bio: bio,
        profile_pic: profilepic
    })
    .then(userID => {
        createKinks(userID[0], kinks);
        return userID;
    })
}

function createKinks (userID, kinks, testConn) {
    const conn = testConn || connection
    Object.keys(kinks).forEach(value => {
        // for each key we need to find kink_id from kinks table from key name, then insert a new row with that kink_id in users_and_kinks
        if(kinks[value] === true){
            return conn('kinks')
                .where('kinks.kink', value)
                .first()
                .then(entry => {
                    return entry['id']
                })
                .then((kinkID) => {
                    return conn('users_and_kinks')
                        .insert({user_id: userID, kink_id: kinkID})
                })
        }
    })
}



function womblesAndKinks (userID, testConn) {
    const conn = testConn || connection
    let kinks = []
    return conn('users_and_kinks')
     .where('user_id', userID)
     .join('kinks', 'kinks.id', '=', 'users_and_kinks.kink_id')
     .then(data => {
        data.forEach(obj => {
            kinks.push(obj['kink'])
        })
     })
     .then(function () {
         return getWomble(userID)
         .select()
         .then(wombleObj => {
             wombleObj.kinks = kinks;
             return wombleObj;
         })
     })
}

function findKinkyWomble(id, testConn){
    // console.log(id);
    const conn = testConn || connection
    return conn('users')
    .join('users_and_kinks', 'users_and_kinks.user_id', '=', 'users.id')
    .where('kink_id',id)
    .then(data =>{
        return data
    })
}
// function saveTimes(time, testConn) {
//   const conn = testConn || connection
//   return conn('users').insert({'name': time})
// }