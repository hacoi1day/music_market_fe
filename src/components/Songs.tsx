import { useEffect, useState } from "react";
import styled from "styled-components";
import { paginateSongs } from "../apis/song";
import { SongProperty } from "../classes/Song";
import Song from "./Song";

const SongsWrapper = styled.div`
  h2 {
    height: 60px;
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    line-height: 60px;
    text-align: left;
    margin-bottom: 20px;
  }
  hr {
    margin-bottom: 80px;
  }
`;

type SongsProps = {
  title: string;
};

const Songs = ({ title }: SongsProps) => {
  const [songs, setSongs] = useState<SongProperty[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = async () => {
    setLoading(true);
    const newSong = await paginateSongs(page);
    setSongs((prevItems) => [...prevItems, ...newSong]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreItems();

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 400 &&
        !loading
      ) {
        loadMoreItems();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SongsWrapper>
      <h2>{title}</h2>
      <hr />
      <div className="columns-1 md:columns-2 ">
        {songs.map((item, index) => (
          <Song key={index} song={item} />
        ))}
      </div>
    </SongsWrapper>
  );
};

export default Songs;
