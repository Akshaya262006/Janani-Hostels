import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqData } from '../../data/hostelData';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`faq-item-card ${isOpen ? 'active' : ''} mb-3`}>
      <button className="faq-question-btn d-flex justify-content-between align-items-center w-100 p-4" onClick={toggleOpen}>
        <span className="faq-question-text text-start">{question}</span>
        <span className={`faq-icon-wrapper d-flex align-items-center justify-content-center ${isOpen ? 'rotate-icon' : ''}`}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer-content p-4 pt-0">
              <p className="faq-answer-text mb-0">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about hostel life, admissions, rules, and accommodation services.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="faq-accordion-wrapper">
              {faqData.map((item) => (
                <FAQItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  toggleOpen={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
