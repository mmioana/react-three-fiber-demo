import { forwardRef, PropsWithChildren } from "react";
import { Mesh, Texture } from "three";
import { BaseShpere, BaseSphereProps } from "./BaseSphere";

interface BasicMaterialSphereProps extends BaseSphereProps {
    texture: Texture,
}

export const BasicMaterialSphere = forwardRef<Mesh, BasicMaterialSphereProps & PropsWithChildren>(({ texture, children, ...rest }, meshRef) => {
    return (
        <BaseShpere {...rest} ref={meshRef} >
            <meshBasicMaterial map={texture} />
            {children}
        </BaseShpere>
    )
});