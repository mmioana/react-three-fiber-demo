import { PropsWithChildren, RefObject, forwardRef } from "react";
import { Mesh } from "three";
import { useRotation } from "../../hooks/useRotation";

export interface BaseSphereProps {
    position?: any
    radius?: number
    rotationSpeed?: number;
}

export const BaseShpere = forwardRef<Mesh, BaseSphereProps & PropsWithChildren>(({ position = [0, 0, 0], radius = 1.0, rotationSpeed = 0.0005, children }, meshRef) => {

    useRotation(meshRef as RefObject<Mesh>, rotationSpeed)

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[radius, 64, 64]} />
            {children}
        </mesh>
    )
});