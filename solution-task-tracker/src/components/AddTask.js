import React,{useState} from 'react'



    const AddTask = ({addTask}) => {
        const [text, settext] = useState("")
        const [day, setday] = useState("")

        const handleSubmit = (e)=>{
            e.preventDefault()

            addTask({text, day, isDone:false})
            settext("");
            setday("")



        }
        return (
          <form className="add-form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="task">Task</label>
              <input
                id="task"
                name="text"
                type="text"
                placeholder="AddTask"
                required
                value={text}
                onChange={(e)=>{
                   settext(e.target.value)
                }}
              />
            </div>
            <div className="form-control">
              <label htmlFor="day">Day & Time</label>
              <input
                id="day"
                name="day"
                type="text"
                placeholder="Add Day & Time"
                required
                value={day}
                onChange={(e)=>{
                    setday(e.target.value)
                 }}
              />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
          </form>
        );
      };
      
  

export default AddTask