import React from "react";

const AllImages = () => {
  const items = [
    {
      img: "img/EC6.png",
      type: "LED bulb",
      carbon: "~1.35kWh/month",
    },
    {
      img: "img/EC5.png",
      type: "Electric Car",
      carbon: "~180kg/month",
    },
    {
      img: "img/EC4.png",
      type: "Mobile Phones",
      carbon: "~0.27kg/month",
    },
    {
      img: "img/EC2.png",
      type: "Computer & Laptop",
      carbon: "~10.8 to 21.6 kg/month",
    },
    {
      img: "img/EC1.png",
      type: "Airconditioner",
      carbon: "~900kg/month",
    },
    {
      img: "img/EC3.png",
      type: "Fridge",
      carbon: "~30kg/month",
    },
  ];

  return (
    <div className="Allimages">
      <div className="harm">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="card">
              <div className="circle circle2"></div>
              <div className="circle circle1"></div>
              <img src={item.img} alt={item.type} />
            </div>
            <div className="content">
              <p>
                Object type :- <strong>{item.type}</strong> <br />
                Carbon Produced:- <strong>{item.carbon}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImages;