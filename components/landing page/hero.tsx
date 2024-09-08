import React from 'react';
import styles from '@/components/css/Hero.module.css';  // Import the CSS module

const Hero: React.FC = () => {
    return (
        <div className={styles.heroContainer}>
            <h1>Welcome to the Palace of Stories</h1>
            <p>Where Memories Whisper...</p>
            {/* Add any other content you'd like */}
        </div>
    );
};

export default Hero;
