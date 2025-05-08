// import { logoIconsList } from "../constants";

// const LogoIcon = ({ icon }) => {
//   return (
//     <div className="flex-none flex-center marquee-item">
//       <img src={icon.imgPath} alt={icon.name} />
//     </div>
//   );
// };

// const LogoShowcase = () => (
//   <div className="md:my-20 my-10 relative">
//     <div className="gradient-edge" />
//     <div className="gradient-edge" />

//     <div className="marquee h-52">
//       <div className="marquee-box md:gap-12 gap-5">
//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}

//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default LogoShowcase;

import { logoIconsList } from "../constants";

const LogoIcon = ({ icon: Icon, name, color }) => {
  return (
    <div className="flex-none flex-center marquee-item text-5xl">
      <Icon className={color} title={name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((tech, index) => (
          <LogoIcon
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}

        {logoIconsList.map((tech, index) => (
          <LogoIcon
            key={index + logoIconsList.length}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
