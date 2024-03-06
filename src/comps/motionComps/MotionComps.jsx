import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp (prop) || shouldForwardProp(prop),
})

export const MotionSvg = chakra(motion.svg, {
    shouldForwardProp: (prop) => isValidMotionProp (prop) || shouldForwardProp(prop),
})

export const MotionPath = chakra(motion.path, {
    shouldForwardProp: (prop) => isValidMotionProp (prop) || shouldForwardProp(prop),
})

export const MotionPolygon = chakra(motion.polygon, {
    shouldForwardProp: (prop) => isValidMotionProp (prop) || shouldForwardProp(prop),
})

export const MotionHeading = chakra(motion.h1, {
    shouldForwardProp: (prop) => isValidMotionProp (prop) || shouldForwardProp(prop),
})

export const MotionText = chakra(motion.text, {
    shouldForwardProp: (prop) => isValidMotionProp (prop) || shouldForwardProp(prop),
})