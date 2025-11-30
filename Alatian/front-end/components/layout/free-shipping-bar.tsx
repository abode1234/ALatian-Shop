import { Truck } from 'lucide-react'

export function FreeShippingBar() {
  return (
    <div className="bg-orange-500 text-white py-2 text-center text-sm font-medium">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <Truck className="h-4 w-4" />
        <span>شحن مجاني لجميع مناطق العراق</span>
      </div>
    </div>
  )
}

