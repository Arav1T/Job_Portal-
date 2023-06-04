// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import JobList from './Components/JobList';
import JobDetails from './Components/JobDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const list =
    [{
      title: "APPSDEPLOYER",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React React Native ",
      stiped: "$80 per month",
      duration: "4-6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    },
    {
      title: "Urgent Hring For React JS Fresher HTML",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React React Native ",
      stiped: "$80 per month",
      duration: "4-6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    },
    {
      title: "ReactJS Developer",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React  ",
      stiped: "$85 per month",
      duration: "6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }, {
      title: "APPSDEPLOYER Live",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React React Native ",
      stiped: "$80 per month",
      duration: "4-6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }, {
      title: "React Node. Js developer",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React Node.js ",
      stiped: "$80 per month",
      duration: "4-6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }, {
      title: "Frontend Developer(HTML, CSS, React.js)",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "HTML CSS JAVASCRIPT REACT",
      stiped: "$30 per month",
      duration: "3 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }, {
      title: "ERPNext Developer",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React React Native DOTNet",
      stiped: "$80 per month",
      duration: "4-6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    },
    {
      title: "PHP Wordpress Developer",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React PHP WordPress ",
      stiped: "$120 per month",
      duration: "4 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }, {
      title: "React Native Developer",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React Javascript HTML ",
      stiped: "$60 per month",
      duration: "4-6 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }, {
      title: "Urgent Hring For React JS Fresher",
      description: "We are a leading software company seeking a skilled and experienced React.js Developer to join our dynamic team. As a React.js Developer, you will play a crucial role in developing and implementing user interface components using React.js concepts and workflows. You will work closely with the development team, collaborating on the design and implementation of innovative software solutions. This is an exciting opportunity to work on cutting-edge projects and contribute to the growth and success of our company.",
      tag: "React React Native HTML CSS ",
      stiped: "$100 per month",
      duration: "2-3 month",
      info: "Work from home,Day shift, Monday to Friday, Morning shift,Weekend availability"
    }]
  const [detailsValue, setdetailsValue] = useState({})
  const [ky, setky] = useState()
  
  const content = (value,keys) => {
    list.forEach((currValue) => {


      if (value === currValue.title) {
        setdetailsValue(currValue)
        setky(keys)
        console.log(keys)
        
      }
          })
  }
  return (
    <Router>
      <Routes>
        <Route element={<JobList contents={content} list={list} />} exact path='/' />

      </Routes>



      <Routes>
        <Route element={<JobDetails detailsValue={detailsValue} />} exact path={`/${ky}`} />
      </Routes>

    </Router>
  );
}

export default App;
