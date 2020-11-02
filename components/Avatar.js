import React from 'react';
import { BigHead } from 'react-native-bigheads'

//AvatarIcons created based on gender, hairColor and skinColer
//Since the library doesn't have fx green as a possible skin color all undefined skincolors get set to yellow
//Defaults: SkinColor: Yellow, HairColor: Pink,
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
hairColor={typeof hairColor  !== "undefined" ? hairColor : "pink"}
hat="none"
lashes={gender === 'female' ? true : false}
mouth="grin"
showBackground={true}
size={size}
skinTone={typeof skinTone  !== "undefined" ? skinTone : "yellow"}
/>
)
}

export default Avatar
