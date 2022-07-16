import { Request, Response } from "express";
import { Produto } from "../models/Produtos";
import { Op } from "sequelize";

export const search = async (req: Request, res: Response) => {
  let filterName: string = req.query.filterName as string;

  let produtosFilter = await Produto.findAll({
    where: {
      produto_name: {
        [Op.like]: `%${filterName}%`,
      },
    },
  });

  if (filterName == undefined || filterName == "") {
    filterName = " ";
    res.render("pages/search", {
      filterName,
    });
  } else {
    res.render("pages/search", {
      produtosFilter,
      filterName,
    });
  }
};
