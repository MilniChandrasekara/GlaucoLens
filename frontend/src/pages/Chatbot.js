import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import chatbotImage from "../assets/images/chatbot.png"; // Import the image

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      setMessages((prev) => [...prev, { role: "user", content: prompt }]);
      const res = await axios.post("http://127.0.0.1:5002/generate", { prompt });
      setMessages((prev) => [...prev, { role: "ai", content: res.data.generated_text }]);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return (
    <section className="chatbot-section py-4" style={{ minHeight: "100vh", backgroundColor: "#f7f9fc" }}>
      <Container fluid>
        <Row>
          {/* Left side space for sticker */}
          <Col md={2} className="d-flex justify-content-center align-items-center p-0">
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${chatbotImage})`, // Use the imported image
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Col>

          {/* Chat section */}
          <Col md={10} className="py-4 px-5">
            <h2 className="mb-4">AI ChatBot</h2>

            <Card className="shadow rounded-4">
              <Card.Body style={{ maxHeight: "60vh", overflowY: "auto", padding: "1.5rem" }}>
                {messages.length === 0 ? (
                  <p className="text-center text-muted">No messages yet. Start the conversation!</p>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-3 ${msg.role === "user" ? "text-end" : "text-start"}`}
                    >
                      <div
                        className={`d-inline-block p-3 rounded-4 ${
                          msg.role === "user" ? "bg-primary text-white" : "bg-light text-dark border"
                        }`}
                        style={{ maxWidth: "75%" }}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
              </Card.Body>
              <Card.Footer className="bg-white border-top-0">
                <Form.Group className="mb-2">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Type your message..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={loading}
                    className="rounded-3"
                  />
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    onClick={handleSend}
                    disabled={loading}
                    className="rounded-3 px-4"
                  >
                    {loading ? "Sending..." : "Send"}
                  </Button>
                </div>
                {error && (
                  <Alert variant="danger" className="mt-3 rounded-3">
                    {error}
                  </Alert>
                )}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Chatbot;
