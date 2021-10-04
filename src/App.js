import StudentTitle from './Components/StudentTitle';
import AddStudent from './Components/AddStudent';
import StudentList from './Components/StudentList';

function App() {
  return (
    <div className={'container'}>
      <StudentTitle />
      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;
