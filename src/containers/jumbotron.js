import Jumbotron from "../components/jumbotron";
import JumboData from "../fixtures/jumbo.json"

export default function JumbotronContainer() {
    
    return(
        <Jumbotron.Container>
            {
                JumboData.map(item =>{
                    return (
                        <Jumbotron key={item.id} direction={item.direction}>
                            <Jumbotron.Pane>
                                <Jumbotron.Title> {item.title} </Jumbotron.Title>
                                <Jumbotron.SubTitle> {item.subTitle} </Jumbotron.SubTitle>
                            </Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
                        </Jumbotron>
                    )
               })
            }

        </Jumbotron.Container>
    )
}