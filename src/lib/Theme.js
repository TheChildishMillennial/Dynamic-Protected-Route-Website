import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        cm: {
            0: '#999999',
            200: '#777777',
            400: '#555555',
            600: '#333333',
            800: '#111111'
        },        
    },
    fonts: {
        heading: 'Bebas Neue',
        body: 'Barlow Condensed'
    }
})