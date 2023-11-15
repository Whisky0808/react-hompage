import React from "react"
import { VariantProps, cva } from "class-variance-authority"

/*
two parameters, the first(array) is the way you wanna add to every single button you created 
second  is an object, tha object takes variants property, deciding what key you wanna set eg:size
**/
const buttonStyle = cva([ "transition-colors"], {
    variants: {
        variant:{
            default:["bg-seconday","hover:bg-seconday-hover"],
            ghost:["hover:bg-grey-100"],
        },
        size: {
            default: ["rounded","p-2"],
            icon: [
                "rounded-full",
                "w-10",
                "h-10", "flex", "items-center", "justify-center", 'p-2.5',
                
                

            ],
        }



    }
})
type ButtonProps = VariantProps<typeof buttonStyle>
export function Button({variant,size}:ButtonProps) {
    return <button className={buttonStyle({variant,size})}>

    </button>
}