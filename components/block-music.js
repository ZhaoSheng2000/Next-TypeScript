/*
 * @Author: Sam Zhao
 * @Date: 2022-01-17 23:41:13
 * @LastEditTime: 2023-02-11 14:05:31
 * @LastEditors: Sam Zhao
 * @Description: 歌单卡片组件
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import Link from "next/link"
import * as React from "react"
import styled, { keyframes } from "styled-components"
import { ArrowRight } from "react-feather"



const BlockAlbum = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`

const ArtWork = styled.img`
  z-index: 2;
  border-radius: 0.375rem;
  width: 100%;
  border: 1px solid hsl(0, 0%, 0%, 0.04);
  transition: 0.3s;
  min-width: 100%;
  aspect-ratio: 1;
  @media (min-width: 768px) {
    border-radius: 0.5rem;
  }
`
const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
const YearAndGenre = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #a7a7a9;
  margin-top: 2px;
`
export default function Component({
  name,
  id,
  url,
  tag
}) {
  return (
    <Link href={`album/${id}`}>
      <BlockAlbum>
        <picture style={{ fontSize: 0 }}>
          <source
            srcSet={url}
            type="image/jpg"
          ></source>
          <ArtWork src={url} alt={name} />
        </picture>
        <Name>{name}</Name>
        <YearAndGenre>
          {tag}
        </YearAndGenre>
      </BlockAlbum >
    </Link>

  )
}