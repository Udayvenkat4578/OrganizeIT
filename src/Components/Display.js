import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeItem } from '../UserReducer';
import im from '../Assets/im.png';

const Display = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.userList);

  const [data, setData] = useState({
    task: "",
    description: ""
  });

  const { task, description } = data;

  const submit = (e) => {
    e.preventDefault();
    dispatch(addUser(data));
  };

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-max">
      <div className="bg-primary">
        <div className="text-white font-semibold text-2xl pb-7 pt-3 pl-11">
          OrganizeIT
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center">
          <div>
            <h1 className="grid grid-cols-1 place-items-center text-white text-lg pl-11 pr-11">
              Access all your tasks from one place using "OrganizeIT Central Hub." This extended version emphasizes the convenience and centrality of the application in managing your tasks and responsibilities.
            </h1>
          </div>
          <div>
            <img src={im} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-center text-lg font-bold text-white sm:mt-11 mt-5 mb-4">
            Add Your Task Here!
          </h1>
          <div className="grid grid-cols-1 place-items-center">
            <form className="flex sm:flex-row flex-col place-items-center">
              <div>
                <input
                  className="sm:my-0 my-2 px-3 py-1 border-2 text-white placeholder-white border-white bg-[#0d6efd] sm:mr-2 mr-3"
                  type="text"
                  value={task}
                  name="task"
                  placeholder="Enter Task"
                  onChange={change}
                />
              </div>
              <div>
                <input
                  className="sm:my-0 my-2 px-3 py-1 text-white placeholder-white border-2 border-white bg-[#0d6efd] mr-3"
                  type="text"
                  value={description}
                  name="description"
                  placeholder="Description (optional)"
                  onChange={change}
                />
              </div>
              <div>
                <button className="sm:my-0 my-2 bg-white text-blue-600 py-1.5 px-3 font-bold" onClick={submit}>
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h1 className="text-center text-lg font-bold text-white sm:mt-5 mt-5">Your Tasks</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-11 py-11 bg-[#0d6efd] lg:gap-7 md:gap-6 sm:gap-4 place-items-center">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className="bg-white sm:my-0 my-2 px-11 py-2 rounded-sm min-h-[120px] min-w-[300px]">
              <div className="px-1 pt-3">
                <div className="font-bold text-[#0d6efd] text-lg">
                  Task: <span className="font-semibold text-[#0d6efd] text-lg">{user.task}</span>
                </div>
                <div className="font-bold text-gray-500">
                  <span className="text-lg">Description:</span> <span className="text-md font-medium">{user.description}</span>
                </div>
                <div>
                  <h1 className="text-end text-[13px] pt-1 text-red-500">
                    <button onClick={() => dispatch(removeItem({ index }))}>Delete Task</button>
                  </h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className="text-white font-bold text-center">There are no current Tasks</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
