import React, { FC } from "react";
import { PageName } from "common/types";
import Icon from "img/hamburger-button.png";
import { useRecoilState } from "recoil";
import { userState } from "globalStates/user";

type Props = {
  setPageName: (pageName: PageName) => void;
  setIsSideMenuOpen: (isSideMenuOpen: boolean) => void;
};

export const Header: FC<Props> = ({ setPageName, setIsSideMenuOpen }) => {
  const [user] = useRecoilState(userState);

  return (
    <header className="bg-white drop-shadow-md font-bold flex justify-between mb-8 px-5 py-2 rounded-b-xl sticky top-0 z-40">
      <button
        className="text-2xl"
        onClick={() => {
          setPageName("top");
        }}
      >
        感謝感謝
      </button>
      {user && (
        <img
          src={Icon}
          onClick={() => {
            setIsSideMenuOpen(true);
          }}
          className="w-7"
        ></img>
      )}
    </header>
  );
};
