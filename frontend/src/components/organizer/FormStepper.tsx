
interface Props{
    step: number;
    steps: string[];
}

export default function FormStepper({step, steps}: Props)
{
    return(
        <div className="flex items-center">
            {steps.map((label, i) =>{
                const num = i + 1
                // const done = 
                return (
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="flex flex-col items-center gap-y-2">
                                <div
                                    className="border rounded-full bg-gray-50 text-gray-600 flex items-center justify-center w-10 h-10 text-sm font-semibold">
                                        {num}
                                </div>
                                <span className="text-[10px] text-gray-600">{steps[i]}</span>
                            </div>
                            <span className="border h-px w-16 mb-5"></span>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}