import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Courses = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map(course=><CourseDetails
                key={course._id}
                course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Courses;