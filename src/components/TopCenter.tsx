import React from 'react';
import './TopCenter.css'; // Ensure your styles are linked correctly

const Dashboard: React.FC = () => {
  return (
    <><p className='inline-list'><ul>
      <li> workspace </li>
      <li> create </li>
      <li> <b>creative typescript </b></li> 
    </ul>
    </p>
    <h2>Website Design </ h2>
    <div className="team"> 
    <img src="./public/20.png" alt="Profile 1" className="profile-icon" />
    <h5 className='h5'>limited Access</h5>
            <img src="./public/q1.png" alt="Profile 1" className="profile-icon" />
            <img src="./public/q2.png" alt="Profile 2" className="profile-icon" />
            <img src="./public/q3.png" alt="Profile 3" className="profile-icon" />
            <img src="./public/q4.png" alt="Profile 4" className="profile-icon" />
            <div className="more-members">+2</div>
            <button className="add-button">+</button>
          </div>
    <div className="container">
        <div className="header">
          <div className="access">

          </div>
         
         
        </div>
        <div className="task-tabs">
          <div className="tab active">All Tasks <span className="count">23</span></div>
          <div className="tab">To do <span className="count">3</span></div>
          <div className="tab">In Progress <span className="count">6</span></div>
          <div className="tab">Completed <span className="count">14</span></div> 
 
        </div>
      </div></>
  );
};

export default Dashboard;
