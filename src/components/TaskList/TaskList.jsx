import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className=" flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] py-5 w-full mt-10 "
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem}/>;
        }
        if (elem.Completed) {
          return <CompleteTask key={idx} data={elem}/>;
        }
        if (elem.Failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
