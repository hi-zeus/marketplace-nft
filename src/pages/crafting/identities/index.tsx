import React from "react";
import { AppLayout } from "../../../layout/AppLayout";
import { CraftLeftWrapper, CraftRightWrapper, CraftingWrapper } from "./styles";
import {
  CardPreviewSection,
  CraftSection,
  MatchListSection,
  SelectCardSection,
} from "../../../modules";

export const CraftingIdentitesPage: React.FC = () => {
  return (
    <AppLayout noFooter>
      <CraftingWrapper>
        <CraftLeftWrapper>
          <CraftSection />
          <SelectCardSection />
        </CraftLeftWrapper>
        <CraftRightWrapper>
          <MatchListSection />
          <CardPreviewSection />
        </CraftRightWrapper>
      </CraftingWrapper>
    </AppLayout>
  );
};
