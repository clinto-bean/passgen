type PasswordOptions = {
  lower: boolean
  upper: boolean
  nums: boolean
  syms: boolean
  length: number
}

export default function CreatePassword(args: PasswordOptions) {
  let password: string = ""

  const { lower, upper, nums, syms, length } = args

  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const symbols = "!@#$%^&*()_+"

  const charArray: string[] = []

  lower && charArray.push(lowercase)
  upper && charArray.push(uppercase)
  nums && charArray.push(numbers)
  syms && charArray.push(symbols)

  for (let i = 0; i < length; i++) {
    const charSet: string =
      charArray[Math.floor(Math.random() * charArray.length)]
    const char = charSet[Math.floor(Math.random() * charSet.length)]
    password += char
  }
  return password
}
