"use client"

import { useState } from "react";
import FormStepper from "./FormStepper";
import Step1BasicInfo from "./steps/Step1BasicInfo";
import Step2BasicInfo from "./steps/Step2DateTime";
import Step3BasicInfo from "./steps/Step3Tickets";
import Step4BasicInfo from "./steps/Step4Review";

const STEPS = ["Basics info", "Data & location", "Tickets", "Review"]
const TOTAL = STEPS.length

export default function EventForm()
{
    const [step, setStep] = useState(1)

    const stepComponents: Record<number, React.ReactNode> = {
        1: <Step1BasicInfo/>,
        2: <Step2BasicInfo/>,
        3: <Step3BasicInfo/>,
        4: <Step4BasicInfo/>
    }

    return(
        <div>
            <FormStepper step={step} steps={STEPS} />

            {stepComponents[step]}
        </div>
    )
}