import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { family } from '../../data/family'
import SectionHero from '../../components/Hero/SectionHero';
import styles from './About.module.css'
import canFarm from '../../assets/can-farm-avalon.jpg'
import cultivators from '../../assets/avalon-cultivators.jpg'
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 16
    },
    900: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 16
    }
  }
  return (
    <>
      <SectionHero image={canFarm} alt="cannabis plants" title="About The Garden" />
      <div className={`container ${styles.page}`}>
        <h2>Our Story: Pulling the Sword from the Stone</h2>
        <p>
          When we opened the gates to the Avalon Gardens and the Round Table Dispensary on 2015,
          we had something simple in mind: make high-quality cannabis products approachable.
          Transforming Valley Dirtlands into the Avalon Gardens row by row,
          grown with the utmost care and respect for the trade.
        </p>
        <p>
          Our commitment is to providing not just a product, but an experience, which goes above and beyond the usual
          expectations; imbuing our products with a unique, individual essence, just like all our customers.
        </p>
        <p>
          Come to the gardens and find your pluck, so you too can live like a King.
        </p>

        <h2>We have a seat at the Round Table just for you</h2>
        <p>
          And we'll get it right. Every product is tailor-made. There is one for everyone.
        </p>
        <p>
          At the Round Table Dispensary our staff is not just family; they are experts, and they 
          can find the right match for you. Come visit us!
        </p>
        <p>
          All of our products are also available all throughout dispensaries in the Colorado area.
        </p>
      </div>
      <div className={styles.heroContainer}>
        <img
          src={cultivators}
          alt="avalon cultivators working in a room full of cannabis"
          className={styles.familyImage}
        />
        <div className={styles.actions}>
          <h1>The Avalon Family</h1>
        </div>
      </div>
      <div className={`container pt-4 pb-16`}>
        <h2>Leadership</h2>
        <div className="mb-4">
          <Swiper
            breakpoints={breakpoints}
            navigation={true}
            modules={[Navigation]}
            // className="mySwiper"
            slidesPerView="1"
          >
            {family.filter((member) => member.category === 'leadership').map((member) => (  
              <SwiperSlide>
                <div key={`member - ${member.name}`} className="justify-start items-center flex flex-col flex-wrap gap-4">
                  <img
                    src={member.image.path}
                    alt={member.image.alt}
                    className="border border-solid border-border w-48! max-w-48! h-48! max-h-48! rounded-full"
                  />
                  <div className="w-full flex justify-center flex-wrap flex-col text-center">
                    <h3 className="font-body font-bold text-neon-soft mb-0">{member.name}</h3>
                    <p className="text-center">{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-between">
          <h2>Budtenders — Our Match-Makers</h2>
          <p className="text-end">(Last updated: A year ago)</p>
        </div>
        <div className="mb-4">
          <Swiper
            breakpoints={breakpoints}
            navigation={true}
            modules={[Navigation]}
            // className="mySwiper"
            slidesPerView="1"
          >
            {family.filter((member) => member.category === 'budtenders').map((member) => (  
              <SwiperSlide>
                <div key={`member - ${member.name}`} className="justify-start items-center flex flex-col flex-wrap gap-4">
                  {member.image.path && <img
                    src={member.image.path}
                    alt={member.image.alt}
                    className="border border-solid border-border w-48! max-w-48! h-48! max-h-48! rounded-full"
                  />}
                  <div className="w-full flex justify-center flex-wrap flex-col text-center">
                    <h3 className="font-body font-bold text-neon-soft mb-0">{member.name}</h3>
                    <p className="text-center">{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-between">
          <h2>Cultivation Specialists — Our Caretakers</h2>
          <p className="text-end">(Last updated: A year ago)</p>
        </div>
        <div>
          <Swiper
            breakpoints={breakpoints}
            navigation={true}
            modules={[Navigation]}
            // className="mySwiper"
            slidesPerView="1"
          >
            {family.filter((member) => member.category === 'cultivators').map((member) => (  
              <SwiperSlide>
                <div key={`member - ${member.name}`} className="justify-start items-center flex flex-col flex-wrap gap-4">
                  <img
                    src={member.image.path}
                    alt={member.image.alt}
                    className="border border-solid border-border w-48! max-w-48! h-48! max-h-48! rounded-full"
                  />
                  <div className="w-full flex justify-center flex-wrap flex-col text-center">
                    <h3 className="font-body font-bold text-neon-soft mb-0">{member.name}</h3>
                    <p className="text-center">{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-between">
          <h2>Technicians — Our Inventors</h2>
          <p className="text-end">(Last updated: A year ago)</p>
        </div>
        <div>
          <Swiper
            breakpoints={breakpoints}
            navigation={true}
            modules={[Navigation]}
            // className="mySwiper"
            slidesPerView="2"
          >
            {family.filter((member) => member.category === 'technicians').map((member) => (  
              <SwiperSlide>
                <div key={`member - ${member.name}`} className="justify-start items-center flex flex-col flex-wrap gap-4">
                  <img
                    src={member.image.path}
                    alt={member.image.alt}
                    className="border border-solid border-border w-48! max-w-48! h-48! max-h-48! rounded-full"
                  />
                  <div className="w-full flex justify-center flex-wrap flex-col text-center">
                    <h3 className="font-body font-bold text-neon-soft mb-0">{member.name}</h3>
                    <p className="text-center">{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
// className="grid grid-cols-4 gap-12"
export default About
