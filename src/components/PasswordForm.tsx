import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import CreatePassword from "@/api/v1/CreatePassword.ts"
import { useState } from "react"

export default function Component() {
  const [length, setLength] = useState(8)
  const [pass, setPass] = useState("********")
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
            className='bg-violet-300 border-2 border-black text-center text-2xl'
            placeholder='8'
            onChange={() => {
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
          <div className='flex items-center gap-2 text-lg'>
            <Checkbox
              defaultChecked
              id='lowercase'
              className='border-black border-2 shadow-sm bg-cyan-200'
              onClick={() => {
                setLower(!lower)
              }}
            />
            <Label className='leading-none text-lg' htmlFor='lowercase'>
              Lowercase
            </Label>
            <Checkbox
              defaultChecked
              id='uppercase'
              className='border-black border-2 shadow-sm bg-cyan-200'
              onClick={() => {
                setUpper(!upper)
              }}
            />
            <Label className='leading-none text-lg' htmlFor='uppercase'>
              Uppercase
            </Label>
            <Checkbox
              id='numbers'
              className='border-black border-2 shadow-sm bg-cyan-200'
              onClick={() => {
                setNums(!nums)
              }}
            />
            <Label className='leading-none text-lg' htmlFor='numbers'>
              Numbers
            </Label>
            <Checkbox
              id='symbols'
              className='border-black border-2 shadow-sm bg-cyan-200'
              onClick={() => {
                setSyms(!syms)
              }}
            />
            <Label className='leading-none text-lg' htmlFor='symbols'>
              Symbols
            </Label>
          </div>
        </div>
      </div>
      <Label className='flex justify-center items-center gap-4 text-xl'>
        Streamer Mode{" "}
        <Checkbox
          id='streamer'
          className='border-black border-2 shadow-sm bg-red-600 text-white w-8 h-8'
        />
      </Label>

      <div className='grid gap-2'>
        <Textarea
          id='password'
          placeholder={pass}
          readOnly
          rows={1}
          className='border-black border-2 shadow-sm bg-red-300 text-black placeholder:text-black text-xl font-extrabold text-wrap text-center'
        />
        <Button
          className='w-full text-lg border-black border-2 shadow-sm bg-yellow-300 transition-all hover:bg-yellow-400 hover:shadow-lg active:scale-[102%] active:bg-yellow-500 active:translate-y-[2px] font-bold'
          variant='outline'
          onClick={(e) => {
            e.preventDefault()
            const newPass = CreatePassword({
              lower,
              upper,
              nums,
              syms,
              length,
            })
            setPass(newPass)
            const output = document.getElementById(
              "password"
            ) as HTMLTextAreaElement
            output.value = newPass
            console.log(`Password: ${newPass}`)
          }}>
          Generate
        </Button>
        <Button
          className='w-full text-lg border-black border-2 shadow-sm bg-blue-300 transition-all hover:bg-blue-400 hover:shadow-lg active:scale-[102%] active:bg-blue-500 active:translate-y-[2px] font-bold'
          variant='outline'
          onClick={(e) => {
            e.preventDefault()
            const output = document.getElementById(
              "password"
            ) as HTMLTextAreaElement
            output.select()
            document.execCommand("copy")
          }}>
          Copy to clipboard
        </Button>
      </div>
    </form>
  )
}
