import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded " id="alltask">
      <div className="bg-gray-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5  text-lg font-medium bg-red-600">Employee Name</h2>
        <h3 className="w-1/5  text-lg font-medium bg-red-600">New Task</h3>
        <h5 className="w-1/5  text-lg font-medium bg-red-600">Active Task</h5>
        <h5 className="w-1/5  text-lg font-medium bg-red-600">Completed</h5>
        <h5 className="w-1/5  text-lg font-medium bg-red-600">Failed</h5>
      </div>
      <div className=" overflow-auto">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-slate-700 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="w-1/5  text-lg font-medium ">{elem.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium  text-blue-400">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium  text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="w-1/5  text-lg font-medium text-white-600">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium  text-red-600">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
