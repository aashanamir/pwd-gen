import { useEffect, useRef, useState } from "react";

function App() {

  // States
  const [password, setPassword] = useState("");
  const [lenght, setLength] = useState(8);
  const [isChar , setIsChar] = useState(false);
  const [isNmbr , setIsNmbr] = useState(false);

  // Refrence 
  const passwordRef = useRef(null);


  const genPassword = () => {
    let myChar = "";
    let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isChar) {
      arr += "@!#$%&^&*()_+=~`|}{|:;<>.,";
    }
    if (isNmbr) {
      arr += "1234567890";
    }

    for (let i = 1; i < lenght; i++) {
      myChar =  myChar + arr.charAt(Math.floor(Math.random() * arr.length + 1));
    }
    setPassword(myChar);
  };

  

  const copyPass = ()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    
  genPassword();

  console.log(passwordRef);

  },[lenght , isChar , isNmbr]);

  return (
    <div className="w-screen h-screen bg-black text-white fixed flex flex-col content-center items-center">
      <h2 className="mt-[120px] text-3xl font-serif font-bold md:text-5xl md:mt-14">
        Password Generator
      </h2>
      <div className="w-[80vw] bg-slate-900 h-[70vh] m-auto rounded-3xl p-4 flex flex-col">
        <div className="flex flex-col w-[80%] m-auto p-[12px] ">
          <input
            ref={passwordRef}
            type="text"
            readOnly
            value={password}
            className="p-6 bg-slate-700 rounded-2xl text-xl font-bold tracking-[4px]"
          />
          <button
          onClick={copyPass}
          className="mt-8 bg-slate-950 px-8 py-4 rounded-full w-[70%] m-auto">
            Copy Password
          </button>
        </div>

        <div className="flex flex-col bg-black p-10">
          <div className="flex flex-col gap-3 text-center items-left justify-center ml-2 w-[100%]">
            <input id="range" type="range" min={"6"} max={"32"} value={lenght} onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="range">Password Chreactors : {lenght}</label>
          </div>
          <div className="flex flex-col mt-7 gap-3 md:flex-row items-center md:justify-between">
            <div className="flex items-center gap-4">
              <input type="checkbox" value={isNmbr} onChange={()=>setIsNmbr(!isNmbr)}/>
              <label>Add Numbers</label>
            </div>

            <div className="flex items-center gap-4">
              <input type="checkbox" value={isChar} onChange={()=>setIsChar(!isChar)}/>
              <label>Add Chreactors</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
