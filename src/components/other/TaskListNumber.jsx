const TaskListNumber = ({ data }) => {
  return (
    <div className="flex mt-10 screen justify-between gap-5">
      <div className="py-6 px-9 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-3xl font-medium">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-3xl font-medium">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Complete task</h3>
      </div>

      <div className="py-6 px-9 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-3xl font-medium">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Accept task</h3>
      </div>

      <div className="py-6 px-9 rounded-xl w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-medium">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
