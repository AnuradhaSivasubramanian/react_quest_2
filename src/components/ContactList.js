import React from "React";
import Contact from "./Contact";
const contact = [
  {
    name: "Eric Bradley",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    online: true
  },
  {
    name: "charlene herrera",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    online: false
  },
  {
    name: "charlie",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    online: false
  },
  {
    name: "Elsie Myers",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    online: true
  },
  {
    name: "Shawn Miles",
    avatar: "https://randomuser.me/api/portraits/men/73.jpg",
    online: true
  }
];

const ContactList = () => (
  <div>
    {contact.map(item => (
      <Contact name={item.name} avatar={item.avatar} online={item.online} />
    ))}
  </div>
);

export default ContactList;
