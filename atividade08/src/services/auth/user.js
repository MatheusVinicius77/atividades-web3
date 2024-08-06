const setUser = (user) => {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        return "usuário salvo";  
    }
    
    return "erro";  
}

const getUser = () => {
    const user = localStorage.getItem('user');
    
    if (!user) return; 
    return JSON.parse(user);
}

// Corrigindo a exportação
export { getUser, setUser };
