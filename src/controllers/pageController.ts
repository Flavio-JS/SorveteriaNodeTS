import { Request, Response } from "express";
import { Produto } from "../models/Produtos";

export const home = async (req: Request, res: Response) => {
  let combos = await Produto.findAll({
    where: {
      produto_type: "Combos",
    },
  });
  let sorvetes = await Produto.findAll({
    where: {
      produto_type: "Sorvetes",
    },
  });
  let milkShakes = await Produto.findAll({
    where: {
      produto_type: "Milk Shakes",
    },
  });
  let sundaes = await Produto.findAll({
    where: {
      produto_type: "Sundaes",
    },
  });
  let picoles = await Produto.findAll({
    where: {
      produto_type: "Picolés",
    },
  });

  let comboTitle = combos[0].produto_type;
  let sorveteTitle = sorvetes[0].produto_type;
  let milkShakeTitle = milkShakes[0].produto_type;
  let sundaesTitle = sundaes[0].produto_type;
  let picoleTitle = picoles[0].produto_type;

  res.render("pages/home", {
    combos,
    sorvetes,
    milkShakes,
    sundaes,
    picoles,
    comboTitle,
    sorveteTitle,
    milkShakeTitle,
    sundaesTitle,
    picoleTitle,
  });
};

export const sorvete = async (req: Request, res: Response) => {
  let sorvetes = await Produto.findAll({
    where: {
      produto_type: "Sorvetes",
    },
  });
  let sorveteTitle = sorvetes[0].produto_type;

  res.render("pages/home", {
    sorvetes,
    sorveteTitle,
  });
};

export const milkShake = async (req: Request, res: Response) => {
  let milkShakes = await Produto.findAll({
    where: {
      produto_type: "Milk Shakes",
    },
  });
  let milkShakeTitle = milkShakes[0].produto_type;
  res.render("pages/home", {
    milkShakes,
    milkShakeTitle,
  });
};

export const sundae = async (req: Request, res: Response) => {
  let sundaes = await Produto.findAll({
    where: {
      produto_type: "Sundaes",
    },
  });
  let sundaesTitle = sundaes[0].produto_type;
  res.render("pages/home", {
    sundaes,
    sundaesTitle,
  });
};

export const picole = async (req: Request, res: Response) => {
  let picoles = await Produto.findAll({
    where: {
      produto_type: "Picolés",
    },
  });
  let picoleTitle = picoles[0].produto_type;
  res.render("pages/home", {
    picoles,
    picoleTitle,
  });
};

export const combos = async (req: Request, res: Response) => {
  let combos = await Produto.findAll({
    where: {
      produto_type: "Combos",
    },
  });
  let comboTitle = combos[0].produto_type;
  res.render("pages/home", {
    combos,
    comboTitle,
  });
};
