import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CoverImage,
  CoverImageContainer,
  DownArrowWrapper,
  EnterButtonWrapper,
  TitleOverlayWrapper
} from "./HomeStyle";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";
import { homeConstants } from "../../constants/home";

const coverImg = require(`../../assets/${homeConstants.coverImagePath}`);

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/content");
  }

  return (
    <>
      <CoverImageContainer>
        <CoverImage src={coverImg} alt="test" />
        <DownArrowWrapper>
          <Icon name="hi-chevron-down" size="40px" fill={colors.Neutral800} stroke={colors.Neutral200} />
        </DownArrowWrapper>
        <TitleOverlayWrapper>
          <Text variant="title1" color={colors.Neutral200}>
            {homeConstants.coverTitle}
          </Text>
          <Text variant="title2" color={colors.Neutral200}>
            {homeConstants.coverSubtitle}
          </Text>
          <Text variant="subtitle" color={colors.Neutral200}>
            {homeConstants.coverSubtitle2}
          </Text>
          <EnterButtonWrapper variant="button">
            ENTER
          </EnterButtonWrapper>
        </TitleOverlayWrapper>
      </CoverImageContainer>
      <button onClick={handleNext}>
        Enter
      </button>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium reiciendis accusantium veritatis cum quasi, ab officiis in consectetur modi ea aliquid vel quia eius exercitationem est, suscipit aliquam dolore, corporis nesciunt voluptatibus voluptatem fugit iure? Odio perferendis, autem ipsum labore corrupti reprehenderit sed nisi a illo consequuntur quos, enim adipisci, qui ipsa id impedit quidem! Ut, saepe esse. Soluta fuga tempora recusandae id hic. Veritatis autem maxime numquam, quo magnam exercitationem iusto vero molestiae quibusdam minima recusandae nam aliquam animi debitis odit eius nihil. Reprehenderit quae harum illo, commodi consequatur veritatis magni distinctio est incidunt. Impedit libero repellat nisi natus. Error vero rerum culpa magnam amet totam voluptas rem consectetur nostrum fugit. Excepturi illo sequi ipsam architecto pariatur eligendi aspernatur voluptates corrupti veniam, aut cum voluptatibus hic molestiae non in culpa ex adipisci magnam nobis placeat repellendus saepe. Magnam, ducimus molestias officiis hic modi, laboriosam vitae, ut nisi consectetur saepe magni. Commodi distinctio sed esse aut laboriosam? Vero, vel? Laborum amet nemo consectetur dicta eaque asperiores officia qui accusantium odio, dolor modi, voluptatum pariatur quidem illo quam iusto perferendis aliquid error molestiae natus doloribus totam. Vitae at natus, reiciendis animi perferendis vero ipsa nisi hic ratione quam, explicabo, veniam repellat incidunt error doloremque unde libero sit laborum. Dignissimos temporibus maxime vero eius. Soluta necessitatibus quos laboriosam eveniet est reiciendis quasi ea autem nihil, velit corporis modi aliquam, rem odit aperiam culpa quod consequuntur ipsum doloribus deleniti perferendis architecto repellat tempore. Esse consequuntur libero repellat, delectus perferendis aliquam provident qui ipsam, laborum maxime quod odit, nam commodi? Amet quasi ipsa ullam, rem, neque ut veniam recusandae aperiam deserunt, velit et. Amet ipsam culpa aut, architecto dolores ullam repellat nisi deserunt nobis ex sequi harum mollitia recusandae incidunt fugiat aspernatur! Tempora qui sint vitae, consequuntur rerum quos unde reprehenderit veniam quidem dicta nemo amet in illum corporis aliquam autem quo repudiandae ipsam earum, beatae eaque aut recusandae numquam placeat! Minus eaque, doloribus sint iste rem autem quibusdam illo placeat nemo. Sunt voluptas cumque dolore reiciendis. Sapiente voluptates consequatur est, quidem velit commodi error id doloribus reprehenderit soluta aperiam ducimus quis, ullam pariatur dignissimos quisquam non et totam? Nesciunt, repellendus, ducimus commodi, est aspernatur consequatur esse cumque nam ullam nemo cupiditate. Saepe, soluta. Nulla, consequatur cupiditate voluptate sint tempora quaerat fuga ad saepe natus quae minus asperiores exercitationem aspernatur eveniet ipsa eligendi, rem maiores error hic dolorem? Fugit voluptatum, maxime unde sed, debitis autem reprehenderit optio incidunt odio tempore tempora natus dolorum cumque, nobis iste amet porro minus magnam. Quam nesciunt tempore ipsum nihil doloribus dicta quia impedit officia quae mollitia. Assumenda quaerat aliquam fugiat. Temporibus cumque laudantium corporis iure illo earum, modi enim eveniet atque consequatur impedit repellat quia! Quod corporis asperiores inventore aliquam eaque temporibus voluptas natus, sint, vel animi tenetur odio earum sit ullam iusto velit adipisci cupiditate praesentium ut minus libero. Porro ipsam esse atque rerum cupiditate fuga eveniet blanditiis, explicabo mollitia, consectetur accusantium beatae eum aliquid autem dolor quibusdam magni a! Sequi, officia dignissimos harum pariatur dolores ad culpa libero perferendis voluptates ab, necessitatibus dolorem voluptatem repellat et quas iste amet qui praesentium minima! Soluta facere nostrum deserunt quaerat suscipit? Id nesciunt facilis nulla laboriosam laudantium facere, iusto porro illo quis maiores nemo quisquam maxime et doloremque eius deleniti, impedit ex est corrupti. Voluptates porro vel laudantium cum, nihil autem voluptatum amet commodi quasi temporibus itaque deserunt saepe, perspiciatis corrupti ipsa reiciendis, id corporis eum sint aliquam hic. Expedita quis nostrum delectus enim ullam molestias, laudantium nemo neque nihil! Fugit ex expedita eos nobis ipsum inventore doloremque iusto nulla numquam itaque! Quae dignissimos blanditiis nihil magni repudiandae et unde quas natus aliquid quisquam officia, dolorem consequuntur vitae rem iste pariatur! Fugiat saepe consectetur odit voluptatem consequatur atque maxime error cumque soluta eligendi officiis repudiandae eveniet amet odio minus, illum molestias, aut dignissimos aliquam dolor rerum autem. Animi nobis perferendis tempora cumque eaque saepe aliquam delectus numquam molestias vero nulla quod consectetur laborum fugiat sequi, inventore consequuntur eos doloribus nostrum, ullam neque, ut exercitationem. Beatae dicta tempora expedita? Veritatis non libero enim quae illum fugit maxime explicabo nihil ducimus dolorum, rem ex tenetur quas inventore delectus? Odio alias voluptates delectus! Facere necessitatibus reprehenderit deleniti eius aperiam, quas provident maiores inventore perferendis aliquid blanditiis magnam vitae, error aliquam dolorem nisi, repellendus pariatur distinctio illo asperiores. Incidunt modi aut corrupti quae corporis nemo excepturi iusto perspiciatis neque laboriosam similique architecto maxime, porro aliquam optio, fugit, aspernatur soluta et ratione id! Magni omnis tenetur, dolorum dolores architecto saepe. Aliquam rerum maiores porro doloribus, doloremque nihil exercitationem iure, et accusamus qui accusantium tempora ipsum pariatur, ut consequuntur repudiandae neque perspiciatis! Facilis nulla, accusamus maiores adipisci debitis dolor voluptates repellat soluta non dolorem expedita accusantium vero maxime natus! Praesentium sint rem, hic repellat pariatur aperiam excepturi porro sequi sunt inventore, ratione, harum reiciendis vel iure ex quam similique ullam aut nobis. In, odit esse maxime quidem alias praesentium quo fugiat animi, ex cupiditate nulla dolorum dicta, sequi magni quas laboriosam assumenda? Veniam non expedita a architecto distinctio et commodi? Enim, quae amet. Magni id dolorem distinctio! Perferendis laborum laudantium perspiciatis, dolore, ab architecto officiis tempora dolores enim reprehenderit veniam magnam, ex sunt hic deleniti totam consequuntur repellat? Quasi voluptatum reprehenderit odio perspiciatis. Nihil iure, sit accusamus eos quaerat repudiandae ipsa ratione quod magni totam saepe hic inventore quibusdam soluta neque ex. Ex minus, quasi nulla architecto vitae esse laudantium voluptatum soluta nemo fuga quo voluptate aut dolorum, temporibus, iure voluptatem ipsa velit odit ea? Nihil distinctio eveniet cumque, rerum eos quas, facere, non sit molestias reprehenderit eius. Cumque, sint iste explicabo, molestias aut et impedit corrupti rem distinctio perspiciatis provident. Commodi esse deserunt molestias, tempora modi ducimus minus, velit eos, consequuntur ut accusamus aut rem iusto voluptates quia in et accusantium. Eligendi sint tenetur perspiciatis, iste at, cum ab illum ipsam accusamus sapiente debitis quod dolor similique laboriosam odit nisi a velit, quis perferendis possimus! Sunt repudiandae laboriosam tempora voluptates? Architecto temporibus molestiae a officia impedit ratione exercitationem ad nesciunt commodi! Dolores, omnis sed.
    </>
  );
}
export default Home;
