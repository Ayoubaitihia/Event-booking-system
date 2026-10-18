
interface Props{
    step: number;
    steps: string[];
}

export default function FormStepper({step, steps}: Props)
{
    return(
        <div className="flex justify-center items-center gap-0 mb-5">
        
        {steps.map((label, i) => {
            const num     = i + 1;
            const done    = num < step;
            const current = num === step;

        return (
            <div key={num} className="flex items-center">
                <div className="flex flex-col items-center gap-1 min-w-18">
                    <div
                        className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                        transition-colors duration-200
                        ${done    ? "bg-black text-white" : ""}
                        ${current ? "bg-black text-white ring-4 ring-gray-200" : ""}
                        ${!done && !current ? "bg-gray-200 text-gray-500" : ""}
                        `}
                    >
                    {done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    ) : (
                    num
                    )}
                </div>
                <span
                    className={`text-xs text-center hidden sm:block transition-colors duration-200
                    ${current ? "text-black font-medium" : "text-gray-400"}
                    `}>
                    {label}
                </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`h-px w-8 sm:w-12 mb-5 transition-colors duration-300
                  ${done ? "bg-black" : "bg-gray-200"}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}