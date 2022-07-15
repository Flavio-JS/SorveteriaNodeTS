import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  //res.render("pages/home");
  res.send("home page");
};

export const sorvete = (req: Request, res: Response) => {
  //res.render("pages/sorvete");
  res.send("sorvete page");
};

export const milkShake = (req: Request, res: Response) => {
  //res.render("pages/milk-shake");
  res.send("milkShake page");
};

export const sundae = (req: Request, res: Response) => {
  //res.render("pages/sundae");
  res.send("sundae page");
};

export const picole = (req: Request, res: Response) => {
  //res.render("pages/picole");
  res.send("picole page");
};

export const combos = (req: Request, res: Response) => {
  //res.render("pages/combos");
  res.send("combos page");
};
