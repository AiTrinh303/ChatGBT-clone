import './newPrompt.css'
import { useEffect, useRef } from "react";


const NewPrompt = () => {
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
      }, []);
    
  return (
    <>
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" >
        KCrc="/attachment.png" alt="" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  )
}

export default NewPrompt
