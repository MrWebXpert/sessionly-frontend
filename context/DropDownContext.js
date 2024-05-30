import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const DropDownContext = createContext();

export const useDropdown = () => {
  return useContext(DropDownContext);
};

const DropDownProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropDownContext.Provider value={{ open, setOpen, menuRef }}>
      {children}
    </DropDownContext.Provider>
  );
};

export default DropDownProvider;
