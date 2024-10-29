import React, { useState } from "react";
import ListCard from "./ListCard";
import ProfileForm from "./ProfileForm";
 const Profile = () => {
    const [profiles, setProfiles] = useState([
        { id: 1, name: "Alice", age: 20, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 21, occupation: "Doctor" },
        { id: 1, name: "charlie", age: 22, occupation: "Artist" }
    ]);
    const addProfile = (newProfile) => {
        const updateProfile = (id: profiles.length + 1, ...newsetprofile);  
            setProfile([...profiles,  updateProfile]);
    }:
    return {
        <>
        
    }
 }
