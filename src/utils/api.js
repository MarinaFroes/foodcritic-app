import {
  _getUsers,
  _getRestaurants,
  _saveRestaurant,
  _saveRating
} from './_DATA'

export function getInitialData() {
  return Promise.all([_getUsers(), _getRestaurants()]).then(
    ([users, restaurants]) => ({ 
      users,
      restaurants
    })
  )
}

export function saveRestaurant(info) {
  return _saveRestaurant(info)
}

export function saveRating(info) {
  return _saveRating(info)
}

export function getUsers() {
  return _getUsers()
}

export function getRestaurants() {
  return _getRestaurants()
}
