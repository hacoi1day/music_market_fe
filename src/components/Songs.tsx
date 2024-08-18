import styled from "styled-components";
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
  return (
    <SongsWrapper>
      <h2>{title}</h2>
      <hr />
      <div className="columns-2">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    </SongsWrapper>
  );
};

export default Songs;
