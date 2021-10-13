import {Accordion, OptForm} from "../components";
import accordionData from '../fixtures/faqs.json'


export default function AccordionContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {accordionData.map(item => {
                return(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                )
            })}
            <OptForm>
                <OptForm.Text> Ready to watch? Enter your email to create or restart your membership. </OptForm.Text>
                <OptForm.Wrap>
                    <OptForm.Input placeholder='Email address'/>
                    <OptForm.Button>Get Started</OptForm.Button>
                </OptForm.Wrap>
            </OptForm>
        </Accordion>
    )
}