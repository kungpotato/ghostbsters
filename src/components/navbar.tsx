import FadeOutDiv from './nav-fade'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="relative bg-gray-100 h-10 w-full">
          <div className="container flex justify-end h-10 text-xs items-center space-x-3">
            <div>ค้นหาร้านค้า</div>
            <div>|</div>
            <div>ความช่วยเหลือ</div>
            <div>|</div>
            <div>เข้าร่วมกับเรา</div>
            <div>|</div>
            <div>ลงเชื่อเข้าใช้</div>
          </div>
        </div>
      </nav>
      <FadeOutDiv />
      <div className="relative bg-gray-100 h-10 w-full"></div>
    </div>
  )
}
