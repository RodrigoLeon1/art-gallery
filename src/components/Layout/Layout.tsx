import { FC } from "react";
import { Container } from "../../styled-components/styled-components";
import Header from "../Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
