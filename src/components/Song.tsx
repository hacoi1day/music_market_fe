import styled from "styled-components";
import song from "../assets/images/song.png";

const SongWrapper = styled.div`
  display: flex;
  margin-bottom: 60px;
  .thumbnail {
    margin-right: 20px;

    img {
      width: 160px;
      height: 160px;
      gap: 0px;
      border-radius: 12px;
      opacity: 0px;
      box-shadow: 4px 4px 4px 0px #00000033;
    }
  }

  .information {
    h6 {
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      text-align: left;
      color: #22313f;
    }

    p {
      font-family: Inter;
      font-size: 20px;
      font-style: italic;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: #6d6f81;
    }
  }
`;

const Song = () => {
  return (
    <SongWrapper>
      <div className="thumbnail">
        <img src={song} alt="song" />
      </div>
      <div className="information">
        <h6>Bury The Light</h6>
        <p>Casey Edwards, Victor Borba</p>
      </div>
    </SongWrapper>
  );
};

export default Song;
