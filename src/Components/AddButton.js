import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function AddButton() {
  return (
    <>
      <Link to="/add_restaurant" style={{ textDecoration: 'none' }}>
        <Fab size="medium" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </>
  )
}
