import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from '@/components/ui/input'
import { Clock8Icon } from 'lucide-react'

interface TimePickerProps{
    label: string
}

export default function TimePicker({label}: TimePickerProps)
{
    return (
        <Field>
            <FieldLabel className="text-xs" htmlFor="time-picker">
                Start time *
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
                    className='peer bg-background appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                />
            </div>
        </Field>
    )
}