import React, { useState } from 'react';
import MyInput from './UI/MyInput/MyInput';
import MySelect from './UI/MySelect/MySelect';


const TestItem = ({ number, question }) => {

     const [selectValue, setSelectValue] = useState('')
     const messyArrayAnswer = question.answerCorrect + ';' + question.answerOptions;
     const cleanArrayAnswer = []
     messyArrayAnswer.split(';').map(char => char !== '' ? cleanArrayAnswer.push(char) : null);
     // console.log(cleanArrayAnswer);


     const inputMethod = (method) => {
          switch (method) {
               case 'input': return (
                    <MyInput type='text' placeholder='Введите првильный ответ' />
               )
               case 'radio': return (
                    <form>
                         {cleanArrayAnswer.map((answer, index) =>
                              <div key={index}>
                                   <input type='radio' name={question.id} id={index} />
                                   <label id={index}>{answer}</label>
                              </div>
                         )}
                    </form>
               )
               case 'checkbox': return (
                    <form>
                         {cleanArrayAnswer.map((answer, index) =>
                              <div key={index}>
                                   <input type='checkbox' name={question.id} id={index} />
                                   <label id={index}>{answer}</label>
                              </div>
                         )}
                    </form>
               )
               case 'select': return (
                    <MySelect
                         value={selectValue}
                         defaultValue="Выберите ответ"
                         onChange={e => setSelectValue(e)}
                         options={cleanArrayAnswer.map(item => ({name: item, value: item, key: item}))}
                         />
               )
               default: return <h1>Error</h1>
          }
     }

     return (
          <div>
               <div>{number}</div>
               <div>{question.text}</div>
               {inputMethod(question.inputMethod)}
          </div>
     );
};

export default TestItem;