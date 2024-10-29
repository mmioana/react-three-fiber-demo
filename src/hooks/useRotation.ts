import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Mesh } from "three";

export const useRotation = (ref: RefObject<Mesh>, rotationSpeed = 0.1) => {
    useFrame(() => {
        const sphere = ref?.current;
        if (sphere) {
            sphere.rotation.y += rotationSpeed;
        }
    })
}