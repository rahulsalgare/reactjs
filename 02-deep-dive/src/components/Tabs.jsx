export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  // const ButtonContainer = buttonsContainer; // aur accept as an function parameter

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
