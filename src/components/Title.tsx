import * as React from 'react'

interface ITitleProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Title: React.FunctionComponent<ITitleProps> = ({ setShowForm }) => {
  const title = 'Todo App'
  return (
    <h1
      className='mt-2 text-4xl font-bold leading-normal mb-2 text-orange-500 hover:text-orange-400 hover:underline cursor-pointer'
      onClick={() => setShowForm((prev) => !prev)}
    >
      {title}
    </h1>
  )
}

export default Title
