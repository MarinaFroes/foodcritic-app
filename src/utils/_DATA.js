let restaurants = [
  {
    rid: "am8ehyc8byjqgar0jgpub9",
    name: "Ishin",
    author: "sarahedo",
    category: "restaurant",
    cuisine: "japanese",
    location: "Wilmersdorf",
    ratings: {
      "sarahedo": 4,
      "marinacosta": 5
    },
    raters: ["sarahedo", "marinacosta"]
  },
  {
    rid: "6ni6ok3ym7mf1p33lnez",
    name: "Monsieur Vuong",
    author: "sarahedo",
    category: "restaurant",
    cuisine: "vietnamese",
    location: "Mitte",
    ratings: {
      "sarahedo": 3,
      "marinacosta": 4
    },
    raters: ["sarahedo", "marinacosta"]
  },
  {
    rid: "8xf0y6ziyjabvozdd253nd",
    name: "Shanius",
    author: "sarahedo",
    category: "restaurant",
    cuisine: "chinese",
    location: "Wilmersdorf",
    ratings: {
      "sarahedo": 5,
      "marinacosta": 3
    },
    raters: ["sarahedo", "marinacosta"]
  }
]

let users = [
  {
    uid: "sarahedo",
    name: "Sarah Edo",
    avatarURL: "https://picsum.photos/id/1027/200/200",
    ratings: {
      "am8ehyc8byjqgar0jgpub9": 4,
      "6ni6ok3ym7mf1p33lnez": 3,
      "8xf0y6ziyjabvozdd253nd": 5
    },
    restaurants: ["am8ehyc8byjqgar0jgpub9", "6ni6ok3ym7mf1p33lnez", "8xf0y6ziyjabvozdd253nd"]
  },
  {
    uid: "marinacosta",
    name: "Marina Costa",
    avatarURL: "https://picsum.photos/id/1027/200/200",
    ratings: {
      "am8ehyc8byjqgar0jgpub9": 5,
      "6ni6ok3ym7mf1p33lnez": 4,
      "8xf0y6ziyjabvozdd253nd": 3
    },
    restaurants: ["am8ehyc8byjqgar0jgpub9", "6ni6ok3ym7mf1p33lnez", "8xf0y6ziyjabvozdd253nd"]
  }
]


function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getRestaurants () {
  return new Promise((res, rej) => {
    setTimeout(() => res([...restaurants]), 1000)
  })
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res([...users]), 1000)
  })
}

function formatRestaurant({ name, category, cuisine, location, author, rating }, rid ) {
  return {
    rid,
    name,
    author,
    category,
    cuisine,
    location,
    ratings: {
      [author]: rating
    },
    raters: [author]
  }
}

export function _saveRestaurant (restaurant) {
  return new Promise((res, rej) => {
    const rid = generateID()
    const formattedRestaurant = formatRestaurant(restaurant, rid)
    
    setTimeout(() => {
      restaurants = [
        ...restaurants,
        formattedRestaurant
      ]
      
      users = users.map((user) => {
        if (user.uid === formattedRestaurant.author) {
          user.ratings[rid] = Number(restaurant.rating)
          user.restaurants.push(rid)
          return user
        } else {
          return user
        }
      })

      res(formattedRestaurant)
    }, 1000)
  })
}

export function _saveRating({ authedUser, rid, rating }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // users = {
      //   ...users,
      //   [authedUser]: {
      //     ...users[authedUser],
      //     ratings: users[authedUser].ratings[rid] = rating,
      //     restaurants: users[authedUser].restaurants.concat([rid])
      //   }
      // }

      // restaurants = {
      //   ...restaurants,
      //   [rid]: {
      //     ...restaurants[rid],
      //     ratings: restaurants[rid].ratings[authedUser] = rating,
      //     raters: restaurants[rid].raters.concat([authedUser])
      //   }
      // }

      res()
    }, 500)
  })
}
// export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       users = {
//         ...users,
//         [authedUser]: {
//           ...users[authedUser],
//           answers: {
//             ...users[authedUser].answers,
//             [qid]: answer
//           }
//         }
//       }

//       questions = {
//         ...questions,
//         [qid]: {
//           ...questions[qid],
//           [answer]: {
//             ...questions[qid][answer],
//             votes: questions[qid][answer].votes.concat([authedUser])
//           }
//         }
//       }

//       res()
//     }, 500)
//   })
// }

export function _editRestaurant(restaurant) {
  return new Promise((res, rej) => {
    setTimeout(() => {
       console.log('editing restaurant')
    }, 1000)
  })
}