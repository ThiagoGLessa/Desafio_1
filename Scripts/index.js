// Define o modelo para os dados do formulário
const formModel = {
    submitFormData: function (formDataObject) {
        // Simula o envio dos dados do formulário para um servidor
        console.log("Placa do Veículo: " + formDataObject['vehiclePlate']);
        console.log("Nome do Proprietário: " + formDataObject['ownerName']);
        console.log("Número do Apartamento: " + formDataObject['apartmentNumber']);
        console.log("Bloco do Apartamento: " + formDataObject['apartmentBlock']);
        console.log("Modelo do Veículo: " + formDataObject['vehicleModel']);
        console.log("Cor do Veículo: " + formDataObject['vehicleColor']);
        console.log("Vaga cadastrada: " + formDataObject['parkingSpot']);

        // Retorna uma mensagem de confirmação simulada
        return "Cadastro realizado com sucesso!";
    }
};

// Define o controlador para manipular o envio do formulário
const formController = {
    // Função para manipular o envio do formulário
    handleSubmit: function (event) {
        event.preventDefault();
        
        // Obtém dados do formulário
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach(function(value, key) {
            formDataObject[key] = value;
        });

        // Envia os dados do formulário para o modelo e obtém a mensagem de confirmação
        const confirmationMessage = formModel.submitFormData(formDataObject);

        // Exibe a mensagem de confirmação
        alert(confirmationMessage);
    }
};

// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('form').addEventListener('submit', formController.handleSubmit);