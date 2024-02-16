import styled from "@emotion/styled";
import { Title } from "../components/Title";

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

export function PasswordGenerator() {
  // fraguement
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "25px"
        }}
      >
        <Title>Générateur de mot de passe</Title>
        <StyledDivColumn>
          <StyledLabel>Mot de passe</StyledLabel>
          <div>
            <input type="password" />
            <button>
              <i className="bi bi-eye"></i>
            </button>
            <button>
              <i className="bi bi-shuffle"></i>
            </button>
          </div>
          
        </StyledDivColumn>

        <StyledDivColumn>
          <StyledLabel>Longeur caractères : </StyledLabel>
          <input type="range" min="8" max="24" />
        </StyledDivColumn>

        <div
          css={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <input type="checkbox" />
            <StyledLabel>A-Z</StyledLabel>
          </div>
          <div>
            <input type="checkbox" />
            <StyledLabel>0-9</StyledLabel>
          </div>
          <div>
            <input type="checkbox" />
            <StyledLabel>!@#</StyledLabel>
          </div>
        </div>
        <StyledDivColumn>
          <StyledButton>Copier le mot de passe</StyledButton>
          <StyledButton>Enregistrer le mot de passe</StyledButton>
        </StyledDivColumn>
      </div>
    </>
  );
}
