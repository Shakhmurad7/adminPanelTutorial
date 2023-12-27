import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../index.css'

function CircularProgressBar() {
    const percentage = 66;
  return (
    <>
        <div className="Progressbar">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </div>
    </>
  )
}

export default CircularProgressBar