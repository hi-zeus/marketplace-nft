import React, { useState } from "react";
import {
  EmptyCraftCard,
  CraftCardGroup,
  CraftCardWrapper,
  CraftSectionWrapper,
  TitleWrapper,
} from "./styles";
import { Button } from "../../components";
import { identityCraft } from "./data";

export const CraftSection: React.FC = () => {
  const [selectedCraft, setSelectedCraft] = useState("crafting");
  return (
    <CraftSectionWrapper>
      <TitleWrapper>
        <h3>Craft a Prediction</h3>
        <Button className="craft-button" disabled>
          Craft Prediction
        </Button>
      </TitleWrapper>
      <p>
        Identities are cards crafted by combining a Day-Month card, a Year card
        and a Category card. Select one card of each type to craft an Identity.
      </p>
      <CraftCardGroup>
        {identityCraft.map((item, key) => (
          <CraftCardWrapper key={key}>
            <h6>{item.title}</h6>
            <EmptyCraftCard
              active={selectedCraft === item.key ? "true" : undefined}
              onClick={() => setSelectedCraft(item.key)}
            />
          </CraftCardWrapper>
        ))}
      </CraftCardGroup>
    </CraftSectionWrapper>
  );
};
