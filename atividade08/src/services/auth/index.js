const CadastrarUsuario = async (body) => {
  
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res

};

export { CadastrarUsuario };
