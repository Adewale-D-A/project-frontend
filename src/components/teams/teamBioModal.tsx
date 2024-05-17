import { Box, Modal } from "@mui/material";

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
                  <div className={`aspect-square overflow-hidden max-w-xs`}>
                    <img
                      src={teamMember?.imgSrc}
                      alt={teamMember?.name}
                      title={teamMember?.name}
                      className=" w-full h-auto transition-all"
                    />
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
