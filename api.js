import axios from "axios";
import { notFound } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import { getSession } from "next-auth/react";

export const peticiones = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

peticiones.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session && session.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

peticiones.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const estatus = error.response.status;
    const respuesta = error.response.data;

    switch (estatus) {
      case 400:
        respuesta.errores.forEach((e) => {
          showToast.warning(e);
        });
        break;
      case 404:
        window.location.href = "/404";
        break;
      default:
        showToast.error("Ocurrio un erro inesperado al procesar su solicitud");
        break;
    }

    return Promise.reject(error);
  },
);
