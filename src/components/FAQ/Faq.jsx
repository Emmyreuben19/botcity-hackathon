import faqs from "./faqData";
import Accordion from "./Accordion";
import "./faq.css";

const Faq = () => {
  return (
    <section className="faq section" id="faq">
      <h2 className="section__title">FAQ</h2>
      <span className="section__subtitle">Frequently Asked Quetion</span>

      <div className="faq__container container">
       
          <div className="faq__content grid">
             {faqs.map(({ id, title, content}) => (
               <Accordion 
                  key={ id }
                  title={ title }
                  content={ content }
                />
             ))}
          </div>
          
      </div>
    </section>
  )
}

export default Faq
