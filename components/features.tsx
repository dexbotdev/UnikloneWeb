export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div className="createYourOwnContainer" >
              <span>{`Create your own `}</span>
              <span className="token"> Token</span>
          </div>
             </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
               <img src="/images/0_1.svg" style={{"marginTop":"-25px"}}/>
              <h4 className="featurehdr">MultiChain</h4>
              <p className="text-lg text-gray-400 text-center">With UniKlone you will be able to launch Token’s on any of the 4 Major chains.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <img src="/images/0_2.svg" style={{"marginTop":"-25px"}}/>
            <h4 className="featurehdr">Security</h4>
              <p className="text-lg text-gray-400 text-center">UniKlone creates Seperate Address for each Deployer for High Security</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <img src="/images/0_3.svg" style={{"marginTop":"-25px"}}/>
            <h4 className="featurehdr">Ai - Driven</h4>
            <p className="text-lg text-gray-400 text-center">UniKlone Ai-Driven Architecture allows users to Launch Custom
                  Tokens</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <img src="/images/0_4.svg" style={{"marginTop":"-25px"}}/>
            <h4 className="featurehdr">High Availability</h4>
            
            <p className="text-lg text-gray-400 text-center">With Multiple Servers backing our Bot, the service is made Highly Available to all.</p>
            </div>
 
          </div>

        </div>
      </div>
    </section>
  )
}
