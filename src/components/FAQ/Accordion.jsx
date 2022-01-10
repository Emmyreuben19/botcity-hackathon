import { useState } from "react";

const Accordion = ({ id, title, content }) => {

    const [active, setActive] = useState(false);
    return (
        <>
          <button 
            className={active ? `faq__title active` : `faq__title`}
            onClick={() => setActive(!active)}
          >
            <div key={id}>
              {title}
            </div>

            <div>
              <i 
                className={active ? `fa fa-minus` : `fa fa-plus`} ></i>
            </div>
          </button>

          {active &&
            <div className="faq__answer-wrapper">
                <div className={`faq__answer ${active ? "open" : ""}`}>
                  {content}
                </div>
            </div>
          }

        </>
    )
}

export default Accordion
