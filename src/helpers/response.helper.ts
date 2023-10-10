import { IGenericResponse, IGenericResponseSuccess, IPaginatedResponse } from "./generic.interface";

export type AppResponses<T> =
  | IGenericResponse<T>
  | IGenericResponseSuccess;

export function GenericSuccessResponse<T>(data: T): IGenericResponse<T> {
  return {
    success: true,
    error: '',
    data: data,
  };
}

export function GenericSuccessPaginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  per_page: number,
  next: any,
  previous: any,
): IGenericResponse<IPaginatedResponse<T>> {
  return {
    success: true,
    error: '',
    data: {
      page: page,
      total: total,
      per_page: per_page,
      next: next,
      previous: previous,
      items: data,
    },
  };
}

export function GenericErrorResponse(
  error: string,
  message: any = null,
): IGenericResponse<any> {
  return {
    success: false,
    error: error,
    data: message ?? {},
  };
}