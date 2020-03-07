let restaurants = {
  "am8ehyc8byjqgar0jgpub9": {
    rid: "am8ehyc8byjqgar0jgpub9",
    name: "Ishin",
    author: "sarahedo",
    category: "Category 1",
    location: "Wilmersdorf",
    ratings: {
      "sarahedo": 4,
      "marinacosta": 5
    },
    raters: ["sarahedo", "marinacosta"]
  },
  "6ni6ok3ym7mf1p33lnez": {
    rid: "6ni6ok3ym7mf1p33lnez",
    name: "Monsieur Vuong",
    author: "sarahedo",
    category: "Category 2",
    location: "Mitte",
    ratings: {
      "sarahedo": 3,
      "marinacosta": 4
    },
    raters: ["sarahedo", "marinacosta"]
  },
  "8xf0y6ziyjabvozdd253nd": {
    rid: "8xf0y6ziyjabvozdd253nd",
    name: "Shanius",
    author: "sarahedo",
    category: "Category 3",
    location: "Wilmersdorf",
    ratings: {
      "sarahedo": 5,
      "marinacosta": 3
    },
    raters: ["sarahedo", "marinacosta"]
  }
}

let users = {
  "sarahedo": {
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
  "marinacosta": {
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
}


function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getRestaurants () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...restaurants}), 1000)
  })
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

function formatRestaurant ({ name, category, location, author, rating }) {
  return {
    rid: generateID(),
    name,
    author,
    category,
    location,
    ratings: {
      [author.uid]: rating
    },
    raters: [author.uid]
  }
}

export function _saveRestaurant (restaurant) {
  return new Promise((res, rej) => {
    const authedUser = restaurant.author;
    const formattedRestaurant = formatRestaurant(restaurant);

    setTimeout(() => {
      restaurants = {
        ...restaurant,
        [formattedRestaurant.rid]: formattedRestaurant
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          ratings: users[authedUser].ratings[formattedRestaurant.rid],
          restaurants: users[authedUser].restaurants.concat([formattedRestaurant.rid])
        }
      }

      res(formattedRestaurant)
    }, 1000)
  })
}

export function _saveRating({ authedUser, rid, rating }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          ratings: users[authedUser].ratings[rid] = rating,
          restaurants: users[authedUser].restaurants.concat([rid])
        }
      }

      restaurants = {
        ...restaurants,
        [rid]: {
          ...restaurants[rid],
          ratings: restaurants[rid].ratings[authedUser] = rating,
          raters: restaurants[rid].raters.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}
