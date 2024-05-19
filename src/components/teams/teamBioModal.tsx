import { Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";

//modal styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const TeamBioModal = ({
  openModal,
  handleModalClose,
  teamMember,
}: {
  openModal: boolean;
  handleModalClose: any;
  teamMember: {
    name: string;
    position: string;
    shortBio: string;
    longBio: string;
    imgSrc: string;
    linkedIn: string;
  };
}) => {
  return (
    <Modal
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="onboarding options"
      aria-describedby="onboarding options"
    >
      <Box
        sx={{
          ...style,
          // width: 400,
          "@media (max-width:600px)": {
            width: 350,
          },
        }}
      >
        <div className="w-full flex flex-col items-center py-10 max-h-screen overflow-y-auto">
          <div className=" w-full max-w-md flex flex-col items-center gap-4">
            <h5 className="w-full text-left text-xl my-0 border-b border-x-0 border-t-0 py-2 border-solid border-primary-500/60">
              {teamMember?.name}
            </h5>

            <div className="w-full">
              <div className="w-full p-5">
                <div className="flex flex-col items-center w-full my-3">
                  <div
                    className={`aspect-square overflow-hidden max-w-xs relative`}
                  >
                    <img
                      src={teamMember?.imgSrc}
                      alt={teamMember?.name}
                      title={teamMember?.name}
                      className=" w-full h-auto transition-all"
                    />

                    <Link
                      to={teamMember?.linkedIn}
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
                  <div className="text-center flex flex-col gap-3">
                    <h5 className="font-bold text-xl capitalize">
                      {`${teamMember?.name}`}
                    </h5>
                    <span className="text-xs font-bold">
                      {teamMember?.position}
                    </span>
                    <p className=" text-left">{teamMember?.longBio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default TeamBioModal;
