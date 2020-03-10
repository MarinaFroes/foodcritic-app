let restaurants = [
  {
    rid: "am8ehyc8byjqgar0jgpub9",
    name: "Ishin",
    category: "restaurant",
    cuisine: "japanese",
    location: "Wilmersdorf",
    rating: 4
  },
  {
    rid: "6ni6ok3ym7mf1p33lnez",
    name: "Monsieur Vuong",
    category: "restaurant",
    cuisine: "vietnamese",
    location: "Mitte",
    rating: 3
  },
  {
    rid: "8xf0y6ziyjabvozdd253nd",
    name: "Shanius",
    category: "restaurant",
    cuisine: "chinese",
    location: "Wilmersdorf",
    rating: 3
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

export function _getRestaurant (rid) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const restaurant = restaurants.filter(restaurant => restaurant.rid === rid)

      res(restaurant)
    }, 1000)
  })
}

function formatRestaurant({ name, category, cuisine, location, rating }, rid ) {
  return {
    rid,
    name,
    category,
    cuisine,
    location,
    rating
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
    
      res(formattedRestaurant)
    }, 1000)
  })
}

export function _editRestaurant({ newRestaurant, rid }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const formattedRestaurant = formatRestaurant(newRestaurant, rid)
      
      const existingRestaurants = restaurants.filter(restaurant => {
        return restaurant.rid !== rid
      })

      restaurants = [
        ...existingRestaurants,
        formattedRestaurant
      ]

      res(restaurants)
    }, 1000)
  })
}