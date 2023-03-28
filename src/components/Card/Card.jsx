import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const [modalData, setModalData] = useState({});

  const handleShowAll = () => {
    setShowAll(true);
  }
  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(b.published_in) - new Date(a.published_in)
    })
    setData([...data, sortedData])
  }

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);

  useEffect(() => {
    fetch(` https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setModalData(data.data))
  }, [uniqueId])

  return (
    <>
      <span onClick={handleSort}>
        <Button>Sort by Date</Button>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {data.slice(0, showAll ? 12 : 6).map((singleData, index) => (
          <SingleData
            key={singleData.id}
            singleData={singleData}
            setUniqueId={setUniqueId}
          />
        ))}
      </div>
      {
        !showAll && (<span onClick={handleShowAll}>
          <Button>see more</Button>
        </span>)
      }
      <Modal modalData={modalData} />
    </>
  );
};
export default Card;
