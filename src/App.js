import React, { useState } from 'react';
import AddQuestions from './components/AddQuestions';
import TestList from './components/TestList';
import './style/App.css';

function App() {

     const [questions, setQuestions] = useState([])

     const createQuestion = (newQuestion) => {
          setQuestions([...questions, newQuestion])
     }

     
     return (
          <div className="App">
               <AddQuestions create={createQuestion}/>
               <TestList data={questions}/>
          </div>
     );
}

export default App;
