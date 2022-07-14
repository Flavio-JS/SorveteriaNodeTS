import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/home");
};

export const sorvete = (req: Request, res: Response) => {
  res.render("pages/sorvete");
};

export const milkShake = (req: Request, res: Response) => {
  res.render("pages/milk-shake");
};

export const sundae = (req: Request, res: Response) => {
  res.render("pages/sundae");
};

export const picole = (req: Request, res: Response) => {
  res.render("pages/picole");
};
