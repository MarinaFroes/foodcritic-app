import React from 'react'
import Fab from '@material-ui/core/Fab'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function EditIcon({ rid }) {
  return (
    <>
      <Link to={`/edit_restaurant/${rid}`} style={{ textDecoration: 'none' }}>
        <Fab size="medium" aria-label="add">
          <EditRoundedIcon />
        </Fab>
      </Link>
    </>
  )
}

EditIcon.propTypes = {
  rid: PropTypes.string.isRequired
}
