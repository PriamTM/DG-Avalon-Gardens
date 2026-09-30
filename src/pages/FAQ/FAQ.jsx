import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom'

const FAQ = () => {
  const ExpandIcon = (
    <span>
      +
    </span>
  );
  return (
    <>
      <div className='container pt-12 pr-0 pb-16'> 
        <h1>Ask Us Anything</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<span className="text-xl">+</span>}
          >
            <h6 className="text-lg">Where can I find Avalon Garden products?</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              In all legally licensed dispensaries throughout Colorado, good sir! If you're looking for the Round Table
              Dispensary—which is our single home location—you can visit us at Valley Dirtlands, in Greeley, Colorado.
            </p>
            <div>
              <p>Call the Avalon Gardens social media manager for special offers!</p>
              <Link>(303) 555-4139</Link>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<span className="text-xl">+</span>}
          >
            <h6 className="text-lg">I'm a complete newbie when it comes to cannabis. Can I do Avalon Gardens as my first?</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Great question!
            </p>
            <p>
              The cannabis industry is rife and plentiful with variety; there is one for everyone! Opinions will vary, which is understandable.
              Nothing in cannabis is a one-size-fits all. Intensity, benefits and effects vary on product, strain, presentation and purpose.
              That's why we always recommend starting with low dosages, or relying on our experienced staff at the Round Table Dispensary for help.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<span className="text-xl">+</span>}
          >
            <h6 className="text-lg">Are there any side effects from consumption of cannabis?</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              None. We know that no cannabis products can ever truly guarantee a zero percent chance of side effects, but, at Avalon
              Gardens, we believe we've come really close. Our goal is to make every cannabis experience as pleasurable as possible.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<span className="text-xl">+</span>}
          >
            <h6 className="text-lg">Is it true Avalon Gardens products can help with quality of sleep?</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p>   
              Yes, they're perfect. for it. Look for Indica products. Sleep will come easy.
              Some users even report improved quality of dreams.
            </p>
          </AccordionDetails>
        </Accordion>
        <p className="text-[#121212]">So feel free to ask any questions.</p>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<span className="text-xl">+</span>}
          >
            <h6 className="text-lg">Is it true Avalon Gardens</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              None. We know no cannabis products can every truly guarantee a zero percent chance of side effects, but, at Avalon
              Gardens, we believe we've come really close to it. Our goal is to make every cannabis experience as pleasurable as possible.
            </p>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </>
  )
}
export default FAQ;
