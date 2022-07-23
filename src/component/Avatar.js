import React from 'react';
import {Part} from './Part';

const Avatar = ({earring, glasses, neckwear, hats, body, clothing1, clothing2, clothing3, eyebrow, eyes, facial_hair, hair, mouth, noses}) => {
  return (
    <div className='ava'>
        <Part path={"body"} index={body} zIndex={0}></Part>
        <Part path={"accessories/earring"} index={earring} zIndex={2}></Part>
        <Part path={"accessories/glasses"} index={glasses} zIndex={5}></Part>
        <Part path={"accessories/hats"} index={hats} zIndex={7}></Part>
        <Part path={"accessories/neckwear"} index={neckwear} zIndex={5}></Part>
        <Part path={"clothes/layer_1"} index={clothing1} zIndex={2}></Part>
        <Part path={"clothes/layer_2"} index={clothing2} zIndex={3}></Part>
        <Part path={"clothes/layer_3"} index={clothing3} zIndex={4}></Part>
        <Part path={"eyebrow"} index={eyebrow} zIndex={2}></Part>
        <Part path={"eyes"} index={eyes} zIndex={1}></Part>
        <Part path={"hair"} index={hair} zIndex={6}></Part>
        <Part path={"facial_hair"} index={facial_hair} zIndex={0}></Part>
        <Part path={"mouth"} index={mouth} zIndex={4}></Part>
        <Part path={"noses"} index={0} zIndex={0}></Part>
    </div>
  );
}

export default Avatar;
