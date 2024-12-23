import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Semisters.css';

const Semisters = () => {
    const { courseName } = useParams(); // Access the course name from the route
    const navigate = useNavigate();

    const semesters = [
        { id: 1, name: 'Semester 1' },
        { id: 2, name: 'Semester 2' },
        { id: 3, name: 'Semester 3' },
        { id: 4, name: 'Semester 4' },
        { id: 5, name: 'Semester 5' },
        { id: 6, name: 'Semester 6' },
        { id: 7, name: 'Semester 7' },
        { id: 8, name: 'Semester 8' },
    ];

    const handleSemesterClick = (semesterId) => {
        console.log(semesterId, courseName);
        navigate(`/${courseName}/semester-${semesterId}`);
    };

    return (
        <div className="semesters-container">
            <h1 className="heading">{courseName.replace('-', ' ')} - Semesters</h1>
            <div className="semesters-grid">
                {semesters.map((semester) => (
                    <div
                        key={semester.id}
                        className="semester-card"
                        onClick={() => handleSemesterClick(semester.id)}
                    >
                        {semester.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Semisters;
