// import { useState } from "react"
// import './App.css'

// const Name=()=>{
//     const[name,setName]=useState('Jimmy')
//     const[fontSize,setSize]=useState(20)
//     const Name1=()=>{
//         setName('Come On!')
//     }
//     const Name2=()=>{
//         setName('Jimmy!!')
//     }
//     const Name3=()=>{
//         setName('I know you HAVE IT!!')
//     }
//     const size=()=>{
//         setSize(fontSize +1)
//     }
//     // const size2=()=>{
//     //     setSize(fontSize+1)
//     // }
    
//     return(
//         <div className="flex justify-center items-center w-full h-screen flex-col gap-4 ">
//             <h1 className="text-5xl">MuscleMans words</h1>
//             <p style={{fontSize: `${fontSize}px`}}>{name}</p>
//             <button className="bg-red-200 w-30 h-10 rounded-lg" onClick={()=>{setName('Come On!');setSize(fontSize+10);}}>Statement1</button>
//             <button className="bg-red-600 w-40 h-10 rounded-lg" onClick={()=>{setName('Jimmy!!');setSize(fontSize+20);}}>Statement2</button>
//             <button className="bg-red-900 w-52 h-10 rounded-lg" onClick={()=>{setName('You know you owe me');setSize(fontSize+30);}}>Statement3</button>
    
//         </div>
//     )
    

// }

// export default Name

// //App.jsx

// //useState import
// import { useState } from "react"
// import './App.css'
// import Button from "./components/Button"


// //App component (functional component)
// const App = ()=>{

//   //useState hook to create a state variable
//   /**
//    * count -> the state variable
//    * setCount -> the function that lets you update the state variable
//    * 0 -> the initial state value
//    */
//   const [count, setCount] = useState(0)
  
//   //function to handle incrementing the count
//   const handleIncrement = ()=>{
//     //setCount function to update the count state variable
//     setCount(count + 1)
//   }

//   //function to handle decrementing the count
//   const handleDecrement = ()=>{
//     //setCount function to update the count state variable
//     setCount(count - 1)
//   }

//   return (

//     //JSX code
//     <div className="text-center flex flex-col justify-center items-center w-full h-screen gap-4">
//       <h1 className="text-4xl">Counter App</h1>
//       {/**Display the count variable */}
//       <h2> {count} </h2>
//       {count>5 ? <h3>Kipu is Gay</h3> : <h3>Why is Kipu Gay?</h3>}

//       {/**Increment button, takes in handleIncrement as value */}
//       {/**Decrement button, takes in handleDecrement as value */}
//       <button onClick={handleDecrement} className="bg-red-300 w-52 h-10  rounded-lg "> Subtract</button>
//       <Button ></Button>
//     </div>

//   )
// }

// export default App

// Component to display Data called DisplayData
// const DisplayData = () => {
//   const data = [
//     {
//       id: 0,
//       language: "JavaScript",
//       description: "Software Engineering",
//     },
//     {
//       id: 1,
//       language: "Python",
//       description: "Data Science",
//     },
//     {
//       id: 2,
//       language: "Kotlin",
//       description: "Android Development",
//     },
//   ];

//   return (
//     <>
//       {/* Map function to loop over our data */}
//       {data.map((item) => {
//         return (
//         // Using the id as the key
//         <div key={item.id}>
//           {/* Accessing the language property */}
          
//           <div>{item.language}</div>
//           {/* Accessing the description property */}
//           <div>{item.description}</div>
//         </div>
//       )})}
//     </>
//   );
// };

// export default DisplayData