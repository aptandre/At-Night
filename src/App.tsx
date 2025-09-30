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
  let dayIndex = currentDate.getDay();

  dayIndex = 3;

  const currentDayName = days[dayIndex];
  const color = colors[dayIndex]
  
  return (
    <div style={{ backgroundColor: color}}>
      <Sign day={currentDayName}></Sign>
    </div>
  )
}

export default App
