import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/Home";
import VoteScreen from "../screens/Vote/Vote";
import AddTrackScreen from "../screens/Tracks/AddTracks";
import ResultScreen from "../screens/Results/ResultsList";
import SettingScreen from "../screens/Setting/Setting";
import { Image, StyleSheet, View } from "react-native";
import { StaticImages, colors } from "../utils/constant";
import { moderateScale } from "../utils/Responser";
import ResultDetailsScreen from "../screens/Results/ResultDetails";
import BookMarkScreen from "../screens/Setting/Bookmark";
import NotificationScreen from "../screens/Setting/Notification";
import TrackListScreen from "../screens/Setting/TrackList";
import ContactUsScreen from "../screens/Setting/ContactUs";
import LanguageScreen from "../screens/Setting/Languages";
import EditProfileScreen from "../screens/Setting/EditProfile";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const VoteStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();
const ResultsStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();


function HomeNavigationContainer() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen
             name="Home"
             component={HomeScreen}
             options={{
                 title: '',
                 headerShown: false,
                 headerShadowVisible: false,
             }}
            
               
            />

        </HomeStack.Navigator>
    );
}


function VoteNavigationContainer() {
    return (
        <VoteStack.Navigator screenOptions={{ headerShown: false }}>
            <VoteStack.Screen
               name="Vote"
               component={VoteScreen}
               options={{
                   title: '',
                   headerShown: false,
                   headerShadowVisible: false,
               }}
            />

        </VoteStack.Navigator>
    );
}


function TrackNavigationContainer() {
    return (
        <TrackStack.Navigator screenOptions={{ headerShown: false }}>
            <TrackStack.Screen
                name="AddTrack"
                component={AddTrackScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />

        </TrackStack.Navigator>
    );
}


function ResultsNavigationContainer() {
    return (
        <ResultsStack.Navigator screenOptions={{ headerShown: false }}>
            <ResultsStack.Screen
                name="Result"
                component={ResultScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <ResultsStack.Screen
                name="ResultDetails"
                component={ResultDetailsScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />

        </ResultsStack.Navigator>
    );
}


function SettingNavigationContainer() {
    return (
        <SettingStack.Navigator screenOptions={{ headerShown: false }}>
            <SettingStack.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <SettingStack.Screen
                name="BookMark"
                component={BookMarkScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <SettingStack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <SettingStack.Screen
                name="TrackList"
                component={TrackListScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            
            <SettingStack.Screen
                name="ContactUs"
                component={ContactUsScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
             <SettingStack.Screen
                name="Languages"
                component={LanguageScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
             <SettingStack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
        </SettingStack.Navigator>
    );
}


export default function StackNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: true,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 60,
                    ...styles.shadown
                },
                tabBarHideOnKeyboard: true,
            }}>

            <Tab.Screen
                name="HomeRoot"
                component={HomeNavigationContainer}
                options={{
                   
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.circleContainer : ''} >
                            <Image source={StaticImages.baricon} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="VootRoot"
                component={VoteNavigationContainer}
                options={{
                    tabBarStyle: {
                        display: 'none'
                    },
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.circleContainer : ''} >
                            <Image source={StaticImages.musicicon} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="TrackRoot"
                component={TrackNavigationContainer}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ marginBottom: moderateScale(110) }}>
                            <Image source={StaticImages.circleIcon} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="ResultRoot"
                component={ResultsNavigationContainer}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.circleContainer : ''} >
                            <Image source={StaticImages.listIcon} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="SettingRoot"
                component={SettingNavigationContainer}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.circleContainer : ''} >
                            <Image source={StaticImages.settingicon} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create(
    {
        shadown: {
            shadowColor: "#7F5DF0",
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowOpacity: 0.67,
            shadowRadius: 3.5,
            elevation: 5
        },
        circleContainer: {
            width: 50,
            height: 50,
            borderRadius: 50,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#C5C5C5',
            backgroundColor:'#FFFFFF'
        }
    }
)