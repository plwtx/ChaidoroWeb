import { useState, useEffect } from "react";
import { TbSteam } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function TaskInputField({ todos, setTodos }) {
  const [task, setTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      const newTodo = { id: uuidv4(), task, status: "active" };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  const { t } = useTranslation();
  return (
    <div className="">
      {/* Task input field */}
      <div className="mx-3 rounded-lg border border-b-2 border-secondary45 bg-bgPrimary bg-white p-3 shadow-sm shadow-text">
        <div className="flex flex-row justify-between">
          <div className="relative flex flex-grow items-center gap-x-6 px-3 text-secondary">
            <TbSteam />
            <input
              onKeyDown={handleKeyPress}
              type="text"
              maxLength={30}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              id="todos"
              placeholder={t("taskAddMsg")}
              autoComplete="off"
              className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-primary outline-none placeholder:tracking-tight placeholder:text-secondary placeholder:opacity-80 focus:ring-0"
            />
            <label className="text-md peer-focus:border-xblack peer-focus:text-xblack pointer-events-none absolute bottom-6 right-0 z-10 origin-[0] scale-100 transform rounded-xl bg-white px-1 opacity-0 transition-all duration-300 ease-in-out peer-focus:border-2 peer-focus:px-6 peer-focus:py-2 peer-focus:opacity-100">
              Press enter to add task
            </label>
            {/* Add button */}
            {/* <button className="bg-clockText rounded-lg p-2">
              <TbArrowBigUpLinesFilled className="fill-secondary45" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
