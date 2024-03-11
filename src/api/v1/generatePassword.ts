type PasswordOptions = {
  lower: boolean
  upper: boolean
  nums: boolean
  syms: boolean
  length: number
}

export default function generatePassword(passwordArgs: PasswordOptions) {
  let password: string = ""

  const { lower, upper, nums, syms, length } = passwordArgs

  if (length < 8 || length > 32 || !length) {
    throw new Error("Length must be between 8 and 32 characters.")
  }

  if (!lower && !upper && !nums && !syms) {
    throw new Error(`Must include one of the options.`)
  }

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
    const charSet = charArray[Math.floor(Math.random() * charArray.length)]
    const char = charSet[Math.floor(Math.random() * charSet.length)]
    password += char
  }
  return password
}
