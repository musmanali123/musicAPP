import { createStackNavigator } from "@react-navigation/stack"
import WelcomeScreen from "../screens/Authentication/Welcome";
import LoginScreen from "../screens/Authentication/Login";
import StackNavigation from "./bottomStack";
import VoteScreen from "../screens/Vote/Vote";



const stack = createStackNavigator()

const AuthStack = () => {
    return (
        <stack.Navigator>
            <stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <stack.Screen
                name="loginScreen"
                component={LoginScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <stack.Screen
                name="Home"
                component={StackNavigation}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />
            <stack.Screen
                name="VootRoot"
                component={VoteScreen}
                options={{
                    title: '',
                    headerShown: false,
                    headerShadowVisible: false,
                }}
            />

        </stack.Navigator>
    )
}



export default AuthStack;