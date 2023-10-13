import { InfoCard } from "@/components/InfoCard";
import { RecipeInfo } from "./types";
import { FC } from "react";
import { ViewProps } from "react-native";

type RecipeInfoCardProps = ViewProps & { info: RecipeInfo };

export const RecipeInfoCard: FC<RecipeInfoCardProps> = ({ info, ...props }) => {
  switch (info.type) {
    case "yields":
      return <InfoCard content={info.amount} title="Servings" {...props} />;
    case "time":
      return <InfoCard content="time-outline" title="Time" {...props} />;
    case "difficulty":
      return (
        <InfoCard content="speedometer-outline" title="Difficulty" {...props} />
      );
    default:
      return null;
  }
};
