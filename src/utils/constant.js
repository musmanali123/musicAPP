const colors = {
    backgroundScreenColor: '#FFFFFF',
    blackColor: '#000000',
    buttonColor: "rgba(49, 49, 49, 1)",
    inputborderColor: 'rgba(193, 193, 193, 0.4)',
    fileUploadColor: 'rgba(193, 193, 193, 0.5)',
    fileTextColor: '#AEAEAE'
}

const StaticImages = {
    fbIcon: require('../assets/icons/facebookIcon.png'),
    googleIcon: require('../assets/icons/googleIcon.png'),
    listIcon: require('../assets/icons/listIcon.png'),
    baricon: require('../assets/icons/barIcon.png'),
    musicicon: require('../assets/icons/musicIcon.png'),
    settingicon: require("../assets/icons/settingIcon.png"),
    circleIcon: require('../assets/icons/cirleIcon.png'),
    boyImage: require("../assets/images/boy.jpg"),
    badgeicon: require('../assets/images/VectorBadge.png'),
    leftStarImage: require('../assets/images/StarImg.png'),
    vsImage: require('../assets/images/Vs.png'),
    bannerImge: require('../assets/images/bannerImag.png'),
    leftStar: require('../assets/images/lfStar.png'),
    musicContiner: require('../assets/images/musicNode.png'),
    dummyImage: require('../assets/images/dumImag.png'),
    userIcon: require("../assets/icons/user.png"),
    userProfile: require('../assets/images/userImag.png'),
    emailIcon: require('../assets/icons/email.png'),
    editIcon: require('../assets/icons/editUser.png'),
    logoutIcon: require('../assets/icons/logout.png'),
    deleteIcon: require('../assets/icons/delete.png'),
    darkbadgeIcon: require('../assets/images/darkBadge.png'),
    splashBack:require('../assets/images/Imageback.png'),
    mainImage:require('../assets/images/AppImage.png')

}

const constactDetials = [
    {
        location: '10kInfo, Inc. 13555 SE 36th St, Suite 280 Bellevue, WA 98006',
        nameIcon: require('../assets/icons/marker.png')
    },
    {
        location: 'support@support.com',
        nameIcon: require('../assets/icons/envelope.png')
    },
    {
        location: '(000) 1234 342',
        nameIcon: require('../assets/icons/phone-call.png')
    },
]

const routes = [
    {
        name: 'Bookmarks',
        route: 'BookMark',
        icon: require('../assets/icons/bookMark.png')
    },
    {
        name: 'Configure Notifications',
        route: 'Notification',
        icon: require('../assets/icons/notification.png')
    },
    {
        name: 'Tracks',
        route: 'TrackList',
        icon: require('../assets/icons/music.png')
    },
    {
        name: 'Contact Us',
        route: 'ContactUs',
        icon: require('../assets/icons/emailDark.png')
    },

    {
        name: 'Language',
        route: 'Languages',
        icon: require('../assets/icons/language.png')
    },

    {
        name: 'Rate This App',
        // route:'UploadTracks',
        icon: require('../assets/icons/star.png')
    },

    {
        name: 'Licence',
        // route:'UploadTracks',
        icon: require('../assets/icons/share.png')
    },

    {
        name: 'About Us',
        // route:'UploadTracks',
        icon: require('../assets/icons/aboutus.png')
    },

    {
        name: 'Website',
        // route:'UploadTracks',
        icon: require('../assets/icons/globe.png')
    },
]


const lnguagesChannel = [
    {
        channel: 'Recent Languages',
        langList: [
            {
                isRecent: true,
                language: 'Russia',
            },
            {
                isRecent: true,
                language: 'English',
                isSelected: true
            },
        ]
    },

    {
        channel: 'All Languages',
        langList: [
            {
                isRecent: false,
                language: 'Georgian',
            },
            {
                isRecent: false,
                language: 'Turkish',
            },
            {
                isRecent: false,
                language: 'Italian',
            }, {
                isRecent: false,
                language: 'German',
            }, {
                isRecent: false,
                language: 'Spanish',
            }, {
                isRecent: false,
                language: 'Polish',
            }, {
                isRecent: false,
                language: 'French',
            }, {
                isRecent: false,
                language: 'Armenian',
            }, {
                isRecent: false,
                language: 'Korean',
            }, {
                isRecent: false,
                language: 'Georgian',
            }, {
                isRecent: false,
                language: 'Chinese',
            },

        ]
    }

]

export { colors, StaticImages, routes, constactDetials, lnguagesChannel }