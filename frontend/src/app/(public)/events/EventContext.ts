'use client'

import { createContext, useContext } from "react"

import { EventPropsType } from "./page"

export const EventContext = createContext<EventPropsType | undefined>(undefined)

export function useEventContext(){

    const context = useContext(EventContext)

    if(context === undefined)
    {
        throw new Error("useEventContext most be used with a EventContext")
    }

    return context
}