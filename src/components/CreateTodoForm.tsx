"use client";

import { useState } from "react";
import "react-clock/dist/Clock.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

type Props = {};

export default function CreateTodoForm({}: Props) {
  const [value1, onChange1] = useState("10:00");
  const [value2, onChange2] = useState("10:00");

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
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic"
            placeholder="Todo title..."
          />
        </div>

        {/* short description */}
        <div className="mb-4">
          <label className="text-base " htmlFor="description">
            Short Description
          </label>
          <textarea
            name="description"
            id="description"
            autoComplete="off"
            cols={10}
            rows={5}
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic resize-none"
            placeholder="Short description...."
          />
        </div>

        <div className="flex  items-center mb-6">
          <TimePicker
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic resize-none"
            onChange={onChange2}
            value={value2}
          />
          <TimePicker
            className="border w-full text-sm outline-none px-2 py-2 rounded-md placeholder:italic resize-none"
            onChange={onChange1}
            value={value1}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-full py-2 rounded-md text-white font-semibold"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
}
