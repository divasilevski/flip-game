import { useCallback, useState } from "react";
import { GameCard, Preset } from "types/game.types";
import { shuffle } from "utils/shuffle";

function createCard(_, index: number) {
  return {
    uid: String(index),
    imageId: String(Math.floor(index / 2) + 1),
    isOpen: false,
    isResolve: false,
  };
}

function createCards(preset: Preset) {
  const count = preset.rows * preset.cols;
  const pureArray = Array.from(Array(count));
  const cards = pureArray.map(createCard);
  return shuffle<GameCard>(cards);
}

function resolveCards(cards: GameCard[]) {
  const opened = cards.filter((card) => card.isOpen);

  if (opened.length === 2) {
    const isSame = opened[0].imageId === opened[1].imageId;

    cards.forEach((card) => {
      if (isSame && card.isOpen) {
        card.isResolve = true;
      }

      card.isOpen = false;
    });
  }
}

interface UseGameParams {
  preset: Preset;
  onWin: () => void;
}

export function useGame({ preset, onWin }: UseGameParams) {
  const [cards, setCards] = useState<GameCard[]>(createCards(preset));

  const toggleCard = useCallback((uid: string) => {
    setCards((cards) => {
      resolveCards(cards);

      // Open card
      const index = cards.findIndex((card) => card.uid === uid);
      cards[index].isOpen = true;

      // Win condition
      if (cards.every((card) => card.isResolve || card.isOpen)) {
        setTimeout(onWin, 250);
      }

      return [...cards];
    });
  }, []);

  return { cards, toggleCard };
}
