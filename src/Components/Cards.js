import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    let allCourses = [];

    // returns a list of all courses received from the api response
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((courseData) => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            // Me sirf specific category ka data/array pass karunga
            return courses[category];
        }
    }
    // getCourses();
    // console.log(allCourses);

    return (
        <div className='flex justify-center flex-wrap gap-4 mb-4'>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}

export default Cards;