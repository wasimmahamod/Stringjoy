import React from 'react'

const App = () => {
  return (
    <>
      {/*=============== header start ========= */}
      <div className='mx-auto text-center mt-4'>
        <div className='flex justify-center'>
          <img className='w-[250px]' src="images/logo.png" alt="logo" />
        </div>
        <h2 className='font-primary text-[42px] font-bold text-[#0b2343] '>String Tension Calculator</h2>
      </div>
      {/*=============== header end ========= */}
      {/*=============== nav: start ========= */}
      <nav className='text-center bg-[#0b2343] py-4'>
        <div className='mx-auto '>
          <div className='flex justify-center gap-x-3'>
            <h4 className='text-white font-secandry text-base'>Instrument:</h4>
            <select name="cars" id="cars">
              <option value="volvo">Electric Guitar</option>
              <option value="saab">Acoustic Guitar</option>
              <option value="mercedes">Bass Guitar</option>
            </select>
          </div>
          <div className='flex justify-center gap-x-3 mt-4 ml-[115px]'>
            <h4 className='text-white font-secandry text-base'>Type:</h4>
            <select name="cars" id="cars">
              <option value="volvo">Signatures | Nickel Wound</option>
              <option value="saab">Acoustic Guitar</option>
              <option value="mercedes">Broadways | Pure Nickel</option>
            </select>
          </div>

        </div>
      </nav>
      {/*=============== nav: end ========= */}
      {/*=============== number: start ========= */}
      <div className='w-[65%] mx-auto'>
        <div className='w-[60%] mx-auto'>
          <div className=' flex justify-between mt-8'>
            <div className='flex items-center gap-x-2 '>
              <h3 className='font-secandry text-[#626262]'>Number of strings:</h3>
              <select className='border ' name="cars" id="cars">
                <option value="volvo">6</option>
                <option value="saab">7</option>
                <option value="mercedes">8</option>
                <option value="audi">9</option>
              </select>
            </div>
            <div className='flex items-center gap-x-2 '>
              <h3 className='font-secandry text-[#626262]'>Overall Scale Length (in.):</h3>
              <input className='w-[50px] border px-2 ' type="text" placeholder='25.5' />
            </div>


          </div>
        </div>
        <div >
          <div className='w-[100%] mx-auto flex justify-between mt-10  '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>String</h3>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>Scale Length (in.)</h3>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>Pitch</h3>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>String</h3>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>Tension (lbs.)</h3>

            </div>

          </div>
          <div className='border border-solid border-[#0b2343] w-full mt-4'></div>

          <div className='w-[100%] mx-auto flex justify-between mt-10 mb-8 '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>1</h3>

            </div>
            <div className='text-center w-[20%]'>
              <input className='w-[80px] px-3  border border-black' type="text" placeholder='26.5' />

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3.2</h3>

            </div>

          </div>
          <div className='w-[100%] mx-auto flex justify-between mt-10 mb-8 '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>2</h3>

            </div>
            <div className='text-center w-[20%]'>
              <input className='w-[80px] px-3  border border-black' type="text" placeholder='26.5' />

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3.2</h3>

            </div>

          </div>
          <div className='w-[100%] mx-auto flex justify-between mt-10 mb-8 '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3</h3>

            </div>
            <div className='text-center w-[20%]'>
              <input className='w-[80px] px-3  border border-black' type="text" placeholder='26.5' />

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3.2</h3>

            </div>

          </div>
          <div className='w-[100%] mx-auto flex justify-between mt-10 mb-8 '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>4</h3>

            </div>
            <div className='text-center w-[20%]'>
              <input className='w-[80px] px-3  border border-black' type="text" placeholder='26.5' />

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3.2</h3>

            </div>

          </div>
          <div className='w-[100%] mx-auto flex justify-between mt-10 mb-8 '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>5</h3>

            </div>
            <div className='text-center w-[20%]'>
              <input className='w-[80px] px-3  border border-black' type="text" placeholder='26.5' />

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3.2</h3>

            </div>

          </div>
          <div className='w-[100%] mx-auto flex justify-between mt-10 mb-8 '>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>6</h3>

            </div>
            <div className='text-center w-[20%]'>
              <input className='w-[80px] px-3  border border-black' type="text" placeholder='26.5' />

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <select className='border border-black ' name="cars" id="cars">
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>
                <option value="volvo">A1</option>
                <option value="saab">B1</option>

              </select>

            </div>
            <div className='text-center w-[20%]'>
              <h3 className='font-secandry text-[#626262] text-xl'>3.2</h3>

            </div>

          </div>
          <div className='text-center'>
            <h2 className='font-secandry text-xl text-[#0b2343] mb-5'>Total tension: <span className='font-medium'>99.9  lbs.</span></h2>
          </div>


        </div>
      </div>
      {/*=============== number: end ========= */}
      {/*=============== nav: start ========= */}
      <div className='text-center bg-[#0b2343] py-4'>
        <h3 className=' font-secandry text-lg text-white'>BUILD A CUSTOM SET LIKE THIS</h3>
        <button className='bg-[#86313c] text-white p-2 rounded-md font-bold font-secandry'>SELECT YOUR GAUGES HERE</button>
      </div>
      {/*=============== nav: end ========= */}
      {/*=============== video: start ========= */}
      <section className='bg-[#f9f5ec] py-10'>
        <div className='w-[80%] mx-auto'>
          <h1 className='font-primary text-[32px] font-bold text-[#0b2343] mb-4'>How to Use the Stringjoy Guitar String Tension Calculator</h1>
          <iframe width="100%" height="800" src="https://www.youtube.com/embed/_g_B1DrET1k?si=0LmP0OtPzozxxEzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>We made the Stringjoy String Tension Calculator to help players make an informed decision about which custom guitar string gauges will work best for their needs—no matter how unique they may be. To get the most out of this tool, read these instructions to understand what it does, how it works, and how to use it.</p>

          <h4 className='font-primary text-2xl  font-bold  text-[#0b2343] mb-4 mt-4'>The Most Important Thing of All:</h4>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>Let's cut right to the chase here because this is the biggest issue players face when using string tension calculators. Listen carefully: You almost always want more tension on your wound strings than on your plain strings. If you're looking for a balanced set you might only want 2-4 lbs more tension on an electric guitar, or 5-7 lbs more tension for an acoustic guitar. If you want even more power on your wound strings as many players do, you can go even higher than that.</p>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>There are many reasons for this, but the big two are:</p>
          <ol className='ml-5 mt-5'>
            <li className=' font-secandry text-md font-normal text-[#626262] '>1.Wound strings have a different geometry than plain strings, this causes them to be more flexible even at higher tension numbers.</li>
            <li className=' font-secandry text-md font-normal text-[#626262] '>2.Plain strings have more output than wound strings because they're pure steel rather than steel wrapped in nickel or bronze wire (steel has more output on its own than nickel or bronze does).  even at higher tension numbers.</li>
          </ol>
          <h4 className='font-primary text-2xl  font-bold  text-[#0b2343] mb-4 mt-4'>The (other) Most Important Thing of All:</h4>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>As gauges increase, so does overall output and bass response. Because of this, when you get to the very heaviest string (or strings in the case of a 7 or 8 string guitar or 5 string bass), you may find it best to ramp the tension down slightly to avoid excess bass response overpowering other strings in the set.</p>
          <h4 className='font-primary text-2xl  font-bold  text-[#0b2343] mb-4 mt-4'>What is String Tension?</h4>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>What is String Tension?</p>
          <h4 className='font-primary text-2xl  font-bold  text-[#0b2343] mb-4 mt-4'>How is String Tension Calculated?</h4>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>String tension is a product of a string's mass, the pitch it's tuned to, and the string's scale length. Increasing any of these factors will increase string tension, and decreasing any of them will decrease string tension, simple as that.</p>
          <h4 className='font-primary text-2xl  font-bold  text-[#0b2343] mb-4 mt-4'>Why Are Your Numbers Different than Other String Tension Calculators?</h4>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>These numbers are based on our own measurements of Stringjoy strings. They will be different than other companies' measurements because we make our strings differently than other companies.</p>
          <p className=' font-secandry text-md font-normal text-[#626262] mt-5'>I also want to note that any string tension calculator is working off of averages. Strings are man-made, and as such small variations are always present from one string to another which will cause micro-changes to how a string responds.</p>

        </div>
        <div className='text-center mx-auto w-[510px]  mt-14 '>
          <p className='text-[#b1b1b1] text-[12px] font-secandry'>© 2021 Stringjoy, LLC. All rights reserved. Use of this site constitutes acceptance of our <span className='  underline text-black'>Terms of Service</span> and <span className=' underline text-black'>Privacy Policy</span>. Material on this site may not be reproduced, distributed, transmitted or otherwise used without prior written permission of Stringjoy.</p>
        </div>
      </section>

      {/*=============== video: end ========= */}

    </>
  )
}

export default App
