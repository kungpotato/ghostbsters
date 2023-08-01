import { FiSearch } from 'react-icons/fi'

function SearchInput() {
  return (
    <div className="flex items-center rounded-full border border-gray-300 p-2">
      <FiSearch className="text-gray-500" />
      <input className="rounded-full ml-2 focus:outline-none" type="text" placeholder="Search..." />
    </div>
  )
}

export default SearchInput
