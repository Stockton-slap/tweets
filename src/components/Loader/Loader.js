import { Circles } from "react-loader-spinner";

const Loader = () => (
  <Circles
    height="80"
    width="80"
    radius="9"
    wrapperStyle={{
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
    }}
    visible={true}
    color="#5CD3A8"
    ariaLabel="circles-loading"
  />
);
export default Loader;
