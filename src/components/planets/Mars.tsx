import { useTexture } from "@react-three/drei"
import { FC, RefObject, useEffect, useRef } from "react"
import { Mesh } from "three/src/Three"
import { Planet } from "../common/Planet"
import { SOLAR_SYSTEM_CONFIG } from "../../constants/solarSystem"
import { useFrame } from "@react-three/fiber"
import { useOrbitalRotation } from "../../hooks/useOrbitalRotation"

interface MarsProps {
    sunRef: RefObject<Mesh>
}

export const Mars: FC<MarsProps> = ({ sunRef }) => {
    const config = SOLAR_SYSTEM_CONFIG.Mars;
    const moons = config.moons;
    const phobosMoon = moons[0];
    const deimosMoon = moons[1];
    const ref = useRef<Mesh>(null)
    const phobosRef = useRef<Mesh>(null);
    const deimosRef = useRef<Mesh>(null);
    const texture = useTexture(config.texture);
    const phobosTexture = useTexture(phobosMoon.texture);
    const deimosTexture = useTexture(deimosMoon.texture);

    useOrbitalRotation({
        planetRef: phobosRef,
        parentPlanetRef: ref,
        orbitSpeed: phobosMoon.orbitalSpeed,
        orbitRadius: phobosMoon.orbitalRadius
    })

    useOrbitalRotation({
        planetRef: deimosRef,
        parentPlanetRef: ref,
        orbitSpeed: deimosMoon.orbitalSpeed,
        orbitRadius: deimosMoon.orbitalRadius
    })

    return (
        <>
            <Planet
                ref={ref}
                texture={texture}
                position={config.position}
                rotationSpeed={config.rotationSpeed}
                orbitRadius={config.orbitalRadius}
                orbitSpeed={config.orbitalSpeed}
                sunRef={sunRef}
            />
            <Planet
                key={phobosMoon.name}
                ref={phobosRef}
                texture={phobosTexture}
                rotationSpeed={phobosMoon.rotationSpeed}
                orbitRadius={phobosMoon.orbitalRadius}
                orbitSpeed={phobosMoon.orbitalSpeed}
                radius={phobosMoon.radius}
                sunRef={sunRef}
            />
            <Planet
                key={deimosMoon.name}
                ref={deimosRef}
                texture={deimosTexture}
                rotationSpeed={deimosMoon.rotationSpeed}
                orbitRadius={deimosMoon.orbitalRadius}
                orbitSpeed={deimosMoon.orbitalSpeed}
                radius={deimosMoon.radius}
                sunRef={sunRef}
            />
        </>

    )
}