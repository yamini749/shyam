import { useAppStore } from "@/store"
import { useState, useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const saveChanges = () => {
    
  }


  return <div>Profile
    <div>Email: {userInfo.email}</div>
  </div>;
}

export default Profile;