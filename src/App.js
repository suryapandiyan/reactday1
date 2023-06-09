// const App=() => {
//   //javascript
//   // console.log('hello from component');
//   const now=new Date();
//   const a=10;
//   const b=20;
//   console.log(now,a+b);
//   return (
//      <div>
//       <p>Hello World!,it is {now.toString()}</p>
//       <p>{a} plus {b}is{a+b}
//       </p>
//       </div>
       
//   );
// }

// export default App;
import React from 'react'

function Hello(props){
  // console.log(props);
  return(
    <div>
    <p>Hello{props.name},you are{props.age}years old!</p>
    </div>
)
}

function App() {
  return (
    <div><h1>Greetings</h1>
    <Hello name='krish'/>
    <Hello name='surya'/>
    </div>
  )
}

export default App

