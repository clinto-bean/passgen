import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Checkbox } from "@/components/ui/Checkbox"
import { Button } from "@/components/ui/Button"
import { Textarea } from "@/components/ui/Textarea"
import generatePassword from "@/api/v1/generatePassword"
import { useState } from "react"
import {
  PasswordOptionCheckboxStyle as CheckboxStyle,
  CopyValueButtonStyle,
  GeneratorButtonStyle,
  DefaultButtonStyle,
  ErrorButtonStyle,
  SuccessButtonStyle,
} from "@/styling"
import { logError as Log } from "@/api/v1/logError"

export default function Component() {
  const [length, setLength] = useState(8)
  const [pass, setPass] = useState("")
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [nums, setNums] = useState(false)
  const [syms, setSyms] = useState(false)

  return (
    <form className='flex flex-col items-center space-y-4 p-4 border-[4px] shadow-xl border-black rounded-lg overflow-hidden bg-green-300 text-xl'>
      <div className='max-w-lg w-fit space-y-2'>
        <div className='grid grid-cols-2 items-center'>
          <Label htmlFor='length' className='text-2xl text-center'>
            Length
          </Label>
          <Input
            id='length'
            min='8'
            max='32'
            type='number'
            placeholder='8'
            onInput={() => {
              setLength(
                parseInt(
                  (document.getElementById("length") as HTMLInputElement).value
                )
              )
            }}
          />
        </div>
        <div>
          <Label className='justify-center w-full flex p-4 text-xl'>
            Options
          </Label>
          <div id='PasswordOptions' className='flex items-center gap-2 text-lg'>
            <Checkbox
              defaultChecked
              id='lowercase'
              className={CheckboxStyle}
              onClick={() => {
                setLower(!lower)
              }}
            />
            <Label htmlFor='lowercase'>Lowercase</Label>
            <Checkbox
              defaultChecked
              id='uppercase'
              className={CheckboxStyle}
              onClick={() => {
                setUpper(!upper)
              }}
            />
            <Label htmlFor='uppercase'>Uppercase</Label>
            <Checkbox
              id='numbers'
              className={CheckboxStyle}
              onClick={() => {
                setNums(!nums)
              }}
            />
            <Label htmlFor='numbers'>Numbers</Label>
            <Checkbox
              id='symbols'
              className={CheckboxStyle}
              onClick={() => {
                setSyms(!syms)
              }}
            />
            <Label htmlFor='symbols'>Symbols</Label>
          </div>
        </div>
      </div>

      <div className='grid gap-2 pt-4 pb-2'>
        <Textarea
          id='output'
          placeholder='PassGen: Your Password Generator'
          readOnly
          className='border-black border-2 shadow-sm bg-rose-300 text-black placeholder:text-black text-xl font-extrabold text-wrap text-center'
        />
        <Button
          className={`${DefaultButtonStyle} ${GeneratorButtonStyle}`}
          id='generateButton'
          variant='outline'
          onClick={(e) => {
            e.preventDefault()
            const output = document.getElementById(
              "output"
            ) as HTMLTextAreaElement
            const generate = document.getElementById(
              "generateButton"
            ) as HTMLButtonElement
            try {
              setPass(
                generatePassword({
                  lower,
                  upper,
                  nums,
                  syms,
                  length,
                })
              )
            } catch (e: unknown) {
              try {
                Log(output, e as Error)
              } catch (e: unknown) {
                console.error(e)
              }
              generate.className = `${DefaultButtonStyle} ${ErrorButtonStyle}`
              generate.textContent = "Error!"
              setTimeout(() => {
                generate.textContent = "Generate"
                generate.className = `${DefaultButtonStyle} ${GeneratorButtonStyle}`
              }, 1500)
            }
            output.textContent = pass
            generate.textContent = "Generated ✔️"
            generate.className = `${DefaultButtonStyle} ${SuccessButtonStyle}`
            generate.disabled = true
            setTimeout(() => {
              generate.textContent = "Generate"
              generate.className = `${DefaultButtonStyle} ${GeneratorButtonStyle}`
              generate.disabled = false
            }, 1500)
          }}>
          Start
        </Button>
        <Button
          className={`${DefaultButtonStyle} ${CopyValueButtonStyle}`}
          id='copyButton'
          onClick={(e) => {
            e.preventDefault()

            const copy = document.getElementById(
              "copyButton"
            ) as HTMLButtonElement
            navigator.clipboard.writeText(pass)
            copy.textContent = "Copied! ✔️"
            copy.className = `${DefaultButtonStyle} ${SuccessButtonStyle}`
            setTimeout(() => {
              copy.textContent = "Copy to clipboard"
              copy.className = `${DefaultButtonStyle} ${CopyValueButtonStyle}`
            }, 1500)
          }}>
          Copy to clipboard
        </Button>
      </div>
    </form>
  )
}
