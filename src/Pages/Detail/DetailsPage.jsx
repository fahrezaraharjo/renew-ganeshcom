import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { workDatas } from '../../utils/dummyData';
import { Footer, Navbar } from '../../components';
import YouTube from "react-youtube";
import { articles } from '../../utils/dummyData';


const DetailsPage = () => {
  const { id } = useParams();
  const videoUrl = "https://www.youtube.com/watch?v=-Fo28zDcp5Y";
  const videoId = videoUrl.match(/(?:v=)([\w-]+)/)[1];
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  // Find the work item with the matching id
  const items = Object.values(workDatas).reduce((acc, data) => acc.concat(data.items), []);
  const item = items.find((item) => item.id === id);
  if (!item) {
    return <div>Work item not found</div>;
  }

  const [activeTab, setActiveTab] = useState(item.systemFeatures[0].id);

  return (
    <div className='min-h-screen gradient-bg-welcome'>
      <Navbar />
      <div className='container mx-auto px-4 pt-12 pb-24'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-blue-700 mb-4'>{item.name}</h1>
            <p className='text-blue-200 leading-relaxed mb-12 w-1/2'>{item.desc2}</p>
          </div>
          <div className='w-full h-[2px] bg-gray-500 '></div>
        </div>
        <h2 className='text-2xl font-bold text-blue-200 mb-4 mt-4'>System Features</h2>
        <div className='flex flex-col'>
          <div className='flex w-1/2 flex-wrap m-3'>
            {item.systemFeatures.map(feature => (
              <button
                key={feature.id}
                className={`py-2 px-4 mr-2 rounded-lg border mt-2 ${feature.id === activeTab
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-blue-500 border-gray-300'
                  }`}
                onClick={() => setActiveTab(feature.id)}
              >
                {feature.name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap ">
            {item.systemFeatures.map(feature => (
              <div
                key={feature.id}
                className={`p-4 flex flex-row w-full h-[440px] gap-6 justify-between items-start ${feature.id === activeTab ? '' : 'hidden'
                  } mt-8`}
              >
                <div className='w-1/2 h-[400px] rounded-md bg-white'>
                <img className='mb-6 object-cover rounded-md w-full h-full' src={feature.img} alt={feature.name} />
                </div>
                <div className='white-glassmorphism w-1/2 h-full p-10'>
                  <h1 className='font-bold text-3xl text-blue-500 mb-4'>
                    Desc:
                  </h1>
                <p className='text-gray-100 leading-relaxed'>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default DetailsPage;