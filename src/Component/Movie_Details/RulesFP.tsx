import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchMovieFP } from "./SearchMovie";
import RunningFP from "./Running";
import Details_ViewFP from "./Details_View";
import Ticket_SelectionFP from "./Ticket_Select";
import { HomeFPP } from "./Home";



export const RulesFPP = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFPP />} />
        <Route path="/search" element={<SearchMovieFP />} />
        <Route path="/running" element={<RunningFP/>} />
        <Route path="/movie/:id" element={<Details_ViewFP />} />
        <Route path="/ticket" element={<Ticket_SelectionFP/>}></Route>
        {/* <Route path="/confirmed" element={<TicketBilling1 />} /> */}
      

       
        
      </Routes>
    </BrowserRouter>
  );
};
