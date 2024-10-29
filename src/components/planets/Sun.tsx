import { useTexture } from "@react-three/drei"
import { forwardRef } from "react";
import { Mesh } from "three";
import { BasicMaterialSphere } from '../common/BasicMaterialSphere';
import { SOLAR_SYSTEM_CONFIG } from "../../constants/solarSystem";

const sunConfig = SOLAR_SYSTEM_CONFIG.Sun;

export const Sun = forwardRef<Mesh, unknown>((_, sunRef) => {
    const sunTexture = useTexture(sunConfig.texture);

    return (
        <BasicMaterialSphere 
            texture={sunTexture} 
            ref={sunRef} 
            position={sunConfig.position} 
            radius={sunConfig.radius} 
            rotationSpeed={sunConfig.rotationSpeed}
        >
            {/* Adding the point light here to keep the light position in sync with the sun's position and radius */}
            <pointLight 
                color="white" 
                intensity={10}    
                distance={1000}
                position={sunConfig.position}
            />
        </BasicMaterialSphere>
    )
})