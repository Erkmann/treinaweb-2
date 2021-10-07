import type { NextPage } from "next";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheca os profissionais"}
        subtitle={
          "Preencha seu endereco e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Mateus Erkmann"}
        picture={"https://github.com/Erkmann.png"}
        rating={4}
        description={"Joinville"}
      />
    </div>
  );
};

export default Home;
