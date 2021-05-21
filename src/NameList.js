import React from 'react';

export default function NameList(){
  const name = ['gagan', 'chaman','nanag']
  const NameRen = name.map((x,index) => {
    return (
      <h2 keys = {index}>{index} {x}</h2>
    )
  })
  return(
    <div>
    {/* {name.map(x => <h2>{x}</h2>)} */}
    {NameRen}
    </div>
  )
}