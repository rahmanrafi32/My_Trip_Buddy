import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { sortCategoryData } from "../constants/data";
import { theme } from "../theme";

const SortCategories = () => {
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View className="flex-row justify-around items-center mx-4 p-2 px-4 space-x-2 bg-neutral-100 rounded-full">
      {sortCategoryData.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            className={
              data === activeSort
                ? "bg-white shadow p-3 px-4 rounded-full flex"
                : "p-3 px-4 rounded-full flex"
            }
            onPress={() => setActiveSort(data)}
          >
            <Text
              className="font-semibold"
              style={{
                fontSize: wp(4),
                color: data === activeSort ? theme.text : "rgba(0,0,0,0.6)",
              }}
            >
              {data}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortCategories;
