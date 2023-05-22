import React, { useState, useEffect } from "react";
import NavBar from './Components/NavBar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data";

import { toast } from "react-toastify";


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  // const fetchData = async () => {
  async function fetchData() {
    setLoading(true);
    try {
      const result = await fetch(apiUrl);
      const output = await result.json();

      // console.log(data);
      //* Save data into variables   
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <NavBar />

      <Filter filterData={filterData} category={category} setCategory={setCategory} />

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner />) : <Cards courses={courses} category={category} />
        }
      </div>
    </div>
  );
};

export default App;
