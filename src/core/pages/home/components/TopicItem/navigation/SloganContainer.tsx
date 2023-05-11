import { motion } from 'framer-motion';
import styles from './css/SloganContainer.module.css'
import { navVariants } from '../../../../../shared/variants/navVariants';

function SloganContainer({isCollapsed}:{isCollapsed:boolean}) {
    return (
      <motion.div
        className={styles.sloganContainer}
        animate={isCollapsed ? "closed" : "open"}
        variants={navVariants.show}
      >
        <motion.p
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ ease: "easeOut", duration: ".75", delay: 1.25 }}
        >
          Any topic, interactive fun.
        </motion.p>
        <motion.p
          animate={{ y: [100, 0], opacity: [0, .66] }}
          transition={{ ease: "easeOut", duration: ".65", delay: 1.5 }}
        >
          Any topic, interactive fun.
        </motion.p>
        <motion.p
          animate={{ y: [100, 0], opacity: [0, .33] }}
          transition={{ ease: "easeOut", duration: ".55", delay: 1.75 }}
        >
          Any topic, interactive fun.
        </motion.p>
        <motion.p
          animate={{ y: [100, 0], opacity: [0, .15] }}
          transition={{ ease: "easeOut", duration: ".50", delay: 2 }}
        >
          Any topic, interactive fun.
        </motion.p>
      </motion.div>
    );
}

export default SloganContainer;