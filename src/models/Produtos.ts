import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

interface ProdutoInstance extends Model {
  produto_id: number;
  produto_name: string;
  produto_description: string;
  produto_price: number;
  produto_img_name: string;
  produto_type: string;
}

export const Produto = sequelize.define<ProdutoInstance>(
  "Produtos",
  {
    produto_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    produto_name: {
      type: DataTypes.STRING,
    },
    produto_description: {
      type: DataTypes.STRING,
    },
    produto_price: {
      type: DataTypes.FLOAT,
    },
    produto_img_name: {
      type: DataTypes.STRING,
    },
    produto_type: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);
