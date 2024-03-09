import { Label } from "@/components/ui/label"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

function App() {
  return (
    <main className='flex max-w-screen max-h-screen justify-center items-center h-[100dvh] w-[100dvw] bg-neutral-600'>
      <form className='flex flex-col gap-4 bg-green-300 shadow-lg shadow-black rounded-sm p-4'>
        <div className='w-full flex flex-col p-4 gap-4 items-center'>
          <Label>Lowercase</Label>
          <Input type='checkbox' name='lowercase' checked />
        </div>
        <div className='w-full flex flex-col p-4 gap-4 items-center'>
          <Label>Uppercase</Label>
          <Input type='checkbox' name='uppercase' checked />
        </div>
        <div className='w-full flex flex-col p-4 gap-4 items-center'>
          <Label>Numbers</Label>
          <Input type='checkbox' name='numbers' />
        </div>
        <div className='w-full flex flex-col p-4 gap-4 items-center'>
          <Label>Symbols</Label>
          <Input type='checkbox' name='symbols' />
        </div>
        <div className='w-full flex flex-col p-4 gap-4 items-center'>
          <Label>Length</Label>
          <Input
            type='text'
            name='length'
            placeholder='16'
            className='max-w-5ch text-end w-5ch'
          />
        </div>
        <Button
          type='submit'
          className='p-4 rounded-md border-2 border-black hover:bg-pink-300'>
          Generate
        </Button>
      </form>
    </main>
  )
}

export default App
