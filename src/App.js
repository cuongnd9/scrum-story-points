import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the pulse animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

// Styled components for dark mode and fancy visuals
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121212; // Dark background
  min-height: 100vh;
  position: relative;
  color: #e0e0e0; // Light text for dark mode
`;

const StoryPointsListContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c; // Darker background for the bottom section
  padding: 20px 0;
  border-top: 2px solid #333; // Border for separation
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: #FF7D29; // Light text
  text-align: center;
  margin-bottom: 20px;
`;

const StoryPointsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap
`;

const StoryPointButton = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? '#72BF78' : '#FFF7D1')};
  color: #000;
  border: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }
`;

const SelectedPointDisplay = styled.div`
  position: fixed;
  top: 150px;
  font-size: 10rem;
  background: linear-gradient(45deg, #ff0f7b, #f89b29);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-align: center;
  animation: ${pulse} 1.5s infinite; // Apply pulse animation
`;

function App() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const storyPoints = [0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100]; // Scrum story points

  return (
    <Container>
      {selectedPoint && (
        <SelectedPointDisplay>{selectedPoint}</SelectedPointDisplay>
      )}

      <StoryPointsListContainer>
        <Title>Select Your Story Point</Title>
        <StoryPointsList>
          {storyPoints.map((point) => (
            <StoryPointButton
              key={point}
              isSelected={selectedPoint === point}
              onClick={() => setSelectedPoint(point)}
            >
              {point}
            </StoryPointButton>
          ))}
        </StoryPointsList>
      </StoryPointsListContainer>
    </Container>
  );
}

export default App;
