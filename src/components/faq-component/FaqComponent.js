import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "../../../node_modules/react-icons/fi";
import faqData from "../faq-component/faqData.json";


export default function FaqComponent() {
  const [qAndaData, setfaqData] = useState(faqData);

  const toggleAccordion = (id) => {
    const statFound = qAndaData;
    const index = statFound.findIndex(stat => stat.id === id);
    statFound[index] = {...statFound[index], active: !statFound[index].active};
    setfaqData([...qAndaData]);
  };

  return (
    <>
      <div className="faq">
      <h4 className="faq-header">
                  FAQs
                </h4>
        {qAndaData.map(item => (
          <div className="q-and-a">
          <button
            className={`question-section ${item.active}`}
            onClick={() => toggleAccordion(item.id) }
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                {item.question}
                </h4>
                <FiPlus
                  className={item.active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                className={item.active ? `answer answer-divider ans` : `answer que`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          </button>
        </div>
        ))}
      </div>
    </>
  );
}
