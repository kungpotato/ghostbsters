import FadeOutDiv from './nav-fade'

export default function Navbar() {
  return (
    <nav>
      <div className="relative bg-gray-100 h-10 w-full">
        <div className="mx-10 flex justify-end align-baseline h-10 m-0 p-0 text-xs items-center space-x-3">
          <div>ค้นหาร้านค้า</div>
          <div>|</div>
          <div>ความช่วยเหลือ</div>
          <div>|</div>
          <div>เข้าร่วมกับเรา</div>
          <div>|</div>
          <div>ลงเชื่อเข้าใช้</div>
        </div>
      </div>
      <FadeOutDiv />
    </nav>
  )
}
