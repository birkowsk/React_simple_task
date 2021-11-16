import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Task1 from './Tasks/task1-sidebarToggler/Task1';
import AppContext from './Tasks/task2-tours/AppContext';
import Task3 from './Tasks/task3-reviews/Task3';
import Task4 from './Tasks/task4-questions/Task4';
import Task5 from './Tasks/task5-menu/Task5';
// import Task6 from './Tasks/task6-slider/Task6';
import Task7 from './Tasks/task7-tabs/Task7';
import Task8 from './Tasks/task8-lorem/Task8';
import Task9 from './Tasks/task9-groceryBud/Task9';
import MainHeader from './Tasks/components/MainHeader'


import './main.css';

export default function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<AppContext />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          {/* <Route path="/task6" element={<Task6 />} /> */}
          <Route path="/task7" element={<Task7 />} />
          <Route path="/task8" element={<Task8 />} />
          <Route path="/task9" element={<Task9 />} />
        </Routes>
      </main>
    </div>
  )
}


