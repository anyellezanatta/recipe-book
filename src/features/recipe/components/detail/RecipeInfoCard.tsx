import { FC } from "react";
import { ViewProps } from "react-native";

import { minutesToHours } from "date-fns";

import { InfoCard } from "@/components/InfoCard";
import { RecipeInfo } from "@/features/recipe/components/types";

type RecipeInfoCardProps = ViewProps & { info: RecipeInfo };

export const RecipeInfoCard: FC<RecipeInfoCardProps> = ({ info, ...props }) => {
  switch (info.type) {
    case "yields":
      return <InfoCard content={info.amount} title="Servings" {...props} />;
    case "time":
      return (
        <InfoCard
          content="time-outline"
          title={
            info.duration >= 60
              ? `${minutesToHours(info.duration)} hour`
              : `${info.duration} min`
          }
          {...props}
        />
      );
    case "difficulty":
      return (
        <InfoCard
          content="speedometer-outline"
          title={info.difficulty}
          {...props}
        />
      );
    default:
      return null;
  }
};
