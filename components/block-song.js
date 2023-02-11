/*
 * @Author: Sam Zhao
 * @Date: 2022-01-17 23:27:16
 * @LastEditTime: 2023-02-11 14:13:08
 * @LastEditors: Sam Zhao
 * @Description: 
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */

import * as React from "react"
import styled from "styled-components"



const BlockSong = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  width:100%;
`

const ArtWork = styled.img`
  border-radius: 0.375rem;
  width: 100%;
  border: 1px solid hsl(0, 0%, 0%, 0.04);
  min-width: 100%;
  aspect-ratio: 1;
  @media (min-width: 768px) {
    border-radius: 0.5rem;
  }
`
const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
export default function Component({
  name,
  url
}) {
  return (
    <BlockSong>
      <picture style={{ fontSize: 0 }}>
        <source
          srcSet={url}
          type="image/jpg"
        ></source>
        <ArtWork src={url} alt={name} />
      </picture>
      <Name>{name}</Name>
    </BlockSong>
  )
}