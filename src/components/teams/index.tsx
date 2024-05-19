"use client";

import { useCallback, useState } from "react";
import TeamBioModal from "./teamBioModal";
import { Link } from "react-router-dom";
import { ClickButtonMain } from "../buttons";

const TeamBioCard = ({
  item,
}: {
  item: {
    name: string;
    position: string;
    shortBio: string;
    longBio: string;
    imgSrc: string;
    linkedIn: string;
  };
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [teamMember, setTeamMember] = useState<{
    name: string;
    position: string;
    shortBio: string;
    longBio: string;
    imgSrc: string;
    linkedIn: string;
  }>({
    name: "",
    position: "",
    shortBio: "",
    longBio: "",
    imgSrc: "",
    linkedIn: "",
  });

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const openModalClickHandler = useCallback(
    (item: {
      name: string;
      position: string;
      shortBio: string;
      longBio: string;
      imgSrc: string;
      linkedIn: string;
    }) => {
      setTeamMember(item);
      setOpenModal(true);
    },
    []
  );

  return (
    <>
      <div className="w-full group cursor-pointer shadow-sm rounded-md">
        <div className="flex justify-between flex-col w-full h-full my-3">
          <div className={`aspect-square w-full overflow-hidden relative`}>
            <img
              src={item?.imgSrc}
              alt={item?.name}
              title={item?.name}
              className="w-full object-cover group-hover:scale-125 transition-all"
            />
            <Link
              to={item?.linkedIn}
              target="_blank"
              className=" hover:text-green-500 absolute top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-10 h-10"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </Link>
          </div>
          <div className="text-center flex flex-col gap-3 px-4">
            <h5 className="font-bold text-xl capitalize">{`${item?.name}`}</h5>
            {/* <span className="text-sm">{item?.position}</span> */}
            <span className="text-xs font-bold">{item?.position}</span>

            <p className=" text-left line-clamp-2">{item?.shortBio}</p>
            <div className="flex">
              <ClickButtonMain
                type="button"
                clickHandler={() => openModalClickHandler(item)}
                label="more"
              />
            </div>
          </div>
        </div>
      </div>

      <TeamBioModal
        openModal={openModal}
        handleModalClose={() => closeModal()}
        teamMember={teamMember}
      />
    </>
  );
};

export default TeamBioCard;
