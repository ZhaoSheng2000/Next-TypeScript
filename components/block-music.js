import * as React from "react"
import styled from "styled-components"

const BlockAlbum = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`

const ArtWork = styled.img`
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
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
const Artist = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 5, 27, 0.58);
  margin-top: 2px;
  @media (min-width: 768px) {
    font-size: 13px;
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
    url,
    name,
    artist,
    year,
    genre,
    id,
}) {
    return (
        <BlockAlbum href={id} target="blank">
            <picture style={{ fontSize: 0 }}>
                <source
                    srcSet={url}
                    type="image/jpg"
                ></source>
                <ArtWork src={url} alt={name} />
            </picture>
            <Name>{name}</Name>
            <Artist>{artist}</Artist>
            <YearAndGenre>
                {year} · {genre}
            </YearAndGenre>
        </BlockAlbum>
    )
}