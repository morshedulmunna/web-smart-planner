"use client";
import { deleteTodo, getallTodo } from "@/api";
import auth from "@/api/config/firebase.config";
import CreateTodoForm from "@/components/CreateTodoForm";
import Modal from "@/components/Modal";
import { timeFormat } from "@/utils/getTime";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { TiDelete } from "react-icons/ti";

const Todo = ({}) => {
  const [open, setOpen] = useState(false);
  const [todo, setToto] = useState([]);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    getallTodo(user?.email)
      .then((todoList) => {
        setToto(todoList);
      })
      .catch((error) => {
        console.error("Error fetching todo list:", error);
      });
  }, [todo]);

  const handleDelete = async (id: string) => {
    const res = await deleteTodo(id);
    console.log(res);

    if (res) {
      window.alert(`Item Deleted ID: ${id}`);
    }
  };

  return (
    <React.Fragment>
      <div className="h-[60vh] overflow-y-scroll bg-white m-4 shadow p-4 rounded-md">
        {/* title area */}
        <div className="flex  border-b-[1px] pb-4 justify-between items-center">
          <h2 className="font-semibold">CLASS TIMELINE</h2>
          <div className="flex  space-x-2 items-center">
            <div className="bg-red-500 h-3 w-3 rounded-full"></div>
            <div className="bg-green-500 h-3 w-3 rounded-full"></div>
            <div className="bg-blue-500 h-3 w-3 rounded-full"></div>

            <button
              onClick={() => setOpen(true)}
              className="border-blue-500 border px-2 rounded-xl text-lg text-blue-500 hover:bg-blue-500 hover:text-white duration-150 ease-linear"
            >
              +
            </button>
          </div>
        </div>
        {/* title area  End*/}

        {/* Modal */}
        <Modal
          content={
            <div className="w-[600px]">
              <CreateTodoForm setShowModal={setOpen} />
            </div>
          }
          showModal={open}
          setShowModal={setOpen}
        />

        {/* Create TODO Items */}
        {todo.map((item: any) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="grid grid-cols-12 px-4 py-4 w-full">
              <div className="col-span-2 border-r">
                <span>Data Time</span>
                <p className="text-base font-medium">
                  {timeFormat(item.create_at).mainDate}
                </p>
              </div>
              <div className="col-span-3 ml-6">
                <p>{timeFormat(item.start_time).formattedTime} </p>
                <p>{timeFormat(item.end_time).formattedTime} </p>
              </div>
              <div className="col-span-7 border-l-[1px] pl-3">
                <h5 className="font-medium"> {item.title} </h5>
                <p className="text-xs">{item.short_des.slice(0, 100)}...</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 p-[1px] rounded"
            >
              <TiDelete color="white" size={19} />
            </button>
          </div>
        ))}
        {/* Create TODO Items End */}
      </div>
    </React.Fragment>
  );
};
export default Todo;
