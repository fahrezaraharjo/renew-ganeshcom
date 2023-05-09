import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  open: { scale: 1.05 },
  closed: { scale: 1 },
};

const CardAnimation = ({ data }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-wrap justify-center -mx-2">
      <AnimatePresence>
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            variants={cardVariants}
            animate={selected === item.id ? "open" : "closed"}
            onClick={() => setSelected(item.id)}
            exit={{ scale: 0 }}
          >
            <div className="bg-white rounded-lg shadow-md p-4 h-full">
              <img src={item.imageUrl} alt={item.title} className="w-full mb-2 h-40 object-cover" />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardAnimation;