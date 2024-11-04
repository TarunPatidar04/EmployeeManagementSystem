import AllTask from "../other/AllTask";
import Createtask from "../other/Createtask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <Createtask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
