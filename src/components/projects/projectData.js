import noteTaker from "../../assets/Projects/noteTake.png";
import emTracker from "../../assets/Projects/EmployeeTracker.png";
import teamProfile from "../../assets/Projects/teamProfile.png";

import socialNetwork from "../../assets/Projects/socialNetwork.png";

const cardContact = {
  cardData: [
    {
      id: "1",
      title: "JavaScript Algorithms",
      img: "https://miro.medium.com/v2/resize:fit:700/1*1G6lHZII2Kx4vhaMVOhqvw.png",
      description: "Here are some list of algorithm questions and answers that are commonly appear in a programming interview.",
      siteLink: "",
      ghLink: "https://github.com/kabirfaisal1/js_Algorithms.git"
    },
    {
      id: "2",
      title: "Prize Wizard",
      img: "https://t3.ftcdn.net/jpg/03/53/83/92/240_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg",
      description: "**Under Construction** Ecommerce website",
      siteLink: "",
      ghLink: ""
    },
    {
      id: "3",
      title: "Note Taker",
      img: `${noteTaker}`,
      description: "This Application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      siteLink: "https://fk-note-taker.herokuapp.com/notes",
      ghLink: "https://github.com/kabirfaisal1/NoteTaker.git"
    }, {
      id: "4",
      title: "Tech-Blog",
      img: "https://techblogbuilder.com/wp-content/uploads/sites/4/2021/06/techblogbuilder-home.png",
      description: "Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.",
      siteLink: "https://fk-tech-blog.herokuapp.com",
      ghLink: "https://github.com/kabirfaisal1/Tech-Blog.git"
    }, {
      id: "5",
      title: "JavaScript Quiz",
      img: 'https://i.pinimg.com/236x/49/40/9b/49409ba3c6185a7b28ec94fab4d4b20d.jpg',
      description: "Worked on a application that build a timed coding quiz with multiple-choice questions for javascript. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code and store users score in localStorage.",
      siteLink: "https://kabirfaisal1.github.io/JavaScriptQuiz/",
      ghLink: "https://github.com/kabirfaisal1/JavaScriptQuiz.git"
    },
    {
      id: "6",
      title: "FiveDay Weather",
      img: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-johannes-plenio-1118873.jpg&fm=jpg',
      description: "Creating a simple five (5) day weather application that allows a user to view five day weater based on there query city. This application will use Third-party APIs to OpenWeather One Call API to retrieve weather data for cities. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. User run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
      siteLink: "https://kabirfaisal1.github.io/FiveDayWeather/",
      ghLink: "https://github.com/kabirfaisal1/FiveDayWeather.git"
    },
    {
      id: "7",
      title: "Password Generator",
      img: "https://1password.com/img/redesign/password-generator/laptop.84e23294b9912d010a39b02321119b98.svg",
      description: "Working on a application that generated a random password based user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes.",
      siteLink: "https://kabirfaisal1.github.io/PasswordGenerater/",
      ghLink: "https://github.com/kabirfaisal1/PasswordGenerater.git"
    },
    {
      id: "8",
      title: "WorkDay Scheduler",
      img: "https://kineticsoftware.com/wp-content/uploads/2019/09/schedule-1.png",
      description: "Creating a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
      siteLink: "https://kabirfaisal1.github.io/WorkDayScheduler/",
      ghLink: "https://github.com/kabirfaisal1/WorkDayScheduler.git"
    },
    {
      id: "9",
      title: "Social Network API",
      img: `${socialNetwork}`,
      description: "This API based app for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js Links to an external site. and Mongoose Links to an external site. packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.",
      siteLink: "",
      ghLink: "https://github.com/kabirfaisal1/SocialNetworkAPI.git"
    },
    {
      id: "10",
      title: "Employee Tracker",
      img: `${emTracker}`,
      description: "These interfaces are called content management systems (CMS). My assignment was to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
      ghLink: "https://github.com/kabirfaisal1/EmployeeTracker.git",
      siteLink: ""
    },
    {
      id: "11",
      title: "Team Profile",
      img: `${teamProfile}`,
      description: "This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This project demonstrates use of OOP and TDD using Jest.",
      ghLink: "https://github.com/kabirfaisal1/teamProfile.git",
      siteLink: ""
    },

  ]
}

export default cardContact