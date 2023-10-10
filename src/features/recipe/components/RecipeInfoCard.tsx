import { InfoCard } from "@/components/InfoCard";
import { RecipeInfo } from "./types";
import { FC } from "react";
import { ViewProps } from "react-native";

type RecipeInfoCardProps = ViewProps & { info: RecipeInfo };

export const RecipeInfoCard: FC<RecipeInfoCardProps> = ({ info, ...props }) => {
  switch (info.type) {
    case "yields":
      return (
        <InfoCard icon="american-football-outline" text="Servings" {...props} />
      );
    case "preparation":
      return <InfoCard icon="time-outline" text="Time" {...props} />;
    case "difficulty":
      return <InfoCard icon="at-outline" text="Difficulty" {...props} />;
    default:
      return null;
  }
};
