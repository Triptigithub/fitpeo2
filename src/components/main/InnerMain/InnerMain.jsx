import React from 'react'
import "./InnerMain.css"
import DesignDeclare from './DesignDeclare/DesignDeclare'
import BreakDown from './BreakDown/BreakDown'
import Donate from './Donate/Donate'
import EightActs from './EightAct/EightActs'
import DeclareForm from './DeclareForm/DeclareForm'
import Newsletter from './NewsLetter/NewsLetter'
import Signature from './Signature/Signature'
import { motion } from 'framer-motion'

const InnerMain = () => {
  const sectionVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
  return (
    <main class="main-section">
      <DesignDeclare />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
        <BreakDown />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
        <Donate />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
        <EightActs />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
        <DeclareForm />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
        <Newsletter />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}>
        <Signature />
      </motion.div>
    </main>
  )
}

export default InnerMain