import { motion } from 'framer-motion';
import { categoriesSolutions } from '../utils/dummyData';

const CategoryMenu = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <div className="flex flex-col">
            {categoriesSolutions.map((category) => (
                <motion.button
                    key={category.value}
                    className={`${selectedFilter === category.value ? 'bg-black rounded-full p-3 text-white text-left' : 'bg-tranparent text-gray-100 text-left items-start'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedFilter(category.value)}
                >
                    <h1 className='text-center'>
                    {category.label}
                    </h1>
                </motion.button>
            ))}
        </div>
    );
};

export default CategoryMenu;