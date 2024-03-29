import styled from "@emotion/styled";
import { Title } from "../components/Title";
import { useState } from "react";
import { Link } from 'react-router-dom';

const StyledLabel = styled.text`
  color: white;
`;
const StyledButton = styled.button`
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px;
`;
const StyledDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledAction = styled.button`
  background-color: transparent;
  border: none;
  color: #eee;
  font-size: 20px;
  &:hover {
    color: #0082b0;
  }
`;

export function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [lenght, setLength] = useState(16);
  const [capitole, setCapitole] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialChart, setSpecialChart] = useState(false);

  function handleClick() {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  }

  function generateRandomPassword(
    lenght: number,
    capitole: boolean,
    number: boolean,
    specialChart: boolean
  ): string {
    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    if (capitole) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) caracteres += "0123456789";
    if (specialChart) caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let motdepasse = "";
    for (let i = 0; i < lenght; i++) {
      const randomIndex: number = Math.floor(Math.random() * caracteres.length);
      motdepasse += caracteres[randomIndex];
    }
    setPassword(motdepasse);
    return password;
  }

  // fraguement
  return (
    <>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Title>Générateur de mot de passe</Title>
        <StyledDivColumn>
          <StyledLabel>Mot de passe</StyledLabel>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <input
              size={40}
              type={type}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <StyledAction onClick={handleClick}>
              <i className="bi bi-eye"></i>
            </StyledAction>
            <StyledAction
              onClick={() =>
                generateRandomPassword(lenght, capitole, number, specialChart)
              }
            >
              <i className="bi bi-shuffle"></i>
            </StyledAction>
          </div>
        </StyledDivColumn>

        <StyledDivColumn>
          <StyledLabel>Longeur caractères : {lenght}</StyledLabel>
          <input
            type="range"
            min="8"
            max="24"
            value={lenght}
            onChange={(event) => setLength(parseInt(event.target.value))}
          />
        </StyledDivColumn>

        <div
          css={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <input
              type="checkbox"
              checked={capitole}
              onChange={() => setCapitole((value) => !value)}
            />
            <StyledLabel>A-Z</StyledLabel>
          </div>
          <div>
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((value) => !value)}
            />
            <StyledLabel>0-9</StyledLabel>
          </div>
          <div>
            <input
              type="checkbox"
              checked={specialChart}
              onChange={() => setSpecialChart((value) => !value)}
            />

            <StyledLabel>!@#</StyledLabel>
          </div>
        </div>
        <StyledDivColumn>
          <StyledButton
            onClick={() => {
              navigator.clipboard.writeText(password);
            }}
          >
            Copier le mot de passe
          </StyledButton>
          {/* <StyledButton>Enregistrer le mot de passe</StyledButton> */}
        </StyledDivColumn>
      </div>
    </>
  );
}
