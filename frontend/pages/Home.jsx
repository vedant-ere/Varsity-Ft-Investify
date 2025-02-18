import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cover from "../src/assets/images/Cover.png";
import { BookOpen, TrendingUp, Users, Award, MessageCircle, ChevronRight, Twitter, Facebook, Linkedin, Instagram, Github } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='font-inter font-medium dark:bg-gray-900 transition-colors duration-200'>
      {/* Hero Section */}
      <div className='max-w-screen-lg mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center mt-16 md:mt-20'>
          <div className='md:basis-2/3'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 dark:text-white'>Free and open</h1>
            <h2 className='text-xl md:text-2xl font-semibold mb-4 dark:text-gray-200'>stock market and financial education</h2>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>Learn to invest and trade with confidence. Start your journey to financial freedom today.</p>
            {/* <button 
            onClick={() => navigate(`/modules`)}
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300'>
              Start Learning
            </button> */}
          </div>
          <div className='md:basis-1/3 mt-8 md:mt-0'>
            <img className='w-full h-auto rounded-lg shadow-md dark:shadow-gray-700/20' src={Cover} alt="Financial Education" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-gray-50 dark:bg-gray-800 py-16 mt-16 transition-colors duration-200'>
        <div className='max-w-screen-lg mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 dark:text-white'>Why Learn With Us?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <BookOpen className='text-blue-600 dark:text-blue-400 mb-4 h-12 w-12' />
              <h3 className='text-xl font-bold mb-2 dark:text-white'>Comprehensive Modules</h3>
              <p className='text-gray-600 dark:text-gray-300'>From stock market basics to advanced trading strategies, we cover it all.</p>
            </div>
            <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <TrendingUp className='text-blue-600 dark:text-blue-400 mb-4 h-12 w-12' />
              <h3 className='text-xl font-bold mb-2 dark:text-white'>Real-world Examples</h3>
              <p className='text-gray-600 dark:text-gray-300'>Learn through practical case studies and market scenarios.</p>
            </div>
            <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <Users className='text-blue-600 dark:text-blue-400 mb-4 h-12 w-12' />
              <h3 className='text-xl font-bold mb-2 dark:text-white'>Community Support</h3>
              <p className='text-gray-600 dark:text-gray-300'>Join thousands of learners helping each other succeed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Modules Section */}
      <div className='py-16 max-w-screen-lg mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-4 dark:text-white'>Learning Modules</h2>
        <p className='text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto'>Structured learning paths to take you from beginner to advanced investor</p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300'>
            <div className='bg-blue-50 dark:bg-blue-900/20 p-6'>
              <h3 className='text-2xl font-bold mb-2 dark:text-white'>Introduction to Stock Markets</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>Perfect for absolute beginners</p>
              <span className='inline-block bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full'>12 Chapters</span>
            </div>
            <div className='p-6 dark:bg-gray-800'>
              <ul className='space-y-3'>
                <li className='flex items-center text-gray-600 dark:text-gray-300'><ChevronRight className='h-5 w-5 text-blue-600 dark:text-blue-400 mr-2' />The Need to Invest</li>
                <li className='flex items-center text-gray-600 dark:text-gray-300'><ChevronRight className='h-5 w-5 text-blue-600 dark:text-blue-400 mr-2' />Regulators & Participants</li>
                <li className='flex items-center text-gray-600 dark:text-gray-300'><ChevronRight className='h-5 w-5 text-blue-600 dark:text-blue-400 mr-2' />Stock Market Indices</li>
              </ul>
              <button
              onClick={() => navigate(`/modules/1`)}
               className='mt-6 cursor-pointer text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300'>
                Start Learning <ChevronRight className='h-5 w-5 ml-1' />
              </button>
            </div>
          </div>
          
          <div className='border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300'>
            <div className='bg-green-50 dark:bg-green-900/20 p-6'>
              <h3 className='text-2xl font-bold mb-2 dark:text-white'>Technical Analysis</h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>Master chart patterns and indicators</p>
              <span className='inline-block bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-300 text-sm px-3 py-1 rounded-full'>15 Chapters</span>
            </div>
            <div className='p-6 dark:bg-gray-800'>
              <ul className='space-y-3'>
                <li className='flex items-center text-gray-600 dark:text-gray-300'><ChevronRight className='h-5 w-5 text-green-600 dark:text-green-400 mr-2' />Candlestick Patterns</li>
                <li className='flex items-center text-gray-600 dark:text-gray-300'><ChevronRight className='h-5 w-5 text-green-600 dark:text-green-400 mr-2' />Moving Averages</li>
                <li className='flex items-center text-gray-600 dark:text-gray-300'><ChevronRight className='h-5 w-5 text-green-600 dark:text-green-400 mr-2' />Volume Analysis</li>
              </ul>
              <button onClick={() => navigate(`/modules/2`)}  className='mt-6 cursor-pointer text-green-600 dark:text-green-400 font-semibold flex items-center hover:text-green-800 dark:hover:text-green-300 transition-colors duration-300'>
                Start Learning <ChevronRight className='h-5 w-5 ml-1' />
              </button>
            </div>
          </div>
        </div>
        
        <div className='mt-10 text-center'>
          <button onClick={() => navigate(`/modules`)} className='bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300'>
            View All Modules
          </button>
        </div>
      </div>

      
      
    </div>
  );
};

export default Home;