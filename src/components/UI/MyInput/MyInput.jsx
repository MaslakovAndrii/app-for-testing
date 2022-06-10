import React from 'react';
// import classes from './MyInput.module'

const MyInput = ({placeholder, ...props}) => {
     return (
          <input {...props} placeholder={placeholder}/>
     );
};

export default MyInput;