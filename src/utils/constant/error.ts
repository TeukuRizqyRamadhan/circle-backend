import { IErrorObj } from "../../types/app";

const ERROR_OBJECT: IErrorObj = {
   DATA_NOT_FOUND: {
      statusCode: 404,
      message: "Data not found!",
   },
};

const ERROR_MESSAGE = {
   DATA_NOT_FOUND: "DATA_NOT_FOUND",
};

export { ERROR_OBJECT, ERROR_MESSAGE };
