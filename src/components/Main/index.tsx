import { useEffect, useState } from "react";
import { IData } from "../../type";
import axios from "axios";
import Content from "../Content";
import IconArrowDown from "../../../public/images/icon-arrow-down.svg";
import "./style.css";

const Main = () => {
  const [data, setData] = useState<IData[]>();

  const getData = () => {
    return axios
      .get("data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="containerFaq">
      <Content data={data ?? []} title="FAQ" img={IconArrowDown} />
    </main>
  );
};

export default Main;
