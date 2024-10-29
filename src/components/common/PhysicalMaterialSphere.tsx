import { PropsWithChildren, forwardRef } from "react";
import { Mesh, Texture } from "three";
import { BaseShpere, BaseSphereProps } from "./BaseSphere";

export interface PhysicalMaterialSphereProps extends BaseSphereProps {
    texture: Texture,
}

export const PhysicalMaterialSphere = forwardRef<Mesh, PhysicalMaterialSphereProps & PropsWithChildren>(({ texture, children, ...rest }, meshRef) => {

    return (
        <BaseShpere {...rest} ref={meshRef} >
            <meshPhysicalMaterial map={texture} />
            {children}
        </BaseShpere>
    )
});