import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { solutionDatas } from '../../utils/dummyData';
import { Footer, Navbar } from '../../components';
import YouTube from "react-youtube";
import { articles } from '../../utils/dummyData';


const DetailsSolutionPage = () => {
  const { id } = useParams();
  const videoUrl = "https://www.youtube.com/watch?v=-Fo28zDcp5Y";
  const videoId = videoUrl.match(/(?:v=)([\w-]+)/)[1];
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  // Find the work item with the matching id
  const items = Object.values(solutionDatas).reduce((acc, data) => acc.concat(data.items), []);
  const item = items.find((item) => item.id === id);
  if (!item) {
    return <div>Work item not found</div>;
  }
  return (
    <div className='min-h-screen gradient-bg-welcome'>
      <div className='container mx-auto px-4 pt-28 pb-24'>
        <div className='flex flex-row gap-6 h-[380px]'>
          <div className='flex flex-col w-full'>
            <h1 className='text-2xl font-bold text-blue-700 w-full mb-4'>{item.name}</h1>
            <p className='text-blue-200 leading-relaxed mb-12 '>{item.desc}</p>
          </div>
          <div className='w-full bg-white'>
            <img src={item.img} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
        <h2 className='text-2xl font-bold text-blue-200 mb-4 mt-4'>System Features</h2>
        <div className='flex flex-row gap-10 border-t-2 border-gray-500 mt-5'>
          <div className='flex flex-col mt-5'>
            <h1 className='text-2xl text-blue-300 mb-4'>
              Implementation
            </h1>
            <div className='w-1/4'>
              <YouTube
                videoId={videoId}
                className="object-cover rounded-lg shadow-md"
                opts={opts}
              />
            </div>
          </div>
          <div className="pr-8 w-1/2 mt-10">
            {articles.map((article) => (
              <div key={article.id} className="flex flex-col mb-8 md:flex-row">
                <div className="md:w-1/3 md:pr-4">
                  <img className="object-cover w-full h-40 md:h-auto md:w-full" src={article.image} alt={article.title} />
                </div>
                <div className="md:w-2/3 pl-4">
                  <h3 className="text-lg font-medium text-blue-600">{article.title}</h3>
                  <p className="mt-4 text-gray-400">{article.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsSolutionPage;