"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Database/firebase.config";


function Add() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    async function sendContent() {
        if (!title || !image || !content) {
            alert('Please fill in all the fields before submitting!');
            return; 
        }
    
        try {
            const docRef = await addDoc(collection(db, "users"), {
                title: title,
                image: image,
                content: content
            });
    
            alert('Your post has been added successfully!'); // Corrected here
        } 
        catch (e) {
            alert('Something went wrong, please try again!');
        }
    }
    
    return (
        <div className="min-h-[100vh] w-full flex justify-center items-center p-5">

            <div className="min-h-[600px] w-[800px] bg-white shadow-xl flex flex-col justify-center items-center p-5 animate-[wow]">
                <h1 className="text-[25px] font-semibold">Add Post</h1>

                <input 
                    type="text" 
                    className="h-[50px] w-[100%] rounded border border-[#c7c4c4] mt-[10px] outline-none pl-2" 
                    placeholder="Post Title*" 
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <br />

                <input 
                    type="text" 
                    className="h-[50px] w-[100%] rounded border border-[#c7c4c4] outline-none pl-2" 
                    placeholder="Image URL*" 
                    onChange={(e) => setImage(e.target.value)} 
                />

                <br />

                <textarea 
                    className="h-[200px] w-[100%] rounded border border-[#c7c4c4] outline-none pl-2 p-2" 
                    placeholder="Write Content*" 
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <br />

                <button 
                    className="h-[40px] w-[120px] rounded-md bg-[#1A73E8] text-white" 
                    onClick={sendContent}
                >
                    Add Now
                </button>
            </div>
        </div>
    );
}

export default Add;
