import React, { useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import MySelect from './UI/MySelect/MySelect';

const AddQuestions = ({ create }) => {

     const [question, setQuestion] = useState({textQuestion: '', inputMethod: '', answerCorrect: '', answerOptions: ''})
     

     const createQuestion = (e) => {
          e.preventDefault();
          const newQuestion = {
               ...question,
               id: Date.now()
          }
          create(newQuestion)
          setQuestion({textQuestion: '', inputMethod: '', answerCorrect: '', answerOptions: ''})
     }




     return (
          <form className='add-question'>

               <MyInput
                    placeholder='Введите текст вопроса'
                    value={question.textQuestion}
                    onChange={e => setQuestion({...question, textQuestion: e.target.value})}/>

               <MyInput
                    placeholder='Введите правильный ответ (если их несколько разделяйте ";")'
                    value={question.answerCorrect}
                    onChange={e => setQuestion({...question, answerCorrect: e.target.value})}/>
               <MySelect
                    value={question.inputMethod}
                    defaultValue="Способ ответа"
                    onChange={e => setQuestion({...question, inputMethod: e})}
                    options={[
                         { value: 'input', name: 'Ввести ответ вручную' },
                         { value: 'radio', name: 'Выбрать вариант из возможных' },
                         { value: 'checkbox', name: 'Вы несколько вариантов из возможных' },
                         { value: 'select', name: 'Выбрать из списка' }
                    ]} />
               {question.inputMethod.includes('radio') || question.inputMethod.includes('checkbox') || question.inputMethod.includes('select')
                    ?
                    <MyInput
                         placeholder='Введите неправильные варианты ответов (если их несколько разделяйте ";")'
                         value={question.answerOptions}
                         onChange={e => setQuestion({...question, answerOptions: e.target.value})}
                    />
                    : null
               }
               <MyButton onClick={createQuestion}>Создать</MyButton>
          </form>
     );
};

export default AddQuestions;