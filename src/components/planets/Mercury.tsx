import { useTexture } from "@react-three/drei"
import { FC, RefObject, useRef } from "react"
import { Mesh } from "three/src/Three"
import { Planet } from "../common/Planet"
import { SOLAR_SYSTEM_CONFIG } from "../../constants/solarSystem"

interface MercuryProps {
    sunRef: RefObject<Mesh>
}

export const Mercury: FC<MercuryProps> = ({ sunRef }) => {
    const config = SOLAR_SYSTEM_CONFIG.Mercury;
    const texture = useTexture(config.texture);
    const ref = useRef<Mesh>(null)

    return (
        <Planet 
            ref={ref} 
            texture={texture} 
            position={config.position} 
            rotationSpeed={config.rotationSpeed}
            orbitRadius={config.orbitalRadius}
            orbitSpeed={config.orbitalSpeed}
            sunRef={sunRef}
        />
    )
}