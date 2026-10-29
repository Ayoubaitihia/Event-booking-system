"use client"

import { useState } from "react";
import FormStepper from "./FormStepper";
import Step1BasicInfo from "./steps/Step1BasicInfo";
import Step2BasicInfo from "./steps/Step2DateTime";
import Step3BasicInfo from "./steps/Step3Tickets";
import Step4BasicInfo from "./steps/Step4Review";
import { FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { Step1Data, Step2Data, Step3Data, step1Scheme, step2Scheme, step3Scheme, FormErrors } from "@/lib/validations/event"

type FormData = Step1Data & Step2Data & Step3Data

const STEPS = ["Basics info", "Data & location", "Tickets", "Review"]

export default function EventForm()
{
    const [step, setStep] = useState(1)

    const [data, setData] = useState<FormData>({
        title: "",
        description: "",
        category: "",
        cover_image: null,

        starts_at: "",
        starts_at_time: "08:30",
        ends_at: "",
        ends_at_time: "08:30",
        is_online: false,
        online_url: "",
        venue_name: "",
        address: "",

        is_free: false,
        price: 0,
        capacity: 100,
    })

    const [errors, setErrors] = useState<FormErrors>({})

    const onChange = (key: keyof FormData, value: string | number | File | boolean | null) => {
        setData(prev => ({ ...prev, [key]: value }))
    }

    const stepComponents: Record<number, React.ReactNode> = {
        1: <Step1BasicInfo
            data={data}
            onChange={onChange}
            errors={errors}
        />,
        2: <Step2BasicInfo
            onChange={onChange}
            errors={errors}
        />,
        3: <Step3BasicInfo
            data={data}
            onChange={onChange}
            errors={errors}
        />,
        4: <Step4BasicInfo
            data={data}
        />
    }

    const steps_length: number = Object.keys(stepComponents).length

    const handle_backStep = (step: number) => {
        if (step > 1) setStep(step - 1)
    }

    const validate = () => {
        const stepSchemes = [step1Scheme, step2Scheme, step3Scheme]
        const result = stepSchemes[step - 1].safeParse(data)

        if (!result.success) {
            const flat: FormErrors = {}
            for (const issue of result.error.issues) {
                const key = issue.path[0] as keyof FormErrors
                if (key && !flat[key]) flat[key] = issue.message
            }
            setErrors(flat)
            return false
        }

        setErrors({})
        return true
    }

    const handleNext = () => {
        if (validate()) setStep(s => s + 1)
    }

    return(
        <div className="max-w-3xl w-full">
            <FormStepper step={step} steps={STEPS} />

            {stepComponents[step]}

            <div className="grid mt-4 grid-cols-3 gap-x-2">
                {step > 1 && <Button
                    onClick={() => handle_backStep(step)}
                    className="text-xs flex py-4 cursor-pointer gap-x-0.5"
                    variant="outline"
                >
                    <FiArrowLeft />
                    Back
                </Button>}

                {step < steps_length && step > 1 && <Button
                    onClick={() => handleNext()}
                    className="text-xs hover:bg-gray-800 cursor-pointer hover:text-white bg-gray-900 text-white col-span-2 py-4 flex gap-x-0.5"
                    variant="outline"
                >
                    <FiArrowRight />
                    Continue
                </Button>}

                {step == steps_length && <Button
                    onClick={() => handleNext()}
                    className="text-xs hover:bg-gray-800 cursor-pointer hover:text-white bg-gray-900 text-white col-span-2 py-4 flex gap-x-0.5"
                    variant="outline"
                >
                    <FiSend />
                    Submit for approval
                </Button>}
            </div>

            {step == 1 && <Button
                onClick={() => handleNext()}
                className="text-xs w-full hover:bg-gray-800 cursor-pointer hover:text-white bg-gray-900 text-white col-span-2 py-4 flex gap-x-0.5"
                variant="outline"
            >
                <FiArrowRight />
                Continue
            </Button>}
        </div>
    )
}
