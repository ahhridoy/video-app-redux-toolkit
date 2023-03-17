import React from 'react';
import Pagination from '../components/Pagination';
import Tags from '../components/Tags';
import VideosList from '../components/HomeVideos/VideosList';

const Home = () => {
   return (
      <>
       <Tags /> 
       <VideosList />
       <Pagination />
      </>
   );
};

export default Home;