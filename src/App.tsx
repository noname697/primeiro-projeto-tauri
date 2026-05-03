import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [valor, setValor] = useState(0);
  const [dobro, setDobro] = useState(0);

  const chamarRust = async () => {
    const resposta = await invoke<string>("saudacao_personalizada", {
      name: nome,
    });
    setMensagem(resposta);
  };

  const calcularDobro = async () => {
    const resposta = await invoke<number>("calcular_dobro", {
      value: valor,
    });
    setDobro(resposta);
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <input
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome..."
        />
        <button onClick={chamarRust}>Chamar Rust</button>
        <p>{mensagem}</p>
      </div>
      <div>
        <input
          onChange={(e) => setValor(Number(e.target.value))}
          placeholder="Digite um número..."
        />
        <button onClick={calcularDobro}>Calcular Dobro</button>
        <p>
          O dobro de {valor} é {dobro}
        </p>
      </div>
    </main>
  );
}

export default App;
