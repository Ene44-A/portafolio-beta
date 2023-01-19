import React from 'react'
import '../assets/services.css';
import { SlLike, SlBulb, SlScreenDesktop, SlPeople, SlSpeedometer, SlTarget} from "react-icons/sl";
import { motion } from "framer-motion";


const Services = () => {
  return (
    <div className='services-container'>
        <h3>Services</h3>
        <p>Services I offer to my clients</p>
        <div className='services-cont'>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
             className='service-cont'>
                <div className='icon-service'><SlLike /></div>
                <h4>Fully Responsive</h4>
                <p>You site will display properly on any divice, including desktop computers, tablets and mobile phone.</p>
            </motion.div>
            <motion.div
            
             className='service-cont'>
                <div className='icon-service'><SlBulb /></div>
                <h4>Creative Design</h4>
                <p>A good and attractive web design helps you keep your leads on your site, which is the digital face of your business.</p>
            </motion.div>
            <motion.div

             className='service-cont'>
                <div className='icon-service'><SlScreenDesktop /></div>
                <h4>Development</h4>
                <p>I know the importance of web design and can help you create a website you'll love.</p>
            </motion.div>
            <motion.div

             className='service-cont'>
                <div className='icon-service'><SlPeople /></div>
                <h4>Social Media Integration</h4>
                <p>there are a lot of social platforms out there, and you should promote your presence on them on your website.</p>
            </motion.div>
            <motion.div

             className='service-cont'>
                <div className='icon-service'><SlSpeedometer /></div>
                <h4>Performence</h4>
                <p>Retaining users is crucial to improving conversions. High-performing sites engage and retain users.</p>
            </motion.div>
            <motion.div

             className='service-cont'>
                <div className='icon-service'><SlTarget /></div>
                <h4>SEO</h4>
                <p>I will optimize your site with intelligent Search Engine Optimization strategy to generate leads.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Services