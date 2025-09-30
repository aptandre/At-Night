import { useEffect, useState } from 'react';
import './App.css'
import Sign from './components/Sign/Sign';

function App() {
  
  const days = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const colors = [
    '#791AE6',
    '#3B58E5',
    '#41ADE6',
    '#34E56D',
    '#E6691F',
    '#E5CE01',
    '#E5302D'
  ]

  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  const hour = currentDate.getHours()
  
  const dailyColor = colors[dayIndex]

  const currentDayName = days[dayIndex];
  
  return (
    <div style={{ backgroundColor: dailyColor,
      width: '80vw',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
    >
      <Sign day={currentDayName} hour={hour}></Sign>
    </div>
  )
}

export default App
