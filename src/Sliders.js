import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
    top: '80%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    color: '#52af77',
  }
});

export default function Sliders(props) {
  const classes = useStyles();
  let [, setValue] = useState()

  const handleChange = (e, newValue) => {
    props.changeNumberOfArrayBars(newValue)
    setValue(newValue) 
  }

  return (
    <>
      <div className={classes.root}>
        <Slider
          defaultValue={70}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={2}
          max={130}
          onChange={handleChange}
        />
      </div>
    </>
  );
}