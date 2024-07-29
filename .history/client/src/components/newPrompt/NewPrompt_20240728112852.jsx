import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini.js";
import Markdown from "react-markdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewPrompt = ({ data }) => {
  //useState
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({  isLoading: false,
                                    error: "",
                                    dbData: {},
                                    aiData: {},
                                  });

  // //model Google Gemini AI
  // const chat = model.startChat({
  //   history: [
  //     data?.history.map(({ role, parts }) => ({
  //       role,
  //       parts: [{ text: parts[0].text }],
  //     })),
  //   ],
  //   generationConfig: {
  //     // maxOutputTokens: 100,
  //   },
  // });

  //useRef
  const endRef = useRef(null);
  // const formRef = useRef(null);
  // const hasRun = useRef(false);

  //useEffect - scrollIntoView
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  // //useQueryClient - useMutation
  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
  //       method: "PUT",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         question: question.length ? question : undefined,
  //         answer,
  //         img: img.dbData?.filePath || undefined,
  //       }),
  //     }).then((res) => res.json());
  //   },
  //   onSuccess: () => {
  //     queryClient
  //       .invalidateQueries({ queryKey: ["chat", data._id] })
  //       .then(() => {
  //         formRef.current.reset();
  //         setQuestion("");
  //         setAnswer("");
  //         setImg({
  //           isLoading: false,
  //           error: "",
  //           dbData: {},
  //           aiData: {},
  //         });
  //       });
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });

  // //add function
  const add = async(text) => {
    setQuestion(text);
    const result = await model.generateContent(text);
    const response = await result.response;
    setAnswer(response.data.text);
  // const add = async (text, isInitial) => {
  //   if (!isInitial) setQuestion(text);

  //   try {
  //     const result = await chat.sendMessageStream(
  //       Object.entries(img.aiData).length ? [img.aiData, text] : [text]
  //     );
  //     let accumulatedText = "";
  //     for await (const chunk of result.stream) {
  //       const chunkText = chunk.text();
  //       console.log(chunkText);
  //       accumulatedText += chunkText;
  //       setAnswer(accumulatedText);
  //     }

  //     mutation.mutate();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    add(text, false);
  };


  //useEffect - initial message
  useEffect(() => {
    if (!hasRun.current) {
      if (data?.history?.length === 1) {
        add(data.history[0].parts[0].text, true);
      }
    }
    hasRun.current = true;
  }, []);

  return (
    <>
      {/* ADD NEW CHAT */}
      {img.isLoading && <div className="">Loading...</div>}

      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}

      {question && <div className="message user">{question}</div>}

      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}

      <div className="endChat" ref={endRef}></div>
        
        {/* FORM */}
      <form className="newForm" onSubmit={handleSubmit} ref={formRef}>
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
