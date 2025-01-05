import content from "~/models/data";

let data: typeof content = content;

function useData() {
   return data;
}

export default useData