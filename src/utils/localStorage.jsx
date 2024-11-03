const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete report analysis",
        description: "Analyze the quarterly financial report.",
        date: "2024-11-05",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update client database",
        description: "Add recent client details to the CRM system.",
        date: "2024-11-06",
        category: "Data Entry",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team meeting preparation",
        description: "Prepare for the monthly team meeting.",
        date: "2024-11-07",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Client feedback review",
        description: "Review and summarize client feedback for the past month.",
        date: "2024-11-05",
        category: "Feedback",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Website content update",
        description: "Update homepage content as per new guidelines.",
        date: "2024-11-10",
        category: "Content Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory check",
        description:
          "Complete a physical inventory check for the main warehouse.",
        date: "2024-11-06",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Prepare sales report",
        description: "Create a comprehensive sales report for October.",
        date: "2024-11-08",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Server maintenance",
        description: "Perform routine server checks and updates.",
        date: "2024-11-05",
        category: "IT Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Training session setup",
        description: "Prepare materials for the upcoming employee training.",
        date: "2024-11-09",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Marketing strategy meeting",
        description: "Attend the strategy meeting for new product launch.",
        date: "2024-11-06",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Budget allocation planning",
        description: "Plan budget allocation for Q1 of 2025.",
        date: "2024-11-10",
        category: "Budgeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employee, admin);
};
