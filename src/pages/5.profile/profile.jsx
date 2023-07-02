import React from "react";
import User from "../../assets/img/user.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "../3.main_page/Header";
const Profile = () => {
  const skills = [
    { id: 1, skill: "Programador" },
    { id: 2, skill: "Web" },
    { id: 3, skill: "Html5" },
    { id: 4, skill: "Css3" },
  ];
  return (
    <div className="px-5">
      <Header />
      <div className="max-w-full w-[800px] m-auto mt-0 md:mt-20">
        <div className="flex gap-5 p-12 flex-col md:flex-row rounded-3xl shadow-xl ">
          <section className="w-full md:w-1/2 flex flex-col gap-2">
            <img className="w-6/12 md:w-10/12 mx-auto" src={User} alt="" />
            <section className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <ButtonSkills key={skill.id} name={skill.skill} />
              ))}
            </section>
          </section>
          <section className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="font-bold text-gray-500 text-3xl">
              Pedro Nicolás Suarez Vera
            </h2>
            <section>
              <p className="text-gray-500">Masculino</p>
              <p className="text-gray-500">Fecha de nacimiento: 12/02/2003</p>
              <p className="text-gray-500">19 años</p>
            </section>
            <button className="self-start px-8 py-2  rounded-full bg-red-600 text-white">
              Editar perfil
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

const ButtonSkills = ({ name }) => {
  return (
    <button className="border-red-600 border-[1px] rounded-full flex items-center align-middle gap-2 py-2 px-4 text-red-600">
      <FontAwesomeIcon icon={faXmarkCircle} />
      <p>{name}</p>
    </button>
  );
};

export default Profile;
