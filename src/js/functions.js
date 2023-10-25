let Functions = {
    getGoodTimeMessage: () => {
        const hourNow = new Date().getHours();

        if (hourNow >= 5 && hourNow < 12) {
            return "Bom dia";
        } else if (hourNow >= 12 && hourNow < 18) {
            return "Boa tarde";
        } else if (hourNow >= 18 || hourNow < 4) {
            return "Boa noite";
        } else {
            return "Boa madrugada";
        }
    },
    dateDifference: (date_string, date_for_differecen = new Date()) => {
        const date = new Date(date_string);
        date_for_differecen = new Date(date_for_differecen);

        const difference_mileseconds = date_for_differecen - date;
        const difference_seconds = difference_mileseconds / 1000;
        const difference_minutes = difference_seconds / 60;
        const difference_hours = difference_minutes / 60;
        const difference_days = difference_hours / 24;

        const years = Math.floor(difference_days / 365);
        const months = Math.floor((difference_days % 365) / 30);
        const days = Math.floor(difference_days % 30);
        return { years, months, days };
    },
    formateDateString: (date_string) => {
        const date = new Date(date_string); 
        if (isNaN(date.getTime())) {
          return "Invalid date"; 
        }
        const day = String(date.getUTCDate()).padStart(2, '0'); // Obtém o dia e garante que tenha dois dígitos
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Obtém o mês (0 a 11) e acrescenta 1, depois garante dois dígitos
        const year = date.getUTCFullYear(); // Obtém o ano no formato AAAA
      
        return `${day}/${month}/${year}`;
      
    }
}

export default Functions;