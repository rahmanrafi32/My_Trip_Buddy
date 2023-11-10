import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ChevronLeftIcon, ClockIcon, HeartIcon, MapPinIcon, SunIcon } from "react-native-heroicons/solid";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../theme/index";

const Destination = (props) => {
  const destination = props.route.params;
  const ios = Platform.OS === ios;
  const topMargin = ios ? "mt-2" : "mt-10";
  const navigation = useNavigation();
  const [isFav, setIsFav] = useState(false);
  return (
    <View className="bg-white flex-1">
      <Image
        source={destination.image}
        style={{ width: wp(100), height: hp(55) }}
      />
      <StatusBar style="light" />

      <SafeAreaView
        className={
          "flex-row justify-between items-center w-full absolute " + topMargin
        }
      >
        <TouchableOpacity
          className="p-2 rounded-full ml-4"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          className="p-2 rounded-full mr-4"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          onPress={() => setIsFav(!isFav)}
        >
          <HeartIcon
            size={wp(7)}
            strokeWidth={4}
            color={isFav ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View
        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-12"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start">
            <Text
              style={{ fontSize: wp(7) }}
              className="font-bold flex-1 text-neutral-700"
            >
              {destination?.title}
            </Text>
            <Text style={{ fontSize: wp(7), color: theme.text }}>
              $ {destination?.price}
            </Text>
          </View>
          <Text style={{fontSize: wp(3.7)}} className='text-neutral-700 tracking-wide mb-2'>
            {destination.longDescription}
          </Text>
          <View className='flex-row justify-between mx-1'>
            <View className='flex-row space-x-0 items-start'>
                <ClockIcon size={wp(7)} color='skyblue'/>
                <View className='flex space-y-2'>
                    <Text style={{fontSize: wp(4.5)}} className='font-bold text-neutral-700'>
                        {destination.duration}
                    </Text>
                    <Text className='tracking-wide text-neutral-700'>Duration</Text>
                </View>
            </View>
            <View className='flex-row space-x-0 items-start'>
                <MapPinIcon size={wp(7)} color='#f87171'/>
                <View className='flex space-y-2'>
                    <Text style={{fontSize: wp(4.5)}} className='font-bold text-neutral-700'>
                        {destination.distance}
                    </Text>
                    <Text className='tracking-wide text-neutral-700'>Distance</Text>
                </View>
            </View>
            <View className='flex-row space-x-0 items-start'>
                <SunIcon size={wp(7)} color='orange'/>
                <View className='flex space-y-2'>
                    <Text style={{fontSize: wp(4.5)}} className='font-bold text-neutral-700'>
                        {destination.weather}
                    </Text>
                    <Text className='tracking-wide text-neutral-700'>Sunny</Text>
                </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={{backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50)}} className='mb-6 mx-auto flex justify-center items-center rounded-full'>
            <Text className='text-white font-bold'>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Destination;
