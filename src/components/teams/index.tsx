"use client";

import { useCallback, useState } from "react";
import TeamBioModal from "./teamBioModal";

const TeamBioCard = ({
  item,
}: {
  item: {
    name: string;
    position: string;
    shortBio: string;
    longBio: string;
    imgSrc: string;
  };
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [teamMember, setTeamMember] = useState<{
    name: string;
    position: string;
    shortBio: string;
    longBio: string;
    imgSrc: string;
  }>({
    name: "",
    position: "",
    shortBio: "",
    longBio: "",
    imgSrc: "",
  });

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <>
      <div className="w-full group card-container cursor-pointer shadow-sm rounded-md">
        <div className="flex justify-between flex-col w-full h-full my-3">
          <div className={`aspect-square overflow-hidden`}>
            <img
              src={item?.imgSrc}
              alt={item?.name}
              title={item?.name}
              className=" w-full h-auto group-hover:scale-125 transition-all"
            />
          </div>
          <div className="text-center flex flex-col gap-3">
            <h5 className="font-bold text-xl capitalize">{`${item?.name}`}</h5>
            {/* <span className="text-sm">{item?.position}</span> */}
            <span className="text-xs font-bold">{item?.position}</span>
            <p className=" text-left line-clamp-2">{item?.shortBio}</p>
            <div className="flex">
              <button
                type="button"
                onClick={() => {
                  setTeamMember(item);
                  setOpenModal(true);
                }}
                className="bg-primary-500 p-2 px-3 rounded-md w-fit text-white hover:bg-secondary-500 transition-all cursor-pointer"
              >
                more
              </button>
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
