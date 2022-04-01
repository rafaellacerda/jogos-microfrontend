import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3, Image4, DefaultImagem } from "../assets/index";
import "./index.css";

export function JogoMemoria() {
  const [itemsHidden, setItemsHidden] = useState([]);
  const [itemsSelected, setItemsSelected] = useState([]);
  const [itemsCorrect, setItemsCorrect] = useState([]);

  const initialItems = [
    { img: Image1, nome: "image 1" },
    { img: Image2, nome: "image 2" },
    { img: Image3, nome: "image 3" },
    { img: Image4, nome: "image 4" },
  ];

  useEffect(() => {
    const items = [...initialItems, ...initialItems]
      .map((item) => Object.assign({}, item, { id: Math.random() / 0.5 }))
      .sort(() => Math.random() - 0.5);

    setItemsCorrect(items);
    setItemsHidden(items);

    setTimeout(() => {
      setItemsCorrect(() => []);
    }, 2000);
  }, [, initialItems]);

  const checkItems = (item) => {
    const { length } = itemsSelected;

    if (length === 0) {
      setItemsSelected(() => [item]);
      return;
    }

    const [item1] = itemsSelected;
    if (item1.id === item.id) return;

    setItemsSelected((prevItem) => [...prevItem, item]);

    if (item1.nome === item.nome && item1.id !== item.id) {
      setItemsCorrect((prevItem) => [...prevItem, item1, item]);
      removeSelectedItems();

      return;
    }

    removeSelectedItems();
  };

  const removeSelectedItems = () => {
    setTimeout(() => setItemsSelected(() => []), 600);
  };

  const getImage = (item) => {
    return itemsSelected.filter(
      (itemSelected) =>
        itemSelected.img === item.img && itemSelected.id === item.id
    ).length > 0 ||
      itemsCorrect.filter(
        (itemSelected) =>
          itemSelected.img === item.img && itemSelected.id === item.id
      ).length > 0
      ? item.img
      : DefaultImagem;
  };

  return (
    <>
      <main>
        <h1>Jogo da memória</h1>
        <div className="container">
          {itemsHidden.length > 0 &&
            itemsHidden.map((item: any, index: number) => (
              <div
                key={item.id}
                className="item"
                onClick={() => checkItems(item)}
              >
                <img src={getImage(item)} style={{ width: 150 }} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
