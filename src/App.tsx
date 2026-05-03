import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const chamarRust = async () => {
    const resposta = await invoke<string>("saudacao_personalizada", {
      name: nome,
    });
    setMensagem(resposta);
  };

  return (
    <div>
      <input
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome..."
      />
      <button onClick={chamarRust}>Chamar Rust</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
