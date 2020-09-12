const main = async (): Promise<void> => {
  const result = await foo()
  console.log(result)
}
const foo = async (): Promise<number> => Promise.resolve(1)
main()
