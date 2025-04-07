import { useEffect } from 'react';
import styles from './Ember.module.css';

export default function useEmbers() {
  useEffect(() => {
    const timeoutIds = [];
    let isMounted = true;

    function spawnEmber(isBg) {
      if (!isMounted) {
        return;
      }

      // Get parent element
      const parent = document.getElementById('embers');
      if (!parent) {
        return;
      }

      // Ranges for ember CSS variables
      const emberConfig = {
        '--ember-color': () => {
          // Flicker between warm tones
          const colors = ['#ffae00', '#ffaa33', '#ff7800', '#ff4500', '#FFFFFF', '#1E0623'];
          return colors[Math.floor(Math.random() * colors.length)];
        },
        '--ember-size': () => `${Math.floor(Math.random() * 8 + 8)}px`, // 8px–16px
        '--ember-speed': () => `${(isBg ? Math.random() * 4 + 2 : Math.random() * 4 + 2).toFixed(2)}s`,
        '--ember-delay': () => `${(Math.random() * 1.5).toFixed(2)}s`, // 0s–1.5s
        '--ember-start-x': () => `${Math.random() * 100}%`,
        '--ember-start-y': () => (isBg ? '30px' : `${Math.floor(Math.random() * 30)}px`), // 0px–30px
        '--ember-rotation': () => `${Math.floor(Math.random() * 720)}deg`, // 0deg–720deg
        '--ember-scale': () => (Math.random() * 0.5 + 0.3).toFixed(2), // 0.3–0.8
        '--ember-distance': () => `${isBg ? Math.floor(Math.random() * 150 + 10) : Math.floor(Math.random() * 200 + 100)}px`,
        '--ember-opacity': () => 1, // 0.00–1.00
        '--ember-blur': () => `${(isBg ? Math.random() * 8 + 5 : 0).toFixed(1)}px`,
        '--border-radius': () => (isBg ? '10px' : '0px'),
      };

      const ember = document.createElement('div');
      ember.className = styles.Ember;

      // Apply random styles using the config
      for (const [variable, generator] of Object.entries(emberConfig)) {
        ember.style.setProperty(variable, generator());
      }

      parent.appendChild(ember);

      // Store remove timeout
      const removeTimeout = setTimeout(() => ember.remove(), 6000);
      timeoutIds.push(removeTimeout);

      // Schedule next ember
      const nextSpawn = isBg ? Math.random() * 2000 + 800 : Math.random() * 900 + 600;
      const nextTimeout = setTimeout(() => spawnEmber(isBg), nextSpawn);
      timeoutIds.push(nextTimeout);

      // Cleanup function
      return () => {
        isMounted = false;
        timeoutIds.forEach(clearTimeout);
      };
    }

    // Start the first ember spawn
    spawnEmber(false);
    spawnEmber(true);
  });
}
