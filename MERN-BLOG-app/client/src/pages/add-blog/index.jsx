import { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
const AddNewBlog = () => {
  const { formData, setFormData } = useContext(GlobalContext);
  console.log("Form Data: ", formData);
  async function handleSaveDataToDatabase() {
    const response = await axios.post('http://localhost:5000/api/blogs/add', {
      title: formData.title,
      description: formData.description
    })
    const result = response.data;
    console.log("Result:", result);
    
  }
  return (
    <div className={classes.wrapper}>
      <h1>Add a blog</h1>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          placeholder="Enter blog title.."
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({
            ...formData,
            title : e.target.value
          })}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Enter blog description"
          value={formData.description}
          onChange={(e) => setFormData({
            ...formData,
            description : e.target.value
          })}
        />
        <button onClick={handleSaveDataToDatabase}>Add New Blog</button>
      </div>
    </div>
  );
};

export default AddNewBlog;
