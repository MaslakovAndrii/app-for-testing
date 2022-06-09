import React, { useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import MySelect from './UI/MySelect/MySelect';

const AddQuestions = () => {


     const createQuestion = (event) => {
          event.preventDefault()
          console.log('Вопрос создан');
     }

     const [option, setOption] = useState('')

     return (
          <form 
               className='add-question'
               onSubmit={createQuestion}>

               <MyInput placeholder='Введите текст вопроса' />
               <MyInput placeholder='Введите правильный ответ (через запятую если их несколько)' />
               <MySelect
                    value={option}
                    defaultValue="Способ ответа"
                    onChange={setOption}
                    options={[
                         { value: 'input', name: 'Ввести ответ вручную' },
                         { value: 'radio', name: 'Выбрать вариант из возможных' },
                         { value: 'checkbox', name: 'Вы несколько вариантов из возможных' },
                         { value: 'select', name: 'Выбрать из списка' }
                    ]} />
               {option.includes('radio') || option.includes('checkbox') || option.includes('select')
                    ? <MyInput placeholder='Введите неправильные варианты ответов (через запятую если их несколько)' />
                    : null
               }
               <MyButton>Создать</MyButton>
          </form>
     );
};

export default AddQuestions;