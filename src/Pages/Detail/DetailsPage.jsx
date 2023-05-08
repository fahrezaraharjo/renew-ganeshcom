import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { workDatas } from '../../utils/dummyData';
import { Navbar } from '../../components';

const DetailsPage = () => {
  const { id } = useParams();

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
        <div className='flex '>
          <div className='flex flex-col'>
          <h1 className='text-4xl font-bold text-blue-700 mb-4'>{item.name}</h1>
          <p className='text-blue-200 leading-relaxed mb-12'>{item.desc}</p>
          </div>
          <img className='mb-6' src={item.img} alt={item.name} />
        </div>
        <h2 className='text-2xl font-bold text-blue-200 mb-4'>System Features</h2>
        <div className='flex flex-col'>
          <div className='flex'>
            {item.systemFeatures.map(feature => (
              <button
                key={feature.id}
                className={`py-2 px-4 mr-2 rounded-lg border ${feature.id === activeTab
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-blue-500 border-gray-300'
                  }`}
                onClick={() => setActiveTab(feature.id)}
              >
                {feature.name}
              </button>
            ))}
          </div>
          <div>
            {item.systemFeatures.map(feature => (
              <div
                key={feature.id}
                className={`${feature.id === activeTab ? '' : 'hidden'
                  } mt-8`}
              >
                <img className='mb-6' src={feature.img} alt={feature.name} />
                <p className='text-gray-700 leading-relaxed'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;