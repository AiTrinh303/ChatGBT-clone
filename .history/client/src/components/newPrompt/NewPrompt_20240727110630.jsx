import './newPrompt.css'

const NewPrompt = () => {
    
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
      }, []);
    
  return (
    <>
      <div className="endChat" ></div>
      <form className="newForm" >
        <label htmlFor="file">
           <img src="/attachment.png" alt="" />
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
