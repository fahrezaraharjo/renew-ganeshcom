import React from 'react'
import { articles } from "../utils/dummyData";
import { motion } from "framer-motion";

const Article = () => {
    return (
        <div className="md:w-2/3 lg:w-3/5 pr-8">
            {articles.map((article) => (
                <motion.div
                    className="flex flex-row justify-start items-start p-3 m-2 cursor-pointer hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    whileInView={{ x: [50, 150, 100], opacity: [0, 0, 1] }}
                >
                    <div key={article.id} className="flex flex-col mb-8 md:flex-row">
                        <div className="md:w-1/3 md:pr-4">
                            <img className="object-cover w-full h-40 md:h-auto md:w-full" src={article.image} alt={article.title} />
                        </div>
                        <div className="md:w-2/3 pl-4">
                            <h3 className="text-lg font-medium text-blue-600">{article.title}</h3>
                            <p className="mt-4 text-gray-400">{article.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>)
}

export default Article