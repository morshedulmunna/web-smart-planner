"use client";

import { createTodo } from "@/api";
import { useState } from "react";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

type Props = { setShowModal: React.Dispatch<React.SetStateAction<boolean>> };

export default function CreateTodoForm({ setShowModal }: Props) {
  const [value1, onChange1] = useState("10:00");
  const [value2, onChange2] = useState("10:00");
  const [title, setTittle] = useState("");
  const [description, descriptionTittle] = useState("");

  const currentDate = new Date().toISOString().split("T")[0];
  const start_time1 = `${currentDate}T${value1}:00Z`;
  const start_time2 = `${currentDate}T${value2}:00Z`;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const object = {
      title: title,
      short_des: description,
      start_time: start_time1,
      end_time: start_time2,
    };

    const data = await createTodo(object);

    console.log(data);

    if (data) {
      setShowModal(false);
      window.alert("Todo Create Successfully");
    }
  };

  return (
    <div>
      <p className="mb-4 text-center  text-lg font-medium">Create Todo</p>
      <form action="">
        {/* Title */}
        <div className="mb-4">
          <label className="text-base" htmlFor="title">
            Title
          </label>
          <input
            required
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic"
            placeholder="Todo title..."
            onBlur={(e) => setTittle(e.target.value)}
          />
        </div>

        {/* short description */}
        <div className="mb-4">
          <label className="text-base " htmlFor="description">
            Short Description
          </label>
          <textarea
            required
            name="description"
            id="description"
            autoComplete="off"
            cols={10}
            rows={5}
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic resize-none"
            placeholder="Short description...."
            onBlur={(e) => descriptionTittle(e.target.value)}
          />
        </div>

        <div className="flex  items-center mb-6">
          <TimePicker
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic resize-none"
            onChange={onChange1}
            value={value1}
          />
          <TimePicker
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic resize-none"
            onChange={onChange2}
            value={value2}
          />
        </div>

        <button
          className="bg-blue-500 w-full py-2 rounded-md text-white font-semibold"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Create Todo
        </button>
      </form>
    </div>
  );
}
