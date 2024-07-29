

const NewPrompt = () => {
  return (
    <div>
      <form className="newForm" >
        <label htmlFor=""></label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default NewPrompt
