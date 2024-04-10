import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { StaticImages } from '../utils/constant';


const AnimatedSplashScreen = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <>
            {/* <AnimetedImage
                resizeMode="repeat"
                style={[styles.background, {
                    transform: [
                        {
                            translateX: translateAnimation,
                        },
                        {
                            translateY: translateAnimation,
                        },
                    ],
                }]}
                source={StaticImages.splashBack} /> */}
            <Animated.View style={[styles.logoContainer, { opacity: fadeAnim },]}>
                <Image source={StaticImages.mainImage} />
            </Animated.View>
        </>
    )
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: 1200,
        height: 1200,
        top: 0,
        opacity: 0.8,
        transform: [
            {
                translateX: 0,
            },
            {
                translateY: 0,
            },
        ],
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default AnimatedSplashScreen;











//___________BEFORE RUTERUN CONDITIONS

// const INPUT_RANGE_START = 0;
// const INPUT_RANGE_END = 1;
// const OUTPUT_RANGE_START = -281;
// const OUTPUT_RANGE_END = 0;
// const ANIMATION_TO_VALUE = 1;
// const ANIMATION_DURATION = 25000;
// const initialValue = 0;
// const translateValue = useRef(new Animated.Value(initialValue)).current;
// useEffect(() => {
//     const translate = () => {
//         translateValue.setValue(initialValue);
//         Animated.timing(translateValue, {
//             toValue: ANIMATION_TO_VALUE,
//             duration: ANIMATION_DURATION,
//             easing: Easing.linear,
//             useNativeDriver: true,
//         }).start(() => translate());
//     };
//     translate();
// }, [translateValue]);
// const translateAnimation = translateValue.interpolate({
//     inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
//     outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
// });
// const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);
