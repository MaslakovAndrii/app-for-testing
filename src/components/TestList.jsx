import React from 'react';
import TestItem from './TestItem';


const TestList = ({ data }) => {
     

     return (
          <div>
               {data.map((question, index) =>
                    <TestItem number={index + 1} question={question} key={question.id} />
               )}
          </div>
     );
};

export default TestList;