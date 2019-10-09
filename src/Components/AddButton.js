import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function AddButton() {
  return (
    <React.Fragment>
      <Fab size="medium" aria-label="add">
        <AddIcon />
      </Fab>
    </React.Fragment>
  )
}
