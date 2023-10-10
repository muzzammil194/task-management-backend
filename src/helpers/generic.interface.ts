export interface IGenericResponse<D> {
 success: boolean | undefined;
 error: string | undefined;
 data: D | undefined;
}

export interface IGenericResponseReturn<D> {
 data: D | undefined;
}

export interface IPaginatedResponse<I> {
 page: number | undefined;
 total: number | undefined;
 per_page: number | undefined;
 next: number | undefined;
 previous: number | undefined;
 items: I[] | undefined;
}

export interface IGenericResponseSuccess {
 success: boolean | undefined;
}