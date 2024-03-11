export function logError(output: HTMLTextAreaElement, error: Error) {
  output.textContent = `Error: ${error.message}`
  console.log(error)
  output.classList.replace("bg-rose-300", "bg-red-600")
  output.classList.add("text-yellow-200")

  setTimeout(() => {
    output.textContent = "********"
    output.classList.add("bg-red-600", "bg-rose-300")
    output.classList.remove("text-yellow-200")
  }, 1500)
}
