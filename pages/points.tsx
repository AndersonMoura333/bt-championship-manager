import Button from "../components/Button";
import Guest from "../layouts/Guest";

export default function Index() {
  return (
    <div>
      <Guest>
        <div className="bg-[#F7BC6D] w-full min-h-screen flex flex-col items-center">
          <div className="flex flex-col w-3/4 p-4 mt-4 bg-white rounded-md">
            <p className="text-xl font-medium">Gerenciar pontos</p>
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">1º set</p>
              <div className="flex justify-between w-2/3">
                <div className="flex flex-col items-center justify-center">
                  <input
                    type="text"
                    className="h-40 w-40 bg-[#6EA8F7]/30 rounded-md text-2xl text-center"
                  />
                  <label className="mt-2" htmlFor="">
                    Equipe 1
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <input
                    type="text"
                    className="h-40 w-40 bg-[#6EA8F7]/30 rounded-md text-2xl text-center"
                  />
                  <label className="mt-2" htmlFor="">
                    Equipe 1
                  </label>
                </div>
              </div>
              <Button label="Submeter set" />
            </div>
          </div>
        </div>
      </Guest>
    </div>
  );
}
