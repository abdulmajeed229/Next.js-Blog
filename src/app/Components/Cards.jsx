"use client";
import { getDocs } from "firebase/firestore";
import { db } from "../Database/firebase.config"; 
import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import Link from "next/link";

function Card() {
  const [data, setData] = useState([]); 
  

  console.log(data);
  
  useEffect(() => {
    getData();
  }, []);

  const limitText = (text, wordLimit) => {
    if (!text) return ""; 
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  async function getData() {
    let aray = [];

    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        let userData = doc.data();
        aray.push(userData);
      });

      setData(aray); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="card-container flex gap-2 flex-wrap">
      {data.length > 0 ? (
        data.map((user, index) => (
          <div
            key={index}
            
            className=" w-[300px] min-h-[440px] bg-[#f0f0f0] border border-blue-300 text-[#333333] p-2 rounded-lg"
          >
            <img
              src={`${user.image}`} 
              alt="User"
            />

          
            <h1 className="mt-[10px] text-[20px] font-bold">{user.title}</h1>

            {/* Display a truncated version of the 'born' content */}
            <p>{limitText(user.content, 25)}</p>




            <button className="bg-[#4a90e2] h-[40px] w-[60%] text-white mt-[20px] rounded hover:bg-[#2c5aa0] transition-all">
              Read More
            </button>
       
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Card;
