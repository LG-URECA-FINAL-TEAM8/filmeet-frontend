import React from "react";
import styled from "styled-components";
import useCollectionsStore from "../../store/collections/useCollectionsStore";
import { Collections } from "@mui/icons-material";
import { lightTheme } from "../../styles/themes";



const CollectionList = () => {
  const { collections } = useCollectionsStore();

  return (
    <Wrapper>
      <ListContainer>
        {collections.map((collection) => (
          <CollectionCard key={collection.id}>
            <ImageSection>
              <Image src={collection.image}/>
              <Overlay>
                <Profile>
                  <ProfileImage src={collection.profileImage} alt="Profile" /> {/* 프로필 이미지 추가 */}
                  <ProfileName>{collection.name}</ProfileName>
                </Profile>
                <Badge>{collection.movies.length}</Badge>
              </Overlay>
            </ImageSection>
            <CardContent>
              <CollectionName>{collection.CollectionsName}</CollectionName>
              <Description>{collection.description || "컬렉션 설명 없음"}</Description>
            </CardContent>
            <CardActions>
              <Action>
                좋아요 {collection.likes}
              </Action>
              <Action>
                댓글 {collection.commentsCount}
              </Action>
            </CardActions>
          </CollectionCard>
        ))}
      </ListContainer>
    </Wrapper>
  );
};
export default CollectionList;


const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CollectionCard = styled.div`
  width: 100%;
  border: ${lightTheme.borderDefault};
  border-radius: 0.5rem;
  overflow: hidden;
  background: ${lightTheme.mainColor};
  box-shadow: ${lightTheme.defaulBoxShadow};
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
  background: ${lightTheme.fontGray};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${lightTheme.fontWhite};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: ${lightTheme.borderDefault};
`;

const ProfileName = styled.span`
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightBold};
  color: ${lightTheme.fontWhite};
  font-family: ${lightTheme.fontSuitBold}
`;

const Badge = styled.div`
  background: ${lightTheme.fontBlack};
  color: ${lightTheme.fontWhite};
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${lightTheme.fontSuitRegular}
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CollectionName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  color: ${lightTheme.fontBlack};
  font-family: ${lightTheme.fontSuitBold};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${lightTheme.fontGray};
  font-family: ${lightTheme.fontSuitRegular};
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: ${lightTheme.fontGray};
  border-top: ${lightTheme.borderDefault};
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: ${lightTheme.fontWeightMedium};
  }
`;
