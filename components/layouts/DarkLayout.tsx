import { FC } from "react";

type Props = {
  children: React.ReactNode;
}

export const DarkLayout: FC <Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h5>Darl-Layout</h5>
      <div>{children}</div>
    </div>
  );
};
