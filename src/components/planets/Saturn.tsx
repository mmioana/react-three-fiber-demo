import { useTexture } from "@react-three/drei"
import { FC, RefObject, useRef } from "react"
import { Mesh } from "three"
import { Planet } from "../common/Planet"
import { SOLAR_SYSTEM_CONFIG } from "../../constants/solarSystem"

interface SaturnProps {
    sunRef: RefObject<Mesh>
}

export const Saturn: FC<SaturnProps> = ({ sunRef }) => {
    const config = SOLAR_SYSTEM_CONFIG.Saturn;
    const texture = useTexture(config.texture);
    const ringTexture = useTexture(config.ring.texture)
    const ref = useRef<Mesh>(null)

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
            >
                <mesh>
                    <torusGeometry args={[config.ring.radius, config.ring.thickness, 64, 128]} />
                    <meshStandardMaterial map={ringTexture} opacity={0.8} transparent />
                </mesh>
            </Planet>
        </>
    )
}