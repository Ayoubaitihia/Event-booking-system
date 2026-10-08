"use client"

import { useState } from "react";
import FormStepper from "./FormStepper";
import Step1BasicInfo from "./steps/Step1BasicInfo";
import Step2BasicInfo from "./steps/Step2DateTime";
import Step3BasicInfo from "./steps/Step3Tickets";
import Step4BasicInfo from "./steps/Step4Review";
import { Button } from "@/components/ui/button"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const STEPS = ["Basics info", "Data & location", "Tickets", "Review"]
const TOTAL = STEPS.length

export default function EventForm()
{
    const [step, setStep] = useState(2)

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

            <div className="grid mt-4 grid-cols-3 gap-x-2">
                <Button
                    className="text-xs flex py-4 cursor-pointer gap-x-0.5"
                    variant="outline"
                >
                    <FiArrowLeft />
                    Back
                </Button>

                <Button
                    className="text-xs hover:bg-gray-800 cursor-pointer hover:text-white bg-gray-900 text-white col-span-2 py-4 flex gap-x-0.5"
                    variant="outline"
                >
                    <FiArrowRight />
                    Continue
                </Button>
            </div>
        </div>
    )
}