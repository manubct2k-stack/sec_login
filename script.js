document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    // Adiciona um "ouvinte de eventos" para quando o formulário for submetido
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)
        
        const usernameInput = document.getElementById('username');
        const username = usernameInput.value.trim(); // Obtém o valor e remove espaços

        // Exemplo de Validação Simples
        if (username === '') {
            alert('Por favor, insira um nome de usuário.');
            usernameInput.focus(); // Coloca o foco de volta no campo
        } else {
            // Se a validação passar, você faria aqui o envio real para um servidor
            alert(`Tentativa de Login com Usuário: ${username}`);
            
            // Aqui você pode adicionar lógica de redirecionamento ou exibição de mensagem de sucesso/erro
        }
    });
});
