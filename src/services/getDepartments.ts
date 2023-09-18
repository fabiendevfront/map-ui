type CodeToDepartmentType = {
    [key: string]: string;
};

const codeToDepartment: CodeToDepartmentType = {
    "09": "Ariège",
    "11": "Aude",
    "31": "Haute-Garonne",
    "65": "Hautes-Pyrénées",
    "66": "Pyrénées-Orientales",
    "64": "Pyrénées-Atlantiques"
};

export const getDepartments = async (latitude: number, longitude: number): Promise<string> => {
    try {
        const response = await fetch(`https://geo.api.gouv.fr/communes?lat=${latitude}&lon=${longitude}`);
        const data = await response.json();
        if (data.length > 0) {
            const codeDepartment = data[0].codeDepartement;
            const departmentName = codeToDepartment[codeDepartment] || "Inconnu";

            return departmentName;
        } else {
            return "Autres";
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données.", error);
        throw error;
    }
};