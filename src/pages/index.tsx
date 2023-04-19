import React, { type FC } from "react";
import Loading from "~/components/Loading";
import Modal from "~/components/Modal";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <React.Fragment>
      <p>Timeline</p>
      {<Loading />}
    </React.Fragment>
  );
};
export default Home;
