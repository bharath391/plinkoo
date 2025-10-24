import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export const Quotes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-16 flex-col justify-center pb-10 ">
      <h1 className="text-6xl font-bold">Play Plinko, Earn More!</h1>
      <h3 className="mt-4 text-xl mb-4">
       In plinko, you just drop a ball from the top of a pyramid of pins. it bounces its way down, and whatever multiplier it lands on is what you win.

        it's based on the japanese game pachinko, but here you can actually customize the risk level and the multipliers. that way, this stake original game works for pretty much anyone. 
      </h3>
      <Button className="hover:bg-green-600" onClick={() => navigate("/game")}>
        Play Plinko
      </Button>
    </div>
  );
};
