import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Mesh } from "three";

export const useOrbitalRotation = ({
    planetRef,
    parentPlanetRef,
    orbitRadius,
    orbitSpeed
}: {
    planetRef: RefObject<Mesh>,
    parentPlanetRef: RefObject<Mesh>,
    orbitRadius?: number,
    orbitSpeed?: number;
}) => {
    let angle = 0;

     // Animates the planet position based on the sun position
     useFrame(() => {
        const currentPlanetRef = planetRef;

        if (!parentPlanetRef?.current || !currentPlanetRef?.current || orbitSpeed === undefined || orbitRadius === undefined) return;

        const parentPlanetPosition = parentPlanetRef.current.position;
        const parentPlanetRadius = parentPlanetRef.current.geometry.boundingSphere?.radius ?? 0;

        angle += orbitSpeed; 

        const x = parentPlanetPosition.x + (parentPlanetRadius + orbitRadius) * Math.cos(angle);
        const z = parentPlanetPosition.z + (parentPlanetRadius + orbitRadius) * Math.sin(angle);

        currentPlanetRef.current.position.set(x, parentPlanetPosition.y, z);
    });
}