const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
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
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Rohan",
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
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Lakshay",
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
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Meera",
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
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Ananya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer service analysis",
        description: "Analyze recent customer service trends.",
        date: "2024-11-04",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Organize marketing campaign",
        description: "Plan and coordinate the new product marketing campaign.",
        date: "2024-11-12",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Tarun",
    email: "admin@me.com",
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
  return { employee, admin };
};
