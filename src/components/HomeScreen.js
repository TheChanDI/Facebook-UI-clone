// import React from 'react';
// import {Text, View, Animated, Image, Easing, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';

// const LOGO_HEIGHT = 200;
// const SEARCH_HEIGHT = 50;
// const TABBAR_ICON_HEIGHT = 38;
// class HomeScreen extends React.Component {

//   state = {
//     spinValue: new Animated.Value(0)
//   }

//   componentDidMount = () => {
//    this.spin();
//   }

//   spin = () => {
//     this.state.spinValue.setValue(0);
//     Animated.timing(
//       this.state.spinValue, {
//         toValue: 1,
//         duration: 2000,
//         easing: Easing.linear
//        }
//     ).start(() => this.spin())
//   }
//   renderComponent1 = () => {
//     return (
//       <View style={{backgroundColor: '#4167B2',
//         height: 50, width: '100%',
//         position: 'absolute',
//         flexDirection: 'row',
//         top: 0}}>
//           <Icon name='camera' color='white' size={22} style={{paddingHorizontal: 20, paddingTop: 13}} />

//           <TouchableOpacity style={{flexDirection: 'row', borderBottomWidth: 1, width: 250, height: 40,paddingTop: 5, borderColor: '#6487CB'}}>
//             <EvilIcons name='search' color='white' size={25} style={{paddingTop: 10}} />
//             <Text style={{color: '#90AED4', fontSize: 17, paddingLeft: 8, paddingTop: 10}}>Search</Text>
//           </TouchableOpacity>

//           <Icon name="facebook-messenger" color='white' size={26} style={{paddingLeft: 10, paddingTop: 10}} />
//         </View>
//     )
//   }

//   renderComponent2 = () => {
//     return (
//       <Animated.View style={{ marginTop: 50, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderColor: '#DDDEE3', height: 46, paddingTop: 10}}>
//           <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Icon name='images' size={22} color='#ff3333' />
//           <Icon name='users' size={22} color='#656773' />
//           <Icon name='user-friends' size={22} color='#656773' />
//           <Icon name='user-circle' size={22} color='#656773' />
//           <Icon name='bell' size={22} color='#656773' />
//           <Icon name='bars' size={22} color='#656773' />
//           </View>
//         </Animated.View>

//     )
//   }

//   render() {
//     const spin = this.state.spinValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '360deg']
//     });

//     const logoHeight = this.state.spinValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: [LOGO_HEIGHT, 100, LOGO_HEIGHT],
//     })

//     const rotateText = this.state.spinValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: ['0deg', '180deg', '0deg']
//     })

//     return (
//       <View style={{flex: 1}}>
//       <StatusBar backgroundColor='#30477B'/>

//         {/* <Animated.View style={{backgroundColor: '#4167B2',
//         height: searchBarHeight, width: '100%',
//         position: 'absolute',
//         flexDirection: 'row',
//         zIndex: 1,
//         top: 0}}>
//           <Icon name='camera' color='white' size={22} style={{paddingHorizontal: 20, paddingTop: 13}} />

//           <TouchableOpacity style={{flexDirection: 'row', borderBottomWidth: 1, width: 250, height: 40,paddingTop: 5, borderColor: '#6487CB'}}>
//             <EvilIcons name='search' color='white' size={25} style={{paddingTop: 10}} />
//             <Text style={{color: '#90AED4', fontSize: 17, paddingLeft: 8, paddingTop: 10}}>Search</Text>
//           </TouchableOpacity>

//           <Icon name="facebook-messenger" color='white' size={26} style={{paddingLeft: 10, paddingTop: 10}} />
//         </Animated.View> */}

//         {/* <Animated.View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 65, borderBottomWidth: 1, borderColor: '#DDDEE3', height: tabBarHeight}}>
//           <Icon name='images' size={22} color='#ff3333' />
//           <Icon name='users' size={22} color='#656773' />
//           <Icon name='user-friends' size={22} color='#656773' />
//           <Icon name='user-circle' size={22} color='#656773' />
//           <Icon name='bell' size={22} color='#656773' />
//           <Icon name='bars' size={22} color='#656773' />
//         </Animated.View> */}

//         <ScrollView
//           stickyHeaderIndices={[1]}
//           style={{flex: 1}}
//           showsVerticalScrollIndicator={false}>

//           {this.renderComponent1()}
//           {this.renderComponent2()}

// {/* <View style={{backgroundColor: '#4167B2',
//         height: 50, width: '100%',
//         position: 'absolute',
//         flexDirection: 'row',
//         top: 0}}>
//           <Icon name='camera' color='white' size={22} style={{paddingHorizontal: 20, paddingTop: 13}} />

//           <TouchableOpacity style={{flexDirection: 'row', borderBottomWidth: 1, width: 250, height: 40,paddingTop: 5, borderColor: '#6487CB'}}>
//             <EvilIcons name='search' color='white' size={25} style={{paddingTop: 10}} />
//             <Text style={{color: '#90AED4', fontSize: 17, paddingLeft: 8, paddingTop: 10}}>Search</Text>
//           </TouchableOpacity>

//           <Icon name="facebook-messenger" color='white' size={26} style={{paddingLeft: 10, paddingTop: 10}} />
//         </View> */}

// {/* <Animated.View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 65, borderBottomWidth: 1, borderColor: '#DDDEE3', height: 38}}>
//           <Icon name='images' size={22} color='#ff3333' />
//           <Icon name='users' size={22} color='#656773' />
//           <Icon name='user-friends' size={22} color='#656773' />
//           <Icon name='user-circle' size={22} color='#656773' />
//           <Icon name='bell' size={22} color='#656773' />
//           <Icon name='bars' size={22} color='#656773' />
//         </Animated.View>
//  */}

//           <View  style={{height: 600, flex: 1, alignItems: 'center', justifyContent: 'center'}}>

//             <View>
//               <Text style={{fontFamily: 'LuckiestGuy-Regular', fontSize: 30}}>WELCOME TO REACT NATIVE</Text>
//             </View>
//         <Animated.Image
//          source={require('../assets/react.png')}
//          style={{height: logoHeight, width: logoHeight, transform: [{rotate: spin}] }} />

//          <Animated.Text style={{fontFamily: 'LuckiestGuy-Regular', fontSize: 50, marginTop: '10%', transform: [{rotateX: rotateText}]}}>ANIMATION</Animated.Text>

//           </View>
//         </ScrollView>

//       </View>
//     )
//   }
// }

// export default HomeScreen;

import React from "react";
import { Text, View, ScrollView, StatusBar } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 700,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <StatusBar backgroundColor="#30477B" />
        <Text>I am HomeScreen!!</Text>
      </View>
    );
  }
}

export default HomeScreen;
