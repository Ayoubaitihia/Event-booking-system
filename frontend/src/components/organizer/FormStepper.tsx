
interface Props {
  step: number;
  steps: string[];
}

export default function FormStepper({ step, steps }: Props) {
  return (
    <div className="flex justify-center items-start gap-0 mb-5">
      {steps.map((label, i) => {
        const num = i + 1;
        const done = num < step;
        const current = num === step;

        return (
          <div key={num} className="flex items-start">
            <div className="flex flex-col items-center gap-1 w-14 sm:w-20">
              <div
                className={`
                  w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold
                  transition-colors duration-200
                  ${done    ? "bg-black text-white" : ""}
                  ${current ? "bg-black text-white ring-4 ring-gray-200" : ""}
                  ${!done && !current ? "bg-gray-200 text-gray-500" : ""}
                `}
              >
                {done ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  num
                )}
              </div>
              <span
                className={`text-[10px] sm:text-xs text-center leading-tight transition-colors duration-200
                  ${current ? "text-black font-medium" : "text-gray-400"}
                `}
              >
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{num}</span>
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`h-px w-5 sm:w-8 mt-3.5 sm:mt-4 shrink-0 transition-colors duration-300
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
