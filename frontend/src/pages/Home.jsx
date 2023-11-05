import {
  Box,
  Button,
  Container,
  HStack,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import Loading from "../components/Loading";
import axios from "axios";
import Markdown from "react-markdown";
const Home = () => {
  const [code, setCode] = useState("your code goes here");
  const [language, setLanguage] = useState("python");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(
    "Output will be displayed here"
  );
  const messageBoxRef = useRef();

  //handleCodeEditor
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  //handleCONVERT
  const handleConvert = async () => {
    messageBoxRef.current.focus();
    if (code && language) {
      let obj = {
        code: code,
        language: language,
      };
      setLoading(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/convert",
          obj,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        setMessage(response?.data?.msg);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  //handleDEBUG
  const handleDebug = async () => {
    messageBoxRef.current.focus();
    if (code) {
      let obj = {
        code: code,
      };
      setLoading(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/debug",
          obj,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        setMessage(response?.data?.msg);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  //handleQUALITYCHECK
  const handleQualityCheck = async () => {
    messageBoxRef.current.focus();
    if (code) {
      let obj = {
        code: code,
      };
      setLoading(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/qualitycheck",
          obj,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        setMessage(response?.data?.msg);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };



  return (
    <Box bg={"#3d395e"} color={"white"}>
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
        bg={"#682aa1"}
        padding={"15px"}
      >
        <HStack>
          <Select
             bg="#00E5FF"
            borderColor="tomato"
            color="black"
            width={"200px"}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            isDisabled={loading}
          >
            <option value="python">Python</option>
            <option value="javaScript">JavaScript</option>
            <option value="java">Java</option>
          </Select>
          <Button
            colorScheme="green"
            bg="#651FFF"
            onClick={handleConvert}
            isDisabled={loading}
          >
            CONVERT
          </Button>
        </HStack>
      
        <HStack justifyContent={"center"}>
          <Button colorScheme="red" onClick={handleDebug} bg="#FF8A65" isDisabled={loading}>
            DEBUG
          </Button>
          <Button
            colorScheme="telegram"
            onClick={handleQualityCheck}
            bg="#00E676"
            isDisabled={loading}
          >
            QUALITY CHECK
          </Button>
        </HStack>
      </Stack>

      <Container
        maxW={"100%"}
        style={{ minHeight: "calc(100vh - 195px)", overflow: "hidden" }}
        margin={"0px"}
        padding={"0px"}
      >
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          margin={"0px"}
          spacing={0}
          bg={"black"}
        >
          <Box width={{ base: "100%", md: "100%", lg: "50%" }}>
            <CodeEditor code={code} onChange={handleCodeChange} />
          </Box>
          <Box
            overflowY={"auto"}
            className="custom-scrollbar"
            width={{ base: "100%", md: "100%", lg: "50%" }}
            height={"calc(100vh - 195px)"}
            padding={"10px"}
          >
            {loading ? (
              <Stack
                justifyContent={"center"}
                height={"calc(100vh - 195px)"}
                alignItems={"center"}
              >
                <Loading />
              </Stack>
            ) : (
              <Box
                style={{ paddingLeft: "20px" }}
                ref={messageBoxRef}
                tabIndex={0}
              >
                <Markdown>{message}</Markdown>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
