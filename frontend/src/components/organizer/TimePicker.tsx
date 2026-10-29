import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from '@/components/ui/input'
import { Clock8Icon } from 'lucide-react'
import { Step2Data } from "@/lib/validations/event"

interface TimePickerProps{
    label: string
    fieldKey: keyof Step2Data
    onChange: (key: keyof Step2Data, value: string | File | boolean | null) => void
}

export default function TimePicker({ label, fieldKey, onChange }: TimePickerProps)
{
    return (
        <Field>
            <FieldLabel className="text-xs" htmlFor="time-picker">
                {label}
            </FieldLabel>
            <div className='relative'>
                <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3'>
                    <Clock8Icon className='size-4' />
                </div>
                <Input
                    type='time'
                    id='time-picker'
                    step='1'
                    defaultValue='08:30'
                    onChange={(e) => onChange(fieldKey, e.target.value)}
                    className='peer bg-background appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                />
            </div>
        </Field>
    )
}