import Head from './components/Head/Head';
import Sidebar from './components/Sidebar/Sidebar';
import MidButton from './components/MidButton/MidButton';
import CourseList from './components/CourseContainer/CourseList/CourseList';
import './App.css';

function App() {
  return (
    <div className="App">
     <Head/> 
     <MidButton/>   
     <Sidebar/>
     <CourseList/>
    </div>
  );
}

export default App;