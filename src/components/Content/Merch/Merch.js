import { useState, useEffect } from "react";

import MerchItem from "./MerchItem";
import Section from "../../UI/Section";

import styles from "./Merch.module.css";
// import merch from "../../../data/Merch.json";

const Merch = (props) => {
  const [merch, setMerch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchMerch = async () => {
      const response = await fetch("http://localhost:8080/merch/");

      if (!response.ok) {
        throw new Error("Načtení merche selhalo.");
      }

      const merchData = await response.json();

      if (!merchData.body || merchData.body.length === 0) {
        throw new Error("Žádný merch nenalezen");
      }

      setMerch(merchData.body);
      setIsLoading(false);
    };

    fetchMerch().catch((err) => {
      setIsLoading(false);
      setHasError(err.message);
    });
  }, []);

  let content;

  if (isLoading) {
    content = (
      <div>
        <p>Nahrávám merch...</p>
      </div>
    );
  }

  if (hasError) {
    content = (
      <div>
        <p>{hasError}</p>
      </div>
    );
  }

  if (!isLoading && !hasError) {
    const merchList = merch.map((item) => {
      return <MerchItem item={item} key={item._id} />;
    });
    content = <div className={styles.merchContainer}>{merchList}</div>;
  }

  return (
    <Section id="merch">
      <div className={styles.merchWrap}>{content}</div>
    </Section>
  );
};

export default Merch;
