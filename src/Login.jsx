import React,{useState} from 'react'

function Login() {
    const [name, setname] = useState("")
const [rollno, setrollno] = useState("")
const [marks, setmarks] = useState("")
   function handletext(e){
    setname(e.target.value)
   }
   function handleMarks(e) {
    setmarks(e.target.value)
   }
   function handlerollno(e) {
    setrollno(e.target.value)
}

   function onSubmit() {
        console.log(name,rollno,marks)
   }
    return (
        <>
            <input type="text" name="name" value={name} onChange={handletext}/>
            <input type="text" name="rollno" value={rollno} onChange={handlerollno}/>
            <input type="text" name="marks" value={marks} onChange={handleMarks}/>
            
           
           
            <button onClick={()=>onSubmit()}>submit</button>
        </>
    )
}

export default Login
