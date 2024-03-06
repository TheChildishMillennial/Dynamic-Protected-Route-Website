import {v4 as uuid} from "uuid"

export function useWebtools(){
    const generateUUID = () => {
        const uniqueID = uuid()
        const smallID = uniqueID.slice(0, 8)
        return smallID    
    }

    return {generateUUID}
}