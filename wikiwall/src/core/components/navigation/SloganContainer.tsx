import { motion } from 'framer-motion';
import styles from './css/SloganContainer.module.css'
import { navVariants } from '../../shared/variants/navVariants';

function SloganContainer({isCollapsed}:{isCollapsed:boolean}) {
    return (
      <motion.div
        className={styles.sloganContainer}
        animate={isCollapsed ? "closed" : "open"}
        variants={navVariants.show}
      >
        <p>Any topic, interactive fun.</p>
        <p>Any topic, interactive fun.</p>
        <p>Any topic, interactive fun.</p>
        <p>Any topic, interactive fun.</p>
      </motion.div>
    );
}

export default SloganContainer;