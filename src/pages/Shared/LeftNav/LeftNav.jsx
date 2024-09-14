import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);

  const[active, setActive]=useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/Catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" col-span-3 p-4 flex flex-col ">
        <h2 className="text-2xl font-semibold text-left mb-3">All Categories</h2>
      <div className="text-start  w-full  ">
      {catagories.map((catagory) => (
          <p
            key={catagory.id}
            className={`p-3 ${
              active === catagory.id ? 'bg-slate-300' : ''
            }
            hover:bg-slate-100 cursor-pointer block`}
          >
            <Link
              onClick={() => setActive(catagory.id)}
              className="block"
            >
              {catagory.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
