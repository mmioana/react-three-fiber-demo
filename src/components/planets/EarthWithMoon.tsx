import { useTexture } from "@react-three/drei"
import { FC, RefObject, useRef } from "react"
import { Mesh } from "three/src/Three"
import { useFrame } from "@react-three/fiber"
import { Planet } from "../common/Planet"
import { SOLAR_SYSTEM_CONFIG } from "../../constants/solarSystem"
import { useOrbitalRotation } from "../../hooks/useOrbitalRotation"

interface EarthWithMoonProps {
    sunRef: RefObject<Mesh>
}

export const EarthWithMoon: FC<EarthWithMoonProps> = ({ sunRef }) => {
    const earthConfig = SOLAR_SYSTEM_CONFIG.Earth;
    const moonConfig = earthConfig.moons[0];
    const earthTexture = useTexture(earthConfig.texture)
    const moonTexture = useTexture(moonConfig.texture)
    const earthRef = useRef<Mesh>(null)
    const moonRef = useRef<Mesh>(null)

    useOrbitalRotation({
        planetRef: moonRef,
        parentPlanetRef: earthRef,
        orbitRadius: moonConfig.orbitalRadius,
        orbitSpeed: moonConfig.orbitalSpeed
    })

    // Approach 1.
    // Animates the moon position based on the earth position
    // useEffect(() => {
    //     const animate = () => {
    //         if (moonRef.current && earthRef.current) {
    //             const time = Date.now() * 0.001;
    //             const moonDistance = 2; // Distance from the Earth
    //             moonRef.current.position.x = earthRef.current.position.x + moonDistance * Math.cos(time * moonOrbitSpeed);
    //             moonRef.current.position.z = earthRef.current.position.z + moonDistance * Math.sin(time * moonOrbitSpeed);
    //             moonRef.current.position.y = earthRef.current.position.y; // Keep the moon at the same height as the Earth
    //         }

    //         requestAnimationFrame(animate);
    //     };

    //     animate();
    // }, [earthRotationSpeed, moonOrbitSpeed]);

    // Approach 2.
    // Animates the moon position based on the earth position
    // useFrame(() => {
    //     if (!moonRef?.current || !earthRef.current) return;

    //     const time = Date.now() * 0.001;
        
    //     moonRef.current.position.x = earthRef.current.position.x + (earthConfig.radius + moonConfig.orbitalRadius) * Math.cos(time * moonConfig.orbitalSpeed);
    //     moonRef.current.position.z = earthRef.current.position.z + (earthConfig.radius + moonConfig.orbitalRadius) * Math.sin(time * moonConfig.orbitalSpeed);
    //     // Keep the moon at the same height as the Earth
    //     moonRef.current.position.y = earthRef.current.position.y; 
    // });

    return (
        <>
            <Planet 
                ref={earthRef} 
                texture={earthTexture} 
                position={earthConfig.position} 
                rotationSpeed={earthConfig.rotationSpeed}
                orbitRadius={earthConfig.orbitalRadius}
                orbitSpeed={earthConfig.orbitalSpeed}
                sunRef={sunRef}
            />
            <Planet 
                ref={moonRef} 
                texture={moonTexture} 
                radius={moonConfig.radius}
                rotationSpeed={moonConfig.rotationSpeed}
                sunRef={sunRef}
            />
        </>
    )
}