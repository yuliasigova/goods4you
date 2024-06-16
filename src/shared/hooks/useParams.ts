import { useState } from "react";

export const useParams = () => {


    const [skip, setSkip] = useState<number>(0 )
    const [search, setSearch] = useState<string>('')
  
  
    return {skip, search, setSkip, setSearch};
  }