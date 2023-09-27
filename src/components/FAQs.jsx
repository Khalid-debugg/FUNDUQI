import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FAQs = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <Accordion key={index} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontWeight="700" as="span" flex="1" textAlign="left">
                    {question.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{question.answer}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
};

export default FAQs;
