import React, { useEffect } from "react";
import Jobs from "../components/Jobs";
import Search from "../components/Search";

import { useSelector, useDispatch } from "react-redux";
import { getJobs } from "../actions/jobs";

const Home = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className="w-[94%] mx-auto mt-10">
      <Search />
      <Jobs jobs={jobs} />
    </div>
  );
};

export default Home;
