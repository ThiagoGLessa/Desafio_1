// Definindo o modelo para as vagas cadastradas
const registeredVacanciesModel = {
    vacancies: []
};

// Definindo a visão para exibir as vagas cadastradas
const registeredVacanciesView = {
    // Referência ao elemento da lista de vagas cadastradas
    registeredVacanciesList: document.querySelector(".registered-vacancies"),

    // Função para adicionar uma vaga à lista de vagas cadastradas
    renderVacancy: function (placa, nomeDono, numApartamento, blocoApartamento, modeloVeiculo, vaga) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<div>
								<span><b>Placa:</b> ${placa}, <b>Modelo:</b> ${modeloVeiculo}, <b>Dono:</b> ${nomeDono}</span> 
								<span><b>Apartamento:</b> ${numApartamento}, <b>Bloco:</b> ${blocoApartamento}</span> 
								<span><b>Vaga:</b> ${vaga}</span>
							</div>
							<button class="remove-btn"></button>`;
        this.registeredVacanciesList.appendChild(listItem); // Utiliza this.registeredVacanciesList
    },

    // Função para limpar a lista de vagas cadastradas
    clearList: function () {
        this.registeredVacanciesList.innerHTML = ""; // Utiliza this.registeredVacanciesList
    }
};

// Definindo o controlador para manipular os eventos e atualizar a visão e o modelo
const registeredVacanciesController = {
    // Função para adicionar uma vaga cadastrada
    addVacancy: function (placa, nomeDono, numApartamento, blocoApartamento, modeloVeiculo, vaga) {
        registeredVacanciesModel.vacancies.push({
            placa: placa,
            nomeDono: nomeDono,
            numApartamento: numApartamento,
            blocoApartamento: blocoApartamento,
            modeloVeiculo: modeloVeiculo,
            vaga: vaga
        });
        registeredVacanciesView.renderVacancy(placa, nomeDono, numApartamento, blocoApartamento, modeloVeiculo, vaga);
    },

    // Função para remover uma vaga cadastrada
    removeVacancy: function (event) {
        if (event.target.classList.contains("remove-btn")) {
            const listItem = event.target.parentElement;
            const index = Array.from(listItem.parentElement.children).indexOf(listItem);
            registeredVacanciesModel.vacancies.splice(index, 1);
            listItem.remove();
        }
    },

    // Função para inicializar a lista de vagas cadastradas
    init: function () {
        registeredVacanciesView.clearList();
        registeredVacanciesModel.vacancies.forEach(function (vacancy) {
            registeredVacanciesView.renderVacancy(vacancy.placa, vacancy.nomeDono, vacancy.numApartamento, vacancy.blocoApartamento, vacancy.modeloVeiculo, vacancy.vaga);
        });
    }
};

// Adiciona evento de clique aos botões de remoção
registeredVacanciesView.registeredVacanciesList.addEventListener("click", registeredVacanciesController.removeVacancy);

// Adicionar algumas vagas cadastradas fictícias
registeredVacanciesController.addVacancy("ABC1234", "João da Silva", "101", "A", "Fiat Uno", "Vaga 3 - Bloco A");
registeredVacanciesController.addVacancy("XYZ5678", "Maria Souza", "202", "B", "Chevrolet Onix", "Vaga 5 - Bloco A");
registeredVacanciesController.addVacancy("DEF9876", "Pedro Oliveira", "303", "C", "Volkswagen Gol", "Vaga 5 - Bloco B");
registeredVacanciesController.addVacancy("GHI6543", "Ana Santos", "404", "C", "Ford Fiesta", "Vaga 5 - Bloco C");
registeredVacanciesController.addVacancy("MNO3210", "Paulo Coelho", "505", "C", "Toyota Corolla", "Vaga 6 - Bloco C");