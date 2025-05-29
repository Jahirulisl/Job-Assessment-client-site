import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
    const [Jobs,setJobs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data =>{
            setJobs(data);
        })
    },[])

    return (
        <div>
            <h1>jobs length:{Jobs.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    Jobs.map(job =><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
            
        </div>
    );
};

export default HotJobs;