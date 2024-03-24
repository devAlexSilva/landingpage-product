import Image01 from '@/public/images/14204_1.jpg'
import Image02 from '@/public/images/14204_2.jpg'
import Image03 from '@/public/images/14204_3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BlockImagesData } from './blockImages-data'

export default function BlockImages() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">O melhor do Atacado do Lojista nas suas mãos.</h2>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {
              Array.from([1, 2, 3, 4, 5, 6]).map((item, index) => <BlockImagesData
                key={index}
                srcImage={Image01}
                oldPrice={445.00}
                newPrice={345.00}
              />)
            }

          </div>

        </div>
      </div>
    </section>
  )
}
