import {
  _getRestaurants,
  _saveRestaurant,
  _getRestaurant,
  _editRestaurant
} from './_DATA'


export function getRestaurants() {
  return _getRestaurants()
}

export function saveRestaurant(info) {
  return _saveRestaurant(info)
}

export function getRestaurant(info) {
  return _getRestaurant(info)
}

export function editRestaurant(info) {
  return _editRestaurant(info)
}

