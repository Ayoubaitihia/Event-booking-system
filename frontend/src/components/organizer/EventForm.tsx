"use client"

import { useState } from "react";
import FormStepper from "./FormStepper";

const STEPS = ["Basics info", "Data & location", "Tickets", "Review"]
const TOTAL = STEPS.length

export default function EventForm()
{
    const [step, setStep] = useState(1)

    return(
        <div>
            <FormStepper step={step} steps={STEPS} />
        </div>
    )
}