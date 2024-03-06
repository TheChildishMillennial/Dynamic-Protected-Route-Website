import { MotionBox, MotionPath, MotionSvg } from "../motionComps/MotionComps"
import { ChildishMellennialPath } from "./IconPaths"
export function useCMIcons(){
    const ChildishMillennialLogo = (props) => {
        return (
            <MotionSvg
                h={props.IconSize}
                w={props.IconSize}
                viewBox="0 0 596.47 317.94"
            >
                <MotionPath
                    d={ChildishMellennialPath}
                    fill={props.IconColor}
                />
            </MotionSvg>
            
        )
    }

    return {ChildishMillennialLogo}
}