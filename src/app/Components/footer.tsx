import Link from "next/link"

function Footer(){

    return(

        <div className=" flex-col sm:min-h-[60px] w-full bg-[#f5f5f5] flex justify-between items-center p-5  ">

          
          <p>
            All Rights Reserved &copy; </p>


            <div>

                <ul className="flex gap-3">

<Link href={'/contact'}>   <li>Contact</li></Link>
    
                 

<Link href={'/privacy-policy'}> <li>Privacy Policy</li></Link>

                   
                   <Link href={'/disclaimer'}>  <li>Disclaimer</li></Link>
                  
                </ul>
            </div>

            
        </div>

    )

}

export default Footer