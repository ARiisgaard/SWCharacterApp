import React from 'react';
import { BigHead } from 'react-native-bigheads'


const Avatar = props => {
  const { gender, skinTone, hairColor, size } = props;

return (
<BigHead
accessory="none"
bgColor="blue"
bgShape="circle"
body={gender === 'female' ? "breasts" : "chest"}
clothing="shirt"
clothingColor="red"
eyebrows="raised"
eyes={gender === 'female' || gender === 'male' ? "normal" : "cyborg"}
facialHair="none"
graphic="none"
hair={gender === 'female' ? "long" : (gender === 'male') ? "short" : "none"}
hairColor={hairColor}
hat="none"
lashes={gender === 'female' ? true : false}
mouth="grin"
showBackground={true}
size={size}
skinTone={skinTone}
/>
)
}

export default Avatar
