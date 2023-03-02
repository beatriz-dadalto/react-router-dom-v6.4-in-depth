import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState('Bia')

  if (!user) {
    return <Navigate to='/' replace={true}/>
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        itaque, nulla ratione at beatae officia ipsam assumenda iure repellendus
        accusantium porro sequi ea provident cum labore voluptatibus odit libero
        eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        itaque, nulla ratione at beatae officia ipsam assumenda iure repellendus
        accusantium porro sequi ea provident cum labore voluptatibus odit libero
        eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        itaque, nulla ratione at beatae officia ipsam assumenda iure repellendus
        accusantium porro sequi ea provident cum labore voluptatibus odit libero
        eum.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
