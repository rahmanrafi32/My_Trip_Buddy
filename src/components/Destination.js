import React from "react";
import { View } from "react-native";
import { destinationData } from "../constants/data";
import DestinationCard from "./DestinationCard";

const Destination = () => {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((destination, index) => {
        return <DestinationCard key={index} destination={destination} />;
      })}
    </View>
  );
};

export default Destination;
