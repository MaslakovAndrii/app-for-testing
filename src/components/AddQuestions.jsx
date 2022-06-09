import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/MyInput/MyInput';
import MySelect from './UI/MySelect/MySelect';

const AddQuestions = () => {
     return (
          <form>
               <MyInput placeholder='Введите текст вопроса'/>
               <MyInput placeholder='Введите правильный ответ (через запятую если их несколько)'/>
               <MyInput placeholder='Введите неправильные варианты ответов (через запятую если их несколько)'/>
               <MySelect/>
               <MyButton>Создать</MyButton>
          </form>
     );
};

export default AddQuestions;