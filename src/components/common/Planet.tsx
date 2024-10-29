import { PropsWithChildren, RefObject, forwardRef } from "react";
import { Mesh } from "three/src/objects/Mesh";
import { PhysicalMaterialSphere, PhysicalMaterialSphereProps } from "./PhysicalMaterialSphere";
import { useOrbitalRotation } from "../../hooks/useOrbitalRotation";

interface PlanetProps extends PhysicalMaterialSphereProps {
    orbitSpeed?: number;
    orbitRadius?: number;
    sunRef: RefObject<Mesh>
}

export type PlanetRef = Mesh | null;

export const Planet = forwardRef<PlanetRef, PlanetProps & PropsWithChildren>(({ sunRef, orbitRadius, orbitSpeed, children, ...rest }, planetRef) => {

    useOrbitalRotation({
        parentPlanetRef: sunRef,
        planetRef: planetRef as RefObject<Mesh>,
        orbitRadius,
        orbitSpeed
    })

    return <PhysicalMaterialSphere {...rest} ref={planetRef} > {children} </PhysicalMaterialSphere>;
})