import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DestinationCard = ({ destination }) => {
  const [isFav, setIsFav] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ width: wp(44), height: hp(35) }}
      className="flex justify-end relative p-4 py-6 space-y-3 mb-5"
      onPress={()=> navigation.navigate('Destination', {...destination})}
    >
      <Image
        source={destination.image}
        style={{ width: wp(44), height: hp(35), borderRadius: 35 }}
        className="absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomRightRadius: 35,
          borderBottomLeftRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        className="absolute top-1 right-3 rounded-full p-2"
        onPress={() => setIsFav(!isFav)}
        style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
      >
        <HeartIcon size={wp(6)} color={isFav ? "red" : "white"} />
      </TouchableOpacity>
      <Text style={{ fontSize: wp(4) }} className="text-white font-semibold">
        {destination.title}
      </Text>
      <Text style={{ fontSize: wp(2.6) }} className="text-white">
        {destination.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};

export default DestinationCard;
