import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import "./index.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="flex mx-auto">
      <div className="container md-auto px-4 flex justify-center">
        <div className="container max-w-screen-md px-24 py-10">
          <h1 className="text-5xl mb-12">Comunícate con nosotros</h1>
          <h2 className="text-3xl mb-8">O, aún mejor, ¡ven a visitarnos!</h2>
          <p className="text-gray-500 text-xl	mb-8">
            Nos encanta recibir a nuestros clientes, así que ven en cualquier
            momento durante las horas de oficina.
          </p>
          <h3 className="text-3xl mb-8">TPMexicana</h3>
          <p className="text-gray-500 text-xl	mb-6">
            Carretera Cárdenas-Comalcalco S/N, R/A Oriente quinta sección,
            Comalcalco, Tabasco
          </p>
          <Link className="text-xl mb-24" to="#">
            contactot@tpmexicana.com
          </Link>
          <h3 className="text-3xl mt-8 mb-6">Horario</h3>
          {!showTable ? (
            <Link to="#" onClick={() => setShowTable(true)}>
              <p className="inline-flex text-xl text-gray-500">
                Abre hoy <span className="ml-2 text-white">08:00 - 17:00</span>
                <span className="ml-2 text-white">
                  <AiOutlineCaretDown />
                </span>
              </p>
            </Link>
          ) : null}
          {showTable ? (
            <>
              <table className="table-auto mb-8 text-xl text-gray-500">
                <tbody>
                  <tr>
                    <td>
                      <p>Lun.</p>
                    </td>
                    <td>
                      <p>08:00 – 17:00</p>
                    </td>
                    <td>
                      <Link onClick={() => setShowTable(false)}>
                        <AiOutlineCaretUp className="text-white" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mar.</p>
                    </td>
                    <td>
                      <p>08:00 – 17:00</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Mié.</p>
                    </td>
                    <td>
                      <p>08:00 – 17:00</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Jue</p>
                    </td>
                    <td>
                      <p>08:00 – 17:00</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Vie.</p>
                    </td>
                    <td>
                      <p>08:00 – 17:00</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Sab.</p>
                    </td>
                    <td>
                      <p>08:00 – 17:00</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dom.</p>
                    </td>
                    <td>
                      <p>Cerrado</p>
                    </td>
                    <td>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : null}
          <div className="mt-10">
            <Link
              onClick={() => setShowModal(true)}
              to="#"
              className="text-lg w-16"
            >
              CONTACTANOS
            </Link>
          </div>
        </div>
      </div>
      <div className="Contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3789.4466332410175!2d-93.20981478506323!3d18.23533588757577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d18.2354745!2d-93.20744239999999!4m5!1s0x85ee8f12ca570cf9%3A0x39fa7f5d3fec25e!2sLos%204%20Acuerdos%2C%20Cocina%20Contempor%C3%A1nea%2C%20Carretera%20federal%20Comalcalco-Cardenas%20R%2Fa%20Oriente%201era%20Secci%C3%B3n%2C%2086650%20Comalcalco%2C%20Tab.!3m2!1d18.2353754!2d-93.2075138!5e0!3m2!1ses!2smx!4v1615705103371!5m2!1ses!2smx"
          title="map"
          width="953"
          height="777"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          tabIndex="0"
        ></iframe>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <h3 className="text-3xl mt-8 mb-6 text-black">Contactanos</h3>
                <form>
                  <label className="block text-sm text-black">
                    <span className="text-black dark:text-gray-400">
                      Nombre
                    </span>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      name="name"
                    />
                  </label>
                  <label className="block text-sm text-black">
                    <span className="text-black dark:text-gray-400">
                      Correo electrónico*
                    </span>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      name="email"
                    />
                  </label>
                  <label className="block text-sm text-black">
                    <span className="text-black dark:text-gray-400">
                      Mensage
                    </span>
                    <textarea
                      className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      name="message"
                      rows="3"
                    />
                  </label>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Contact;
