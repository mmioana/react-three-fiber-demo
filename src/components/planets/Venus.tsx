import { useTexture } from "@react-three/drei"
import { FC, RefObject, useRef } from "react"
import { Mesh, Color } from "three/src/Three"
import { Planet } from "../common/Planet"
import { SOLAR_SYSTEM_CONFIG } from "../../constants/solarSystem"


const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform vec3 atmosphereColor;
    uniform float atmosphereOpacity;
    varying vec3 vNormal;

    void main() {
        float intensity = pow(0.7 - length(vNormal), 2.0);
        gl_FragColor = vec4(atmosphereColor, atmosphereOpacity * intensity);
    }
`;

interface VenusProps {
    sunRef: RefObject<Mesh>
}

export const Venus: FC<VenusProps> = ({ sunRef }) => {
    const config = SOLAR_SYSTEM_CONFIG.Venus;
    const atmosphere = config.atmosphere;
    const texture = useTexture(config.texture);
    const atmoshpereTexture = useTexture(atmosphere.texture);
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
        >
            <mesh>
                <sphereGeometry args={atmosphere.position as any} />
                <shaderMaterial
                        attach="material"
                        args={[{
                            uniforms: {
                                atmosphereColor: { value: new Color('0xff0000') },
                                atmosphereOpacity: { value: 0.2 }
                            },
                            vertexShader,
                            fragmentShader,
                            transparent: true,
                        }]}
                    />
                <meshPhysicalMaterial
                    map={atmoshpereTexture}
                    transparent={true}
                    opacity={atmosphere.opacity}
                    depthWrite={false}
                    emissive={atmosphere.emissiveColor}
                    emissiveIntensity={atmosphere.emissiveIntensity}
                />
            </mesh>
        </Planet>
    )
}