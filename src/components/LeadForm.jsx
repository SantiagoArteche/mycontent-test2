import { useContext, useEffect } from "react";
import { CloserContext } from "../context/CloserContext/CloserContext";
import { LeadContext } from "../context/LeadContext/LeadContext";
import { useFormik } from "formik";
import Swal from "sweetalert2";

export const LeadForm = () => {
  const { closer } = useContext(CloserContext);
  const { lead, handleLead } = useContext(LeadContext);

  useEffect(() => {
    fetch(`https://back-mycontent-test.vercel.app/api/schedules`)
      .then((res) => res.json())
      .then((data) => handleLead(data[1]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    lead &&
      setFormikState({
        values: {
          call: lead?.call ?? "",
          state: lead?.state ?? "",
        },
      });
  }, [lead]);
  
  const { handleSubmit, getFieldProps, setFormikState } = useFormik({
    initialValues: {
      state: "Lose",
      call: "No",
    },

    onSubmit: async ({ call, state }) => {
      if (state === "Sin estado") state = "Lose";

      const response = await fetch(
        `https://back-mycontent-test.vercel.app/api/schedules/lead/${lead?.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            call: call,
            state: state,
            closer: closer,
          }),
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Registro Actualizado!",
          background: "#6c5cf8",
          color: "white",
          icon: "success",
          confirmButtonColor: "#382a85",
          iconColor: "white",
        });
      } else {
        Swal.fire({
          title: "Error al actualizar registro!",
          background: "#6c5cf8",
          color: "white",
          icon: "error",
          confirmButtonColor: "#382a85",
          iconColor: "white",
        });
      }
    },
  });

  return (
    <form
      className="px-5 mt-5 border border-gray-300 rounded  flex flex-col gap-10 py-5"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-10 items-center">
        <h3>Closer (Usuario)</h3>
        <h3 className="capitalize">{closer}</h3>
      </div>
      <div className="flex gap-10 items-center">
        <h3>Teléfono (Usuario)</h3>
        <h3>+57 311 5097120</h3>
      </div>
      <div className="flex gap-10 items-center">
        <h3>Botón WA</h3>
        <a
          className="py-1 px-2 rounded bg-green-700 text-white"
          href="https://wa.me/3413650110"
        >
          WhatsApp
        </a>
      </div>
      <div className="flex gap-10 items-center">
        <h3>Enviar Mail</h3>
        <a
          className="py-1 px-2 rounded bg-blue-700 text-white"
          href={`mailto:${lead?.email}`}
        >
          Correo
        </a>
      </div>
      <div className="flex gap-10 items-center">
        <h3>UTM Source</h3>
        <span className="">{lead?.source}</span>
      </div>
      <div className="flex gap-10 items-center">
        <h3>UTM Content</h3>
        <span className="">{lead?.content}</span>
      </div>
      <div className="flex gap-10 items-center">
        <h3>Fecha de Agendación</h3>
        <span className="">{lead.fecha?.split("T")[0]}</span>
      </div>
      <div className="flex gap-10 items-center">
        <h3>Estado</h3>
        <select
          className="w-full border border-gray-300 rounded px-2 p-1"
          {...getFieldProps("state")}
        >
          <option
            className="text-sm"
            value="Lose"
            selected={lead?.state === "Lose"}
          >
            Lose
          </option>
          <option
            className="text-sm"
            value="Contactado"
            selected={lead?.state === "Contactado"}
          >
            Contactado
          </option>
          <option
            className="text-sm"
            value="Esperando respuesta"
            selected={lead?.state === "Esperando respuesta"}
          >
            Esperando respuesta
          </option>
          <option
            className="text-sm"
            value="En llamada"
            selected={lead?.state === "En llamada"}
          >
            En llamada
          </option>
          <option
            className="text-sm"
            value="Win"
            selected={lead?.state == "Win"}
          >
            Win
          </option>
        </select>
      </div>
      <div className="flex gap-10 items-center">
        <h3>Llamada Realizada</h3>
        <select
          className="w-full max-w-[400px] p-1 border border-gray-300 rounded px-2"
          {...getFieldProps("call")}
        >
          <option className="text-sm" value="No" selected={lead?.call === "No"}>
            No
          </option>
          <option className="text-sm" value="Si" selected={lead?.call === "Si"}>
            Si
          </option>
        </select>
      </div>
      <div className="flex gap-10 items-center">
        <h3>UTM Campaign</h3>
        <span className="">
          <p className="px-3 text-smrounded-full p-1">{lead?.campaign}</p>
        </span>
      </div>
      <div className="flex gap-10">
        <h3>Comentarios</h3>
        <textarea
          className="border border-gray-300 rounded resize-none p-1"
          placeholder="Comentarios..."
          rows={5}
          cols={80}
        />
      </div>
      <div className="flex gap-10">
        <h3>Motivo Lose</h3>
        <textarea
          className="border border-gray-300 rounded resize-none p-1"
          placeholder="Motivo..."
          rows={3}
          cols={60}
        />
      </div>
      <div className="flex justify-center">
        <input
          type="submit"
          className="bg-[#5e2d76] text-white py-2 px-5 rounded cursor-pointer"
        />
      </div>
    </form>
  );
};
