const mongoose = require("mongoose");

const Blog = require("../model/Blog");

//*fetch list of blogs
//*add a new blog
//*delete a Blog
//* update a blog

const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogList) {
    return res.status(404).json({ message: "No blog Found." });
  }
  return res.status(200).json({ blogList });
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreatedBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreatedBlog.save();
  } catch (error) {
    console.error(error);
  }

  try {
    const session = mongoose.startSession();
    session.startTransaction();
    await newlyCreatedBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    console.error(error);
  }
  return res.status(200).json({ newlyCreatedBlog: newlyCreatedBlog });
};

const deleteABlog = async (req, res) => {
  const id = req.params.id;
  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog successfully deleted" });
  } catch (error) {
    console.error(error);
  }
};

const updateABlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  let currentBlogToUpdate;

  try {
    const currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.error(error);
    res.send(500).json({
      message: "Something wrong happened while updating please try again",
    });
  }
  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "Unable to Update" });
  }
  return res.send(200).json({ currentBlogToUpdate: currentBlogToUpdate });
};
module.exports = {
    fetchListOfBlogs, deleteABlog, updateABlog, addNewBlog
}
