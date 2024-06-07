
interface inputProps  {
  name: string,
  type: string,
  placeholder? : string,
  value?:  string,
  required: boolean | undefined;
}
const Input = ({name,type,placeholder,value,required,}: inputProps) => {
  return (
    <>
      <input className="w-full p-2 border-gray-300 rounded-sm "
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
     
      />
    </>
  )
}

export default Input