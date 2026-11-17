import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

dayjs.locale("pt-br");

export function horaAgora() {
    return dayjs().hour();
}

export function formatarData(data) {
    return dayjs(data).format("dddd, DD/MM/YYYY [às] HH:mm");
}