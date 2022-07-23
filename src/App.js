import React, {useState, useEffect} from 'react';
import "./App.css";
import Avatar from './component/Avatar';
import {PartList} from './component/PartList';

const total = {
  earring: 32,
  glasses: 17,
  neckwear: 18,
  hats: 28,
  body: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  eyebrow: 15,
  eyes: 24,
  facial_hair: 17,
  hair: 18,
  mouth: 24,
  noses: 1,
}

function App() {
  const [body, setBody] = useState(0);
  const [earring, setEarring] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [hats, setHats] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [eyebrow, setEyebrow] = useState(2);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [facialHair, setFacialHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [noses, setNoses] = useState(0);
  const random = () => {
    setBody(Math.floor(Math.random()*total.body));
    setEarring(Math.floor(Math.random()*total.earring));
    setGlasses(Math.floor(Math.random()*total.glasses));
    setHats(Math.floor(Math.random()*total.hats));
    setNeckwear(Math.floor(Math.random()*total.neckwear));
    setClothing1(Math.floor(Math.random()*total.clothing1));
    setClothing2(Math.floor(Math.random()*total.clothing2));
    setClothing3(Math.floor(Math.random()*total.clothing3));
    setEyebrow(Math.floor(Math.random()*total.eyebrow));
    setEyes(Math.floor(Math.random()*total.eyes));
    setHair(Math.floor(Math.random()*total.hair))
    setFacialHair(Math.floor(Math.random()*total.facial_hair));
    setMouth(Math.floor(Math.random()*total.mouth));
    setNoses(Math.floor(Math.random()*total.noses));
  };

  useEffect(() => {
    random();
  }, []);

  return (
    <>
    <div className='header'>
      <div className='character'>Character</div>
      <div className='customization'>🛠️Customization Game🛠️</div>
      <div className='divider'></div>
      <div className="layout">
        <div className='avatar'>
          <div className='ava-wrapper'>
            <div className='ava-picture'>
              <Avatar body={body} earring={earring} glasses={glasses} hats={hats} neckwear={neckwear} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} eyebrow={eyebrow} eyes={eyes} hair={hair} facialHair={facialHair} mouth={mouth} noses={noses}></Avatar>
              <div className='button-random'>
                <button className='random' onClick={() => random()}>RANDOMIZE</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='list-character'>
            <h2>BODY</h2>
            <div className='ava-character'>
              <PartList total={total.body} path="body" set={setBody} selected={body}></PartList>
            </div>
          </div>
          <div className='list-character'>
            <h2>EYES</h2>
            <div className='ava-character'>
              <PartList total={total.eyes} path="eyes" set={setEyes} selected={eyes}></PartList>
            </div>
          </div>
          <div className='list-character'>
            <h2>HAIR</h2>
            <div className='ava-character'>
              <PartList total={total.hair} path="hair" set={setHair} selected={hair}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>MOUTH</h2>
            <div className='ava-character'>
              <PartList total={total.mouth} path="mouth" set={setMouth} selected={mouth}></PartList></div>
            </div>
            <div className='list-character'>
            <h2>FACIAL HAIR</h2>
            <div className='ava-character'>
              <PartList total={total.facial_hair} path="facial_hair" set={setFacialHair} selected={facialHair}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>EYEBROWS</h2>
            <div className='ava-character'>
              <PartList total={total.eyebrow} path="eyebrows" set={setEyebrow} selected={eyebrow}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>EARRINGS</h2>
            <div className='ava-character'>
              <PartList total={total.earring} path="accessories/earring" set={setEarring} selected={earring}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>HAT</h2>
            <div className='ava-character'>
              <PartList total={total.hats} path="accessories/hats" set={setHats} selected={hats}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>NECKWEAR</h2>
            <div className='ava-character'>
              <PartList total={total.neckwear} path="accessories/neckwear" set={setNeckwear} selected={neckwear}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>GLASSES</h2>
            <div className='ava-character'>
              <PartList total={total.glasses} path="accessories/glasses" set={setGlasses} selected={glasses}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>CLOTHING (L1)</h2>
            <div className='ava-character'>
              <PartList total={total.clothing1} path="clothes/layer_1" set={setClothing1} selected={clothing1}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>CLOTHING (L2)</h2>
            <div className='ava-character'>
              <PartList total={total.clothing2} path="clothes/layer_2" set={setClothing2} selected={clothing2}></PartList></div>
            </div>
          <div className='list-character'>
            <h2>CLOTHING (L3)</h2>
            <div className='ava-character'>
              <PartList total={total.clothing3} path="clothes/layer_3" set={setClothing3} selected={clothing3}></PartList></div>
          </div>
        </div>
      </div>
    </div>
    </>
);
  }

export default App;
