"use client";
import React, { useState } from "react";
import "./Form.css";
import { newPost } from "@/axios/api";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const res = await newPost(formData);
    setFormData({
      category: "",
      title: "",
      author: "",
      content: "",
    });
    alert(res?.message);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value={"News"}>News</option>
            <option value={"Opinion"}>Opinion</option>
            <option value={"Legal"}>Legal</option>
            <option value={"Health"}>Health</option>
            <option value={"Faith"}>Faith</option>
            <option value={"Women"}>Women</option>
            <option value={"Youth"}>Youth</option>
            <option value={"Life"}>Life</option>
            <option value={"Culture"}>Culture</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea rows={8} name="content" value={formData.content} onChange={handleChange} required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
