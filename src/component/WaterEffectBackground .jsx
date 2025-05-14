import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

const WaterEffectBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x321d81,
        shininess: 30.0,
        waveHeight: 15.0,
        waveSpeed: 0.3,
        zoom: 0.75,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen w-full">
      {/* Place content here like your Navbar, Hero, etc */}
    </div>
  );
};

export default WaterEffectBackground;
