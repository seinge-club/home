import Link from 'next/link'

const Platform = () => {
  return (
    <section className='md:pt-8 sm:pt-8 pt-4 relative z-1' id='DemoClass'>
      <div className='container px-4'>
        <div className="bg-section/10 px-6 md:px-16 py-14 rounded-3xl border-2 border-section/20 grid grid-cols-12 items-center gap-8 relative overflow-hidden">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>

          <div className='lg:col-span-6 col-span-12 z-10 relative order-2 lg:order-1'>
            {/* Mini Interactive Exercise */}
            <div className="bg-dark_grey/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center mb-4">
                <div className="inline-block bg-white/10 p-4 rounded-full mb-3">
                  {/* Simple Orange Icon/Image Placeholder */}
                  <span className="text-4xl">🍊</span>
                </div>
                <p className="text-white font-medium text-lg">Which fruit is this?</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white/5 hover:bg-red-500/20 hover:border-red-500/50 border border-white/10 text-white py-2 rounded-lg transition-all text-sm">Apple</button>
                <button className="bg-white/5 hover:bg-green-500/20 hover:border-green-500/50 border border-white/10 text-white py-2 rounded-lg transition-all text-sm font-bold ring-1 ring-transparent hover:ring-green-500">Orange</button>
                <button className="bg-white/5 hover:bg-red-500/20 hover:border-red-500/50 border border-white/10 text-white py-2 rounded-lg transition-all text-sm">Banana</button>
                <button className="bg-white/5 hover:bg-red-500/20 hover:border-red-500/50 border border-white/10 text-white py-2 rounded-lg transition-all text-sm">Grape</button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-white/40">Interactive Preview</p>
              </div>
            </div>
          </div>

          <div className='lg:col-span-6 col-span-12 text-center lg:text-left z-10 order-1 lg:order-2'>
            <h2 className='text-white sm:text-40 text-30 mb-6 font-bold'>
              Demo <span className='text-primary'>Class</span>{' '}
              <br />
              <span className='text-white/80 text-2xl font-normal'>Try it yourself!</span>
            </h2>
            <p className='text-white/80 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0'>
              Accede a nuestra clase de demostración gratuita y descubre cómo nuestra plataforma puede ayudarte a crecer y mejorar tus habilidades.
            </p>
            <div className='flex lg:justify-start justify-center'>
              <Link
                href='#'
                className='text-darkmode bg-primary border border-primary py-3 px-8 rounded-full text-lg font-bold hover:bg-white hover:text-darkmode transition-all shadow-lg shadow-primary/20'>
                Start Full Demo
              </Link>
            </div>
          </div>
        </div>
        <div className='bg-linear-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60'></div>
      </div>
    </section>
  )
}

export default Platform
