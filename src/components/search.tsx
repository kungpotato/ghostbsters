'use client'

import { ChangeEvent, FocusEventHandler, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

function SearchInput({
  onChange,
  onFocus
}: {
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: FocusEventHandler<HTMLInputElement>
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setIsExpanded(true)
    } else {
      setIsExpanded(false)
    }
    if (onChange !== undefined) {
      onChange(event)
    }
  }

  return (
    <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'h-500 w-full' : 'h-auto'} bg-white`}>
      <div className="flex items-center rounded-full border border-gray-300 p-2">
        <FiSearch className="text-gray-500" />
        <input
          className="rounded-full ml-2 focus:outline-none w-full"
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          onFocus={onFocus}
        />
        {isExpanded && <MdClose className="text-gray-500" />}
      </div>
    </div>
  )
}

export default SearchInput
