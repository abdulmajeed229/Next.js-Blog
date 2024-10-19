function Contact(){

    return(

       

        <div className="h-[100vh] w-full flex justify-center items-center p-4">


            <div className="min-h-[400px] w-[400px] bg-white shadow-xl flex flex-col justify-center items-center p-5 animate-[wow]">

<h1 className="text-[25px] font-semibold">Contact Us</h1>

                <input type="text" className="h-[40px] w-[90%] rounded border border-[#c7c4c4] mt-[10px] outline-none pl-2" placeholder="Enter Name*" />

                <br />

                <input type="text" className="h-[40px] w-[90%] rounded border border-[#c7c4c4] outline-none pl-2" placeholder="Enter Email*" />

                <br />

                <textarea className="h-[100px] w-[90%] rounded border border-[#c7c4c4] outline-none pl-2 p-2" placeholder="Write Message*"></textarea>

                <br />

                <button className="h-[40px] w-[120px] rounded-md bg-[#1A73E8] text-white">Submit</button>



            </div>


        </div>
    )
}

export default Contact