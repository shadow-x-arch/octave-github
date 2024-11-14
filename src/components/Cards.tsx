import React from 'react';
import './Cards.css';

const cardData = [
  {
    status: 'To Do',
    title: 'Footer Design',
    description: 'Design a cohesive footer section for the landing page with navigation and contact links.',
    image: 'a1.png',
    deadline: 'Sep 30',
    avatars: [{ src: 'a1.png', title: 'Alex' }, { src: 'a2.png', title: 'Jordan' }],
    comments: 3,
  },
  {
    status: 'In Progress',
    title: 'New Landing Project',
    description: 'Create  .',
    image: 'a2.png',
    avatars: [{ src: 'a1.png', title: 'Sam' }, { src: 'a3.png', title: 'Pat' }],
    comments: 8,
  },
  {
    status: 'Completed',
    title: 'Team Section',
    description: 'Develop a section that showcases team members.',
    image: 'a3.png',
    avatars: [{ src: 'a2.png', title: 'Morgan' }],
    comments: 3,
  },
  // Continue adding other cards here...
];

const Dashboard: React.FC = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className={`card card-${index + 1}`}>
          <span className={`status ${card.status.toLowerCase().replace(' ', '-')}`}>{card.status}</span>
          <h3>{card.title}</h3>
          <p className="description">{card.description}</p>
          <img src={card.image} alt={`Card Image ${index + 1}`} className="card-image" />
          {card.deadline && <p className="deadline">Deadline: {card.deadline}</p>}
          <div className="footer">
            <div className="avatars">
              {card.avatars.map((avatar, i) => (
                <img key={i} src={avatar.src} alt="Avatar" title={avatar.title} />
              ))}
            </div>
            <span className="comments">{card.comments} Comments</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
