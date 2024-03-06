import { Accordion } from "@chakra-ui/react"
import { MotionBox } from "../../motionComps/MotionComps"

export function useProjectCostAccordian(){
    const ProjectCostAccordian = ({children}) => {
        return (
            <MotionBox>
                <Accordion>
                    {children}
                </Accordion>
            </MotionBox>
        )    
    }

    return {ProjectCostAccordian}
}