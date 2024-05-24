import Image from "next/image";
import { addMensage } from "../actions";
import { Button } from "@/components/button/button";

const ContactPage = () => {
  return (
    // Div da pagina inteira
    <div className="flex flex-row gap-7 pt-9">
      {/* Div da imagem */}
      <div className="w-1/2 relative max-md:hidden">
        <Image src="/contact.png" height={570} width={570} alt="contact" />
      </div>

      {/* Div do título + form */}
      <div className="w-1/2 gap-3 max-md:w-full">
        <h1 className="text-white font-bold mb-10 text-3xl">
          Get in contact with us!
        </h1>

        {/* Formulario */}
        <form className="flex flex-col gap-5" action={addMensage}>
          {/* Div de cada campo */}
          <div className="flex flex-col">
            <label className="text-white pb-2 font-semibold">Name</label>
            <input
              className="rounded-md p-2 bg-slate-700"
              type="text"
              placeholder="Type your name"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white pb-2 font-semibold">Email</label>
            <input
              type="email"
              className="rounded-md p-2 bg-slate-700"
              name="email"
              placeholder="Type your best email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white pb-2 font-semibold">Number</label>
            <input
              type="tel"
              className="rounded-md p-2 bg-slate-700"
              name="phone"
              placeholder="Give me your number (Optional)"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white pb-2 font-semibold">Mensage</label>
            <textarea
              className="rounded-md p-2 h-full min-h-40 max-h-60 bg-slate-700"
              name="mensage"
              placeholder="Mensage"
              maxLength={200}
            ></textarea>
            <br />
            <Button className="font-s">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
